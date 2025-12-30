import { PayrollSuppliersDTO, ProvidersDTO } from "../../../entities/payRollSuppliers";
import * as XLSX from "xlsx";
import fs from 'fs';
import axios from "axios";
import { SicapClient } from "../../../clients/sicap.client";
import { ResponseAPI } from "../../../types";
import { coordenadoriaSaude } from "../../../data/coordenadoriaSaude";
import { cargos } from "../../../data/Cargos";
import { cargaHoraria } from "../../../data/CargaHoraria";
import { validatorCPF } from "../../../utils/validatorCPF";

export class PayRollSuppliersService {
    private client = new SicapClient();

    limpaCNPJ = (CNPJ: string): string => {
        if (!CNPJ) return ""
        return CNPJ.replace(/\D/g, "").padStart(14, "0");
    }

    limpaCPF = (CPF: string): string => {
        if (!CPF) return ""
        if(typeof CPF === "number"){
            CPF = String(CPF);
        }
        return CPF.replace(/\D/g, "").padStart(11, "0");
    }

    async mapperPayRollSupplierervice(data: any): Promise<PayrollSuppliersDTO> {
        const newpayRollSuppliers: PayrollSuppliersDTO = {
            ParceriaId: 43,
            PrestacaoContaId: 860,
            Prestadores: [],
            RazaoSocialEmpresa: data["Razao Social Empresa"],
            CnpjEmpresa: data["CNPJ Empresa"],
            ValorBrutoNf: data["Valor Bruto NF"],
            NumNotaFiscal: data["Nº Nota Fiscal"],
            PisNf: data["PIS NF"],
            CofinsNf: data["COFINS NF"],
            CsllNf: data["CSLL NF"],
            PccNf: data["PCC NF"],
            IrrfNf: data["IRRF NF"],
            IssNf: data["ISS NF"],
            InssNf: data["INSS Retido NF"],
            ValorLiquido: data["Valor Liquido"],
            InformacoesComplementares: data["Informações Complementares"],
        }
        return newpayRollSuppliers;
    }

    async mapperProviderService(data: any): Promise<ProvidersDTO> {
        
        if (!validatorCPF(data["CPF Funcionário"])){
            console.log(`${data["Nome"]}: ${validatorCPF(data["CPF Funcionário"])}`)
        }
        const newProvider: ProvidersDTO = {
            Id: 0,
            Nome: data["Nome"],
            NomeSocial: data["Nome Social"],
            CPF: this.limpaCPF(data["CPF Funcionário"]),
            DataNascimento: new Date(data["DataNascimento"]),
            AutoDeclaracaoRacial: Number(data["Autodeclaração Racial"]),
            AutoDeclaracaoGenero: Number(data["Autodeclaração de Gênero"]),
            CargoId: cargos.find(c => c.CBO === String(data["CBO/Categoria Profissional"]))?.Id || 0,
            FuncaoId: Number(data["Função"]),
            TipoCoordenadoria: coordenadoriaSaude.find(c => c.Descricao === data["Tipo de Coordenadoria"])?.Id || 0,
            AreaAtuacaoId: Number(data["Area de Atuação"]),
            CargaHorariaSemanalId: cargaHoraria.find(c => c.Horas === Number(data["Carga Horária Semanal/Plantão"]))?.Id || 0,
            DeficitCargaHoraria: Number(data["Déficit de Carga Horária"]).toString().length <= 3 ? Number(data["Déficit de Carga Horária"]) : Number(Number(data["Déficit de Carga Horária"]).toString().slice(0,3)),
            TipoAtividade: Number(data["Tipo de Atividade"]),
            NumConselhoClasse: data["Nº Conselho de Classe"],
            TurnoTrabalho: Number(data["Turno de Trabalho"]),
            UnidadeId: Number(data["Unidade "]),
            CnsDoProfissional: String(data["CnsDoProfissional"]),
            LinhaServicoId: Number(data["Linha de Serviço"]),
            ValorPorProfissional: Number(data[" Valor por Profissional "]),
            PlantaoMensal: Number(data["Plantão Mensal"]),
            Especificacao: "",
        }
        return newProvider
    }

    async XLSfromJSON(file: any): Promise<PayrollSuppliersDTO> {
        const workbook = XLSX.read(file.buffer, { type: "buffer" });
        const sheet600 = workbook.Sheets["0600"];
        const sheet610 = workbook.Sheets["0610"];

        if (!sheet600 || !sheet610) {
            throw new Error("As abas '0600' e '0610' são obrigatórias na planilha.");
        }

        const data600 = XLSX.utils.sheet_to_json(sheet600, { defval: "" });
        const data610 = XLSX.utils.sheet_to_json(sheet610, { defval: "" });

        // console.log("📄 Conteúdo da aba 0600 (empresa):");
        // console.table(data600.slice(0, 3)); // mostra as 3 primeiras linhas
        // console.log(Object.keys(data600[0]));

        const providers: ProvidersDTO[] = await Promise.all(data610.map((row: any) =>
            this.mapperProviderService(row))
        )

        const suppliers: PayrollSuppliersDTO = await this.mapperPayRollSupplierervice(data600[0])

        suppliers.Prestadores = providers;

        return suppliers
    }

    async createPayrollSuppliers(file: Express.Multer.File, auth: string): Promise<ResponseAPI> {
        const payRollSupliers = await this.XLSfromJSON(file);
        const prestadoresComCargaZero = payRollSupliers.Prestadores.filter(p => p.CargaHorariaSemanalId === 0);

        if (prestadoresComCargaZero.length > 0) {
            const lista = prestadoresComCargaZero.map(p =>
                `- ${p.Nome} (${p.CPF}) → CargaHorariaSemanalId: ${p.CargaHorariaSemanalId}`
            );
            return {
                statusCode: 400,
                success: false,
                message: "Foram encontrados prestadores com CargaHorariaSemanalId igual a 0.",
                data: lista,
            };
        }

        const verificacoes = await Promise.allSettled(
            payRollSupliers.Prestadores.map(p =>
                this.client.getCargaHorariaById(auth, p.CargaHorariaSemanalId)
                    .then(() => ({ ok: true, prestador: p }))
                    .catch(() => ({ ok: false, prestador: p }))
            )
        );

        // const cargasInvalidas = verificacoes
        //     .filter((r): r is PromiseFulfilledResult<{ ok: boolean; prestador: ProvidersDTO }> =>
        //         r.status === "fulfilled" && !r.value.ok
        //     )
        //     .map(r => r.value.prestador);

        // if (cargasInvalidas.length > 0) {
        //     const lista = cargasInvalidas.map(p =>
        //         `- ${p.Nome} (${p.CPF}) → CargaHorariaSemanalId: ${p.CargaHorariaSemanalId}`
        //     );
        //     return {
        //         statusCode: 400,
        //         success: false,
        //         message: "Foram encontrados prestadores com CargaHorariaSemanalId inválido no sistema.",
        //         data: lista,
        //     };
        // }



        try {
            // console.log("json payRollSupliers:", JSON.stringify(payRollSupliers.Prestadores.map(p=>p), null, 2));
            const data = await (this.client.createPayRollSuppliers(auth, payRollSupliers));
            return {
                statusCode: 201,
                success: true,
                message: "PayrollSuppliers entry created successfully",
                data: data,
            };
        } catch (error) {
            // console.error("Error creating payroll entries:", error);
            if (axios.isAxiosError(error)) {
                // const jsonError = error.response?.config.data  
                
                // fs.writeFileSync(
                //         'config.log.json',
                //         JSON.stringify(jsonError, null, 2),
                //         'utf-8'
                //         )
                
                console.error("Axios error:", {
                    status: error.response?.status,
                    headers: error.response?.headers,
                    data: error.response?.data,
                    // config: error.response?.config.data,      
                },
                
                );
                return {
                    statusCode: error.response?.status || 500,
                    success: false,
                    message: error.message,
                    data: error.response?.data,
                };
            }
            // console.error("Error creating payroll:", error);
            if (error instanceof Error) {
                return {
                    statusCode: 500,
                    success: false,
                    message: error.message,
                    data: null,
                };
            }
            return {
                statusCode: 500,
                success: false,
                message: "Erro desconhecido",
                data: null
            }
        }
    }
}



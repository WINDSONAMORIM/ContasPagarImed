import { AccountsPayableDTO } from "../entities/accountsPayable";
import { AccountsPayable } from "../models/accountsPayable";

export const mappersXml = ( parsed : any ): AccountsPayable  => {
    const infNFe = parsed?.nfeProc?.NFe?.infNFe;
        return new AccountsPayable({
            ParceriaId: 43,
            PrestacaoContaId: 123,
            FornecedorId: 456,
            Competencia: new Date(),
            DataVencimento: new Date(),
            DataEmissao: new Date(),
            NumFatura: "",
            NFDoc: infNFe?.ide?.nNF || "",
            NFDocSerie: infNFe?.ide?.serie || "",
            ValorParcela: parseFloat(infNFe?.total?.ICMSTot?.vNF || "0"),
            ValorTotal: parseFloat(infNFe?.total?.ICMSTot?.vNF || "0"),
            ParcelaPaga: 0,
            TotalParcelas: 1,
            ArquivoTemp: {
                nomeDoArquivo: "arquivo.xml",
                hashArquivo: "abc123",
                extensaoArquivo: ".xml",
                cnpjInstituicao: "12345678000195",
                parceriaId: 43,
            },
            TributoRetido: false,
            IssRetido: 1,
            InssRetido: 1,
            IrrfRetido: 1,
            PisPasepRetido: 1,
            CofinsRetido: 0,
            CsllRetido: 0,
            PccRetido: 0,
            NumIdentificador: "0",
            Rateios: [
                {
                    Id: 0,
                    UnidadeId: 1,
                    LinhaServicoId: 43,
                    TipoDespesaId: 58,
                    Valor: parseFloat(infNFe?.total?.ICMSTot?.vNF || "0"),
                },
            ],
            Observacao: "",
        });}
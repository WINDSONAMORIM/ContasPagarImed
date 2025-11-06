import * as xlsx from "xlsx";
import { Employee } from "../entities/employee";
import { PayRollDTO } from "../entities/payRoll";
import { mapperPayRoll } from "./mapperPayRoll";

export const xlsxParseJson = async (file: Express.Multer.File): Promise<Employee[]> => {
  try {
    const workbook = xlsx.read(file.buffer, {
      type: "buffer",
      cellDates: true,
    });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const jsonData = xlsx.utils.sheet_to_json<string[]>(worksheet, {
      header: 1,
      raw: false,
    });

    const headers = jsonData[0].map((h) => h.trim());
    const dataRows = jsonData.slice(1);
    
    const jsonDataFormatted: Employee[] = dataRows.map((row) => {
      return {        
        ParceriaId: 43,
        Nome: row[headers.indexOf("NomeCompleto")]?.toString().trim() || "",
        CPF: row[headers.indexOf("CPF")]?.toString().trim() || "",
        CnsDoProfissional:
          row[headers.indexOf("NumCNS")]?.toString().trim() || "",
      };
    });

    return jsonDataFormatted;
  } catch (error) {
    console.error("Error parsing XLSX file:", error);
    throw new Error("Failed to parse XLSX file");
  }
};

export const xlsxParseJsonPayRoll = async (file: Express.Multer.File): Promise<PayRollDTO[]> => {
  try {
    const workbook = xlsx.read(file.buffer, {
      type: "buffer",
      cellDates: true,
    });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const jsonData = xlsx.utils.sheet_to_json<string[]>(worksheet, {
      header: 1,
      raw: false,
    });

    const headersOrigin = jsonData[0].map((h) => h.trim());

    //adcionado aqui
    const headers = (header: string): string => {
      // Mapeamento manual para casos específicos onde a normalização automática não é suficiente
      const manualMap: { [key: string]: string } = {
        "1ª Parc 13º Salário ou única": "decimoTerceiroPrimeiraParcela",
        "2ª Parc 13º Salário": "decimoTerceiroSegundaParcela",
        "Adicional 1/3 Férias Proporcionais Rescrisão": "feriasProporcionaisRescisaoUmTercoAdicional",
        "13º Salário Proporcional Rescisão": "decimoTerceiroProporcionalRescisao",
        "13º Salário Indenizado": "decimoTerceiroIndenizado",
        "Valor Liquido Rescisao (A Pagar)": "valorLiquidoRescisaoAPagar",
        "INSS Férias": "inssFerias",
        "INSS 13º Salário": "inssDecimoTerceiro",
        "INSS Rescisão": "inssRescisao",
        "IRRF Férias": "irrfFerias",
        "IRRF 13º Salário": "irrfDecimoTerceiro",
        "IRRF Rescisão": "irrfRescisao",
        "Desconto Auxilios": "descontosAuxilios",
        "Desconto DSR": "descontosDsr",
        "Antecipacao Folha": "descontosAntecipacaoFolha",
        "Desconto Pagto Indevido": "descontosPagamentoIndevido",
        "Desconto Arredondamento": "descontosArredondamento",
        "Desconto Multa Art. 480 (rescisão antecipada)": "descontosMultaRescisaoAntecipado",
        "Desconto do Aviso Prévio": "descontosAvisoPrevio",
        "Desconto 1ª Parc 13º Salario": "descontosPrimeiraParcelaDecimoTerceiro",
        "Desconto Adiantamento 13º Salário": "descontosAdiantamentoDecimoTerceiro",
        "Empréstimos Consignados": "descontosEmprestimosConsignados",
        "Multa Rescisória": "descontosMultaRescisoria",
        "Contribuição Sindical Mensal": "descontosContribuicaoSindicalMensal",
        "Contribuição Sindical Anual": "descontosContribuicaoSindicalAnual",
        "Desconto Adiantamento Salario": "descontosAdiantamentoSalario",
        "Desconto de Convênios": "descontosConvenios",
        "Desconto Seguro de Vida": "descontosSeguroVida",
        "Outros Descontos": "descontosOutros",
        "Base PIS s/ Folha": "basePisSemFolha",
        "Base PIS 13º s/ Folha": "basePisDecimoTerceiroSemFolha",
        "Base PIS Ferias s/ Folha": "basePisFeriasSemFolha",
        "Base PIS Rescisão s/ Folha": "basePisRescisaoSemFolha",
        "Base FGTS 13º": "baseFgtsDecimoTerceiro",
        "Base FGTS 13º Demitidos": "baseFgtsDecimoTerceiroDemitidos",
        "Base IRRF 13º": "baseIrrfDecimoTerceiro",
        "Base INSS 13º": "baseInssDecimoTerceiro",
        "FGTS 13º": "fgtsDecimoTerceiro",
        "FGTS Art. 480": "fgtsRescisaoAntecipada",
        "PIS s/ Folha": "pisSemFolha",
        "ISS S/ RPA": "issRPA",
        "INSS Retido S/ RPA": "descontoInssRPA",
        "INSS S/ RPA (Patronal)": "inssRPAPatronal",
        "IRRF S/ RPA": "irrfSRPA",
        "13º Outros Descontos": "decimoTerceiroOutrosDescontos",
        "CNS Profissional": "cnsDoProfissional",
        "Identidade de Gênero": "identidadeGenero",
        "Autodeclaração Racial Id": "autodeclaracaoRacialId",
        "CategoriaProfissionalCBO": "categoriaProfissionalCBO",
        "TipoColaboradorId": "tipoColaboradorId",
        "Tipo de Coordenadoria": "tipoCoordenadoria",
        "Tipo de Atividade Id": "tipoAtividadeId",
        "Regime de Contratação Id": "regimeContratacaoId",
        "Data Admissao": "dataAdmissao",
        "Data Desligamento": "dataDesligamento",
        "Nº Conselho de Classe": "numConselhoClasse",
        "Jornada": "jornada",
        "Função": "funcaoId", // Mapeando para funcaoId, assumindo que a planilha tem o nome da função
        "Salário Base": "salarioBase",
        "Salário Bruto": "salarioBruto",
        "Salário Liquido": "salarioLiquido",
        "Horas Extras": "horasExtras",
        "DSR Hora Extra": "horasExtrasDsr",
        "Adicional Noturno": "adicionalNoturno",
        "DSR Adicional Noturno": "adicionalNoturnoDsr",
        "Adicional de Periculosidade": "adicionalPericulosidade",
        "Adicional Insalubridade": "adicionalInsalubridade",
        "Diferença Salarial": "diferencaSalarial",
        "Pensão Alimentícia ": "pensaoAlimenticia",
        "Salario Familia": "salarioFamilia",
        "Salario Maternidade": "salarioMaternidade",
        "Restituicao INSS": "restituicaoInss",
        "Restituição IRRF": "restituicaoIrrf",
        "Adiantamento Salário": "adiantamentoSalario",
        "Outros Proventos": "outrosProventos",
        "Férias": "ferias",
        "Abono Ferias": "feriasAbono",
        "Ferias Proximo Mes": "feriasProximoMes",
        "Saldo de Salário Rescisão": "saldoSalarioRescisao",
        "Férias Proporcionais Rescisão": "feriasProporcionaisRescisao",
        "Multa Rescisao": "multaRescisao",
        "Outras Verbas Rescisórias": "outrasVerbasRescisorias",
        "Valor Bruto Rescisão": "valorBrutoRescisao",
        "PlantaoMensal": "plantaoMensal",
        "Vale Transporte": "valeTransporte",
        "Vale Alimentação": "valeAlimentacao",
        "Vale Refeicao": "valeRefeicao",
        "Cesta Básica": "cestaBasica",
        "Auxílio Creche": "auxilioCreche",
        "Outro Beneficios": "outrosBeneficios",
        "INSS": "descontosInss",
        "IRRF": "descontosIrrf",
        "Descontos Nao Dedutiveis": "descontosNaoDedutiveis",
        "Plano Saude": "descontosPlanoSaude",
        "Vale Transporte Individualizado": "descontosValeTransporteIndividualizado",
        "Base FGTS": "baseFgts",
        "Base FGTS Ferias": "baseFgtsFerias",
        "Base FGTS Rescisao": "baseFgtsRescisao",
        "Base FGTS Demitidos": "baseFgtsDemitidos",
        "Base IRRF": "baseIrrf",
        "Base IRRF Ferias": "baseIrrfFerias",
        "Base IRRF Rescisão": "baseIrrfRescisao",
        "Base IRRF PLR Anual": "baseIrrfPlrAnual",
        "Base INSS": "baseInss",
        "Base INSS Ferias": "baseInssFerias",
        "Base INSS Rescisão": "baseInssRescisao",
        "INSS Patronal": "inssPatronal",
        "INSS Terceiros": "inssTerceiros",
        "RAT/FAP": "ratFap",
        "Deducoes GPS": "deducoesGps",
        "GRRF": "grrf",
        "Encargos Sobre Rescisao": "encargosSobreRescisao",
        "FGTS": "fgts",
        "FGTS Férias": "fgtsFerias",
        "FGTS Rescisão": "fgtsRescisao",
        "Valor Bruto RPA": "valorBrutoRpa",
        "Valor Liquido RPA": "valorLiquidoRpa",
        "Abono Pecuniário": "abonoPecuniario",
        "DataNascimento":"dataNascimento",
        "Area de Atuação Id":"areaAtuacaoId"
      };

      if (manualMap[header]) {
        return manualMap[header];
      }

    // const headers = (header: string): string => {
      return header
        .normalize("NFD")                 // separa letra do acento
        .replace(/[\u0300-\u036f]/g, "")  // remove acentos
        .replace(/[^a-zA-Z0-9 ]/g, " ")   // troca especiais por espaço
        .trim()
        .split(/\s+/)                     // divide por espaço
        .map((word, index) =>
          index === 0
            ? word.toLowerCase()          // primeira em minúsculo
            : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join("");
    };

    const dataRows = jsonData.slice(1);
    
    const jsonDataFormatted: PayRollDTO[] = dataRows.map((row) => { 
      const rowObj: Record<string,any> = {};
      headersOrigin.forEach((header, i) => {
        const cleanHeader = headers(header)
        rowObj[cleanHeader] = row[i]
      });
      return mapperPayRoll(rowObj)
    })
    
    return jsonDataFormatted;
  } catch (error) {
    console.error("Error parsing XLSX file:", error);
    throw new Error("Failed to parse XLSX file");
  } 
};
export const mappersXml = (parsed: any): any => {
  
  const infNFe = parsed?.nfeProc?.NFe?.infNFe;
  const det = infNFe?.det;
  
  const cnpj = infNFe?.emit?.CNPJ;
  
  const dataEmissao = infNFe?.ide?.dhEmi;
  const date = new Date(dataEmissao);
  const dataVencimento = infNFe?.cobr?.dup?.dVenc;
  const mes = date.getMonth() + 1;
  const ano = date.getFullYear();

  const nfDoc = infNFe?.ide?.nNF;
  const nfDocSerie = infNFe?.ide?.serie;

  const valorParcela = parseFloat(
    infNFe?.total?.ICMSTot?.vNF || infNFe?.cobr?.dup?.vDup
  );
  const valorTotal = parseFloat(
    infNFe?.total?.ICMSTot?.vNF || infNFe?.cobr?.dup?.vDup
  );

  const tributoRetido = false;
  const issRetido = 0;
  const inssRetido = 0;
  const irrfRetido = 0;
  const pisPasepRetido = 0;
  const cofinsRetido = 0;
  const csllRetido = 0;
  const pccRetido = 0;
  const observacao = "";

  return ({
    Det: det,
    Cnpj: cnpj,
    Ano: ano,
    Mes: mes,
    NFDoc: nfDoc,
    NFDocSerie: nfDocSerie,
    DataEmissao: dataEmissao,
    DataVencimento: dataVencimento,
    ValorParcela: valorParcela,
    ValorTotal: valorTotal,    
    TributoRetido: tributoRetido,
    IssRetido: issRetido,
    InssRetido: inssRetido,
    IrrfRetido: irrfRetido,
    PisPasepRetido: pisPasepRetido,
    CofinsRetido: cofinsRetido,
    CsllRetido: csllRetido,
    PccRetido: pccRetido,
    Observacao: observacao,
  });
};
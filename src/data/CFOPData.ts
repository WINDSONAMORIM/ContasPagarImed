//fonte para consulta 
//https://www.contabilizei.com.br/contabilidade-online/tabela-cfop-completa/

export interface CFOP{
    codigo: string;
    descricao: string;
}

export const CFOPDatas: CFOP[] = [
  {
    codigo: '2202',
    descricao:
      "Devolução de venda de mercadoria adquirida ou recebida de terceiros",
  },
  {
    codigo: '1909',
    descricao:
      "Retorno de bem remetido por conta de contrato de comodato",
  },
   {
    codigo: '5908',
    descricao:
      "Remessa de bem por conta de contrato de comodato",
  },
]; 
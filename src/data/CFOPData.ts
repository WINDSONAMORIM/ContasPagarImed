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
  },{
    codigo: '5551',
    descricao: "Transferência ativo imobilizado",
  },
  {
    codigo: '6908',
    descricao: "Transferência (fora)",
  },
  {
    codigo: '6949',
    descricao: "Simples remessa",
  },
  {
    codigo: '2909',
    descricao: "Retorno mercadoria não entregue (fora)",
  },
  {
    codigo: '5554',
    descricao: "Retorno ativo imobilizado",
  },
  {
    codigo: '6916',
    descricao: "Remessas simbólicas",
  },
  {
    codigo: '5916',
    descricao: "Remessas simbólicas",
  },
  {
    codigo: '6917',
    descricao: "Remessa simbólica de venda (fora)",
  },
  {
    codigo: '6403',
    descricao: "Remessa para industrialização por encomenda",
  },
  {
    codigo: '5923',
    descricao: "Remessa para conserto",
  },
  {
    codigo: '5912',
    descricao: "Remessa de mercadorias",
  },
  {
    codigo: '5949',
    descricao: "Remessa",
  },
  {
    codigo: '1949',
    descricao: "Outros lançamentos",
  },
  {
    codigo: '5656',
    descricao: "Formação de lote",
  },
  {
    codigo: '1202',
    descricao: "Devolução de compra para comercialização",
  },
  {
    codigo: '5929',
    descricao: "Débito extemporâneo",
  },
  {
    codigo: '6929',
    descricao: "Débito extemporâneo",
  },
  {
    codigo: '2915',
    descricao: "Débito extemporâneo",
  },
  {
    codigo: '2913',
    descricao: "Crédito ICMS do ativo imobilizado",
  },
  {
    codigo: '1915',
    descricao: "Crédito extemporâneo",
  },
  {
    codigo: '6910',
    descricao: "Bonificação, doação, brinde (fora)",
  },
  {
    codigo: '5910',
    descricao: "Bonificação, doação, brinde (dentro)",
  },
   {
    codigo: '6920',
    descricao: "REMESSA VASILHAME, RECIPIENTE, EMBALAGEM E SACARIA",
  },
]; 
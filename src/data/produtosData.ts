//228 - 02.01.02 MATERIAL DE ESCRITORIO
//58 - 03.01.02
interface Itens {
  codigo: string;
  tipoDespesaId: number;
  descricao?: string;
}

export interface Produtos {
  cnpj: string;
  razao?: string;
  itens: Itens[];
}

export const itensNota: Produtos[] = [
  {
    cnpj: "05336395000111",
    itens: [
      { codigo: "70267", tipoDespesaId: 58 },
      { codigo: "71153", tipoDespesaId: 58 },
    ],
  },
  {
    cnpj: "00874929000140",
    razao: "MED CENTER COMERCIAL LTDA",
    itens: [
      {
        codigo: "990200",
        tipoDespesaId: 228,
        descricao: "FITA ADESIVA 19MM X 50MT",
      },
      {
        codigo: "1891000",
        tipoDespesaId: 58,
        descricao: "KIT CATETER DUP LUMEN NIT CVC 7FRX20CM",
      },
      {
        codigo: "99400",
        tipoDespesaId: 58,
        descricao: "MASCARA N95 PFF2 BICO DE PATO AZ CAB",
      },
      {
        codigo: "1686000",
        tipoDespesaId: 58,
        descricao: "BISTURI DESCARTAVEL 11",
      },
      {
        codigo: "1254600",
        tipoDespesaId: 58,
        descricao: "COMPRESSA 13 FIOS GAZE 7,5X7,5 C/10 ES",
      },
      {
        codigo: "1482500",
        tipoDespesaId: 58,
        descricao: "ELETRODO P/MONIT ADULTO",
      },
      {
        codigo: "1258100",
        tipoDespesaId: 58,
        descricao: "MICRONEBULIZADOR INFANT P/OXIGENIO",
      },
      {
        codigo: "1917200",
        tipoDespesaId: 58,
        descricao: "SONDA FOLEY 18 2 VIAS - (CATETER) /",
      },
    ],
  },
];

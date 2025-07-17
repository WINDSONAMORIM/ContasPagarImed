interface Itens {
  codigo: string;
  tipoDespesaId: number;
}

export interface Produtos {
  cnpj: string;
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
];

import { Produtos } from "../data/produtosData";
import { AppError } from "./appError";

interface Det {
  cProd: string;
  vProd: string;
}

interface Itens {
  prod: Det;
}

interface Props {
  produtos: Itens[];
  cnpj: string;
  valor: number;
}

export class MaxTypeByValor {
  constructor(private itens: Produtos[]) {}

  calculate({ produtos, cnpj, valor }: Props) {
    // const lista = Array.isArray(data.produtos) ? produtos : [produtos];
    const sumType: Record<number, number> = {};
    const fornecedor = this.itens.find((f) => f.cnpj === cnpj);

    if (!fornecedor) {
        console.log(`throw new AppError('Fornecedor ${cnpj} não cadasatrado',422);`)
      throw new AppError(`Fornecedor ${cnpj} não cadasatrado`,422);
    }

    for (const det of produtos) {
      const codigo = det?.prod?.cProd;
      const valorItem = Number(det?.prod?.vProd);

      const tipo = fornecedor.itens.find(
        (i) => i.codigo === codigo
      )?.tipoDespesaId;

      if (!tipo) {
        throw new Error(`Item da nota ${codigo} não cadastrado.`);
      }
      sumType[tipo] = (sumType[tipo] ?? 0) + valorItem;
    }

    let maxTipo: number | null = null;
    let maxValor = 0;

    for (const [tipoStr, total] of Object.entries(sumType)) {
      if (total > maxValor) {
        maxValor = total;
        maxTipo = Number(tipoStr);
      }
    }
    return [
      {
        Id: 0,
        UnidadeId: 43,
        LinhaServicoId: 1,
        TipoDespesaId: maxTipo,
        Valor: valor,
      },
    ];
  }
}
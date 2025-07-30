import { Produtos } from "../data/produtosData";
import { ApportionmentDTO } from "../entities/apportionment";

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
  
  calculate({ produtos, cnpj, valor }: Props): ApportionmentDTO {
    
    const sumType: Record<number, number> = {};
    const fornecedor = this.itens.find((f) => f.cnpj === cnpj) ?? 0;

    if (!fornecedor) {
      return {
        Id: 0,
        UnidadeId: 43,
        LinhaServicoId: 1,
        TipoDespesaId: 0,
        Valor: 0,
      };
    }

    for (const det of produtos) {
      const codigo = det?.prod?.cProd;
      const valorItem = Number(det?.prod?.vProd);

      if (det) {        
        // console.log("produto: ",det.prod?.CFOP);
      }

      const tipo = fornecedor.itens.find((i) => i.codigo === codigo)?.tipoDespesaId ?? 0;

      if (!tipo) {
        return {
          Id: 0,
          UnidadeId: 43,
          LinhaServicoId: 1,
          TipoDespesaId: 0,
          Valor: valor,
        };
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
    return {
      Id: 0,
      UnidadeId: 43,
      LinhaServicoId: 1,
      TipoDespesaId: maxTipo ?? 0,
      Valor: valor,
    };
  }
}

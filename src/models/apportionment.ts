import { itensNota } from "../data/produtosData";
import { ApportionmentDTO } from "../entities/apportionment";
interface Itens{
  prod : string;
  cProd : string;
  vProd: string;
}

export class Apportionment {
  private id: string;
  private unidadeId: number;
  private linhaServicoId: number;
  private tipoDespesaId: number;
  private valor: number;

  constructor(dto: ApportionmentDTO) {
    this.id = dto.Id;
    this.linhaServicoId = dto.LinhaServicoId;
    this.tipoDespesaId = dto.TipoDespesaId;
    this.unidadeId = dto.UnidadeId;
    this.valor = dto.Valor;
  }

  toDTO(): ApportionmentDTO {
    return {
      Id: this.id,
      UnidadeId: this.unidadeId,
      LinhaServicoId: this.linhaServicoId,
      TipoDespesaId: this.tipoDespesaId,
      Valor: this.valor,
    };
  }

  static maxTypeByValor(produtos: Itens, cnpj: string, valor: number) {
    if (!produtos) return null;

    const lista = Array.isArray(produtos) ? produtos : [produtos];

    const sumType: Record<number, number> = {};

    for (const det of lista) {
      const codigo = det?.prod?.cProd;
      const valor = Number(det?.prod?.vProd);

      const despesa =
        itensNota
          .find((fornecedor) => fornecedor.cnpj === cnpj)
          ?.itens.find((item) => item.codigo === codigo)?.tipoDespesaId ??
        undefined;

      if (despesa !== undefined) {
        sumType[despesa] = (sumType[despesa] ?? 0) + valor;
      }

      let maxTipo: number | null = null;
      let maxValor = 0;

      for (const [tipoStr, total] of Object.entries(sumType)) {
        if (total > maxValor) {
          maxValor = total;
          maxTipo = Number(tipoStr);
        }
      }

      return [{ 
        Id: "",
        UnidadeId: 43,
        LinhaServicoId: 1,
        TipoDespesaId: maxTipo,
        Valor: valor,
      }];
    }
  }
}

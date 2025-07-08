import { fornecedores } from "../data/fornecedoresData";
import { itensNota } from "../data/produtosData";
import { ApportionmentDTO } from "../entities/apportionment";
interface Itens{
  prod : string;
  cProd : string;
  vProd: string;
}

export class Apportionment {
  private id: number;
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

    const fornecedor = itensNota.find((f) => f.cnpj === cnpj);

    if(!fornecedor){
      throw new Error(
        `Fornecedor ${cnpj} não cadasatrado`
      )
    }

    for (const det of lista) {
      const codigo = det?.prod?.cProd;
      const valor = Number(det?.prod?.vProd);

      const itemNota = fornecedor.itens.find((i)=>i.codigo === codigo)?.tipoDespesaId;
          
      if(!itemNota){
        throw new Error(
          `Item da nota ${codigo} não cadastrado.`
        )
      }

      sumType[itemNota] = (sumType[itemNota] ?? 0) + valor;      

      let maxTipo: number | null = null;
      let maxValor = 0;

      for (const [tipoStr, total] of Object.entries(sumType)) {
        if (total > maxValor) {
          maxValor = total;
          maxTipo = Number(tipoStr);
        }
      }

      return [{ 
        Id: 0,
        UnidadeId: 43,
        LinhaServicoId: 1,
        TipoDespesaId: maxTipo,
        Valor: valor,
      }];
    }
  }
}

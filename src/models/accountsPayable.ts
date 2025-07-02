import { AccountsPayableDTO } from "../entities/accountsPayable";
import { Apportionment } from "./apportionment";
import { FileTemp } from "./fileTemp";

export class AccountsPayable {
  private parceriaId: number;
  private prestacaoContaId: number;
  private fornecedorId: number;
  private cCompetencia: Date;
  private dataVencimento: Date;
  private dataEmissao: Date;
  private numFatura: string;
  private nFDoc: string;
  private nFDocSerie: string;
  private valorParcela: number;
  private valorTotal: number;
  private parcelaPaga: number;
  private totalParcelas: number;
  private fileTemp: FileTemp;
  private tributoRetido: boolean;
  private issRetido: number;
  private inssRetido: number;
  private irrfRetido: number;
  private pisPasepRetido: number;
  private cofinsRetido: number;
  private csllRetido: number;
  private pccRetido: number;
  private numIdentificador: string;
  private rateios: Apportionment[];
  private observacao: string;

  constructor(dto: AccountsPayableDTO) {
    this.parceriaId = dto.ParceriaId;
    this.prestacaoContaId = dto.PrestacaoContaId;
    this.fornecedorId = dto.FornecedorId;
    this.cCompetencia = dto.Competencia;
    this.dataVencimento = dto.DataVencimento;
    this.dataEmissao = dto.DataEmissao;
    this.numFatura = dto.NumFatura;
    this.nFDoc = dto.NFDoc;
    this.nFDocSerie = dto.NFDocSerie;
    this.valorParcela = dto.ValorParcela;
    this.valorTotal = dto.ValorTotal;
    this.parcelaPaga = dto.ParcelaPaga;
    this.totalParcelas = dto.TotalParcelas;
    this.fileTemp = dto.ArquivoTemp ? new FileTemp(dto.ArquivoTemp) : new FileTemp({} as any);
    this.tributoRetido = dto.TributoRetido;
    this.issRetido = dto.IssRetido;
    this.inssRetido = dto.InssRetido;
    this.irrfRetido = dto.IrrfRetido;
    this.pisPasepRetido = dto.PisPasepRetido;
    this.cofinsRetido = dto.CofinsRetido;
    this.csllRetido = dto.CsllRetido;
    this.pccRetido = dto.PccRetido;
    this.numIdentificador = dto.NumIdentificador;
    this.rateios = dto.Rateios
      ? dto.Rateios.map((rateio) => new Apportionment(rateio))
      : [];
    this.observacao = dto.Observacao;
  }

  getProps(): AccountsPayableDTO {
    return this.toDTO();
  }

  getResumeProps(): Omit<AccountsPayableDTO, "ArquivoTemp" | "Rateios"> {
    const { ArquivoTemp, Rateios, ...resumeProps } = this.toDTO();
    return resumeProps;
  }

  toDTO(): AccountsPayableDTO {
    return {
      ParceriaId: this.parceriaId,
      PrestacaoContaId: this.prestacaoContaId,
      FornecedorId: this.fornecedorId,
      Competencia: this.cCompetencia,
      DataVencimento: this.dataVencimento,
      DataEmissao: this.dataEmissao,
      NumFatura: this.numFatura,
      NFDoc: this.nFDoc,
      NFDocSerie: this.nFDocSerie,
      ValorParcela: this.valorParcela,
      ValorTotal: this.valorTotal,
      ParcelaPaga: this.parcelaPaga,
      TotalParcelas: this.totalParcelas,
      ArquivoTemp: this.fileTemp.getProps(),
      TributoRetido: this.tributoRetido,
      IssRetido: this.issRetido,
      InssRetido: this.inssRetido,
      IrrfRetido: this.irrfRetido,
      PisPasepRetido: this.pisPasepRetido,
      CofinsRetido: this.cofinsRetido,
      CsllRetido: this.csllRetido,
      PccRetido: this.pccRetido,
      NumIdentificador: this.numIdentificador,
      Rateios: this.rateios.map((rateio) => rateio.getProps()),
      Observacao: this.observacao
    };
  }
}

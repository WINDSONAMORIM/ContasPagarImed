import { ApportionmentDTO } from "./apportionment";
import { FileTempDTO } from "./fileTemp";

export interface AccountsPayableDTO {
  ParceriaId: number;
  PrestacaoContaId: number;
  FornecedorId: number;
  Competencia: Date;
  DataVencimento: Date;
  DataEmissao: Date;
  NumFatura: string;
  NFDoc: string;
  NFDocSerie: string;
  ValorParcela: number;
  ValorTotal: number;
  ParcelaPaga: number;
  TotalParcelas: number;
  ArquivoTemp: FileTempDTO;
  TributoRetido: boolean;
  IssRetido: number;
  InssRetido: number;
  IrrfRetido: number;
  PisPasepRetido: number;
  CofinsRetido: number;
  CsllRetido: number;
  PccRetido: number;
  NumIdentificador: string;
  Rateios: ApportionmentDTO[];
  Observacao: string;
}

export interface AccountsPayableResumeDTO {
  Fornecedor: string;
  DataEmissao: Date;
  NFDoc: string;
  NFDocSerie: string;
  ValorTotal: number;
}

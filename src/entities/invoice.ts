export interface Invoice {
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
    TributoRetido: boolean;
    IssRetido: number;
    InssRetido: number;
    IrrfRetido: number;
    PisPasepRetido: number;
    CofinsRetido: number;
    CsllRetido: number;
    PccRetido: number;
    Observacao: string;
}
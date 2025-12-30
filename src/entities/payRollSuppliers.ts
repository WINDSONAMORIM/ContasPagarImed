export interface PayrollSuppliersDTO {
  ParceriaId: number;
  PrestacaoContaId: number;
  Prestadores: ProvidersDTO[];
  RazaoSocialEmpresa: string;
  CnpjEmpresa: string;
  ValorBrutoNf: number;
  NumNotaFiscal: string;
  PisNf: number;
  CofinsNf: number;
  CsllNf: number;
  PccNf: number;
  IrrfNf: number;
  IssNf: number;
  InssNf: number;
  ValorLiquido: number;
  InformacoesComplementares: string
}

export interface ProvidersDTO{
      Id: number;
      Nome: string;
      NomeSocial: string;
      CPF: string;
      DataNascimento: Date | string;
      AutoDeclaracaoRacial: number;
      AutoDeclaracaoGenero: number;
      CargoId: number;
      FuncaoId: number;
      TipoCoordenadoria: number;
      AreaAtuacaoId: number;
      CargaHorariaSemanalId: number;
      DeficitCargaHoraria: number;
      TipoAtividade: number;
      NumConselhoClasse: string;
      TurnoTrabalho: number;
      UnidadeId: number;
      CnsDoProfissional: string;
      LinhaServicoId: number;
      ValorPorProfissional: number;
      PlantaoMensal: number;
      Especificacao: string;    
}
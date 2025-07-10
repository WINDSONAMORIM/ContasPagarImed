import { baseUrlAPI } from "../../../config/api";
import { getBearerToken } from "../../../config/auth";
import { ResponseAPI } from "../../../types";
import { xmlParseJson } from "../../../utils/xmlParseJson";
import { mappersXml } from "../../../utils/mappersXml";
import {
  AccountsPayableDTO,
  AccountsPayableResumeDTO,
} from "../../../entities/accountsPayable";
import { fornecedores } from "../../../data/fornecedoresData";
import { Apportionment } from "../../../models/apportionment";
import { ApportionmentDTO } from "../../../entities/apportionment";
import { prestacao } from "../../../data/prestacaoData";
import { FilesTempService } from "../../filesTemp/services";
import { FileTempDTO } from "../../../entities/fileTemp";
import { SicapClient } from "../../../clients/sicap.client";

const filesTempService = new FilesTempService();

export class AccountsPayableService {
  private client = new SicapClient();

  async createAccountsPayable(
    files: Express.Multer.File[],
    authHeader: string
  ): Promise<AccountsPayableDTO[]> {
    const filesTempResult = await filesTempService.toLoad(files, authHeader);

    if (!filesTempResult) throw new Error(`Error em FilesTempResult`);

    const arquivosTemp: FileTempDTO = {
      nomeDoArquivo: filesTempResult.data.NomeDoArquivo,
      hashArquivo: filesTempResult.data.HashArquivo,
      extensaoArquivo: filesTempResult.data.ExtensaoArquivo,
      cnpjInstituicao: filesTempResult.data.CnpjInstituicao,
      parceriaId: filesTempResult.data.ParceriaId,
    };

    const listAccountsPayable: AccountsPayableDTO[] = [];

    for (const file of files) {
      const parsedData = await xmlParseJson(file.path);
      const nfe = mappersXml(parsedData);

      const rateio = Apportionment.maxTypeByValor(
        nfe.Det,
        nfe.Cnpj,
        nfe.ValorTotal
      );

      const newAccountPayable: AccountsPayableDTO = {
        ParceriaId: 43,
        PrestacaoContaId:
          prestacao.find(
            (prestacao) =>
              prestacao.ano === nfe.Ano && prestacao.mes === nfe.Mes
          )?.id ?? 0,
        FornecedorId:
          fornecedores.find((fornecedor) => fornecedor.CnpjCpf === nfe.Cnpj)
            ?.Id ?? 0,
        Competencia: nfe.DataEmissao,
        DataVencimento: nfe.DataVencimento,
        DataEmissao: nfe.DataEmissao,
        NumFatura: "",
        NFDoc: nfe.NFDoc,
        NFDocSerie: nfe.NFDocSerie,
        ValorParcela: nfe.ValorParcela,
        ValorTotal: nfe.ValorTotal,
        ParcelaPaga: 0,
        TotalParcelas: 1,
        TributoRetido: false,
        IssRetido: 0,
        InssRetido: 0,
        IrrfRetido: 0,
        PisPasepRetido: 0,
        CofinsRetido: 0,
        CsllRetido: 0,
        PccRetido: 0,
        NumIdentificador: "",
        Observacao: "",
        ArquivoTemp: arquivosTemp,
        Rateios: (rateio ?? []).map(
          (r: any): ApportionmentDTO => ({
            Id: r.Id ?? 0,
            UnidadeId: r.UnidadeId ?? 0,
            LinhaServicoId: r.LinhaServicoId ?? 0,
            TipoDespesaId:
              r.TipoDespesaId === null || r.TipoDespesaId === undefined
                ? 0
                : r.TipoDespesaId,
            Valor: r.Valor ?? 0,
          })
        ),
      };

      listAccountsPayable.push(newAccountPayable);
    }
    return listAccountsPayable;
  }

  async sendAccountsPayable(files: Express.Multer.File[], auth: string) {
    const contas = await this.createAccountsPayable(files, auth);
    const results: ResponseAPI[] = [];

    for (const conta of contas) {
      try {
        const { data } = await this.client.createAccount(conta, auth);
        results.push({
          statusCode: 200,
          success: true,
          message: "Create Account Sucess",
          data: data,
        });
      } catch (error: any) {
        const status = error?.response?.status ?? 500;
        const mensage = error?.message;
        const data = error?.response?.data;

        results.push({
          statusCode: status,
          success: false,
          message: mensage,
          data: data,
        });
      }
    }
    return results;
  }

  async createPreviewAccountsPayable(
    files: Express.Multer.File[]
  ): Promise<AccountsPayableResumeDTO[]> {
    const previewTable: AccountsPayableResumeDTO[] = [];

    for (const file of files) {
      const parseData = await xmlParseJson(file.path);
      const nfe = mappersXml(parseData);

      const newAccountResumePayable: AccountsPayableResumeDTO = {
        Fornecedor: nfe.Cnpj,
        NFDoc: nfe.NFDoc,
        NFDocSerie: nfe.NFDocSerie,
        DataEmissao: nfe.DataEmissao,
        ValorTotal: nfe.ValorTotal,
      };
      previewTable.push(newAccountResumePayable);
    }
    return previewTable;
  }

  async getAccountsPayable(): Promise<ResponseAPI> {
    console.log(`Bearer Token: ${getBearerToken()}`);
    try {
      const response = await baseUrlAPI.get(`/ContaAPagar`, {
        headers: {
          Authorization: `Bearer ${getBearerToken()}`,
          Accept: "text/plain",
        },
      });
      return {
        statusCode: 200,
        success: true,
        message: "Accounts payable retrieved successfully",
        data: response.data,
      };
    } catch (error: Error | any) {
      return {
        statusCode: error.response?.status || 500,
        success: false,
        message: "Failed to retrieve accounts payable",
        data: error.response?.data || "Internal Server Error",
      };
    }
  }
}

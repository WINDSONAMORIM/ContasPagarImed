import { baseUrlAPI } from "../../../config/api";
import { getBearerToken } from "../../../config/auth";
import { ResponseAPI } from "../../../types";
import { xmlParseJson } from "../../../utils/xmlParseJson";
import { AccountsPayable } from "../../../models/accountsPayable";
import { mappersXml } from "../../../utils/mappersXml";
import { AccountsPayableDTO } from "../../../entities/accountsPayable";
import { fornecedores } from "../../../data/fornecedoresData";
import { Apportionment } from "../../../models/apportionment";
import { ApportionmentDTO } from "../../../entities/apportionment";
import { prestacao } from "../../../data/prestacaoData";
import { FilesTempService } from "../../filesTemp/services";
import { FileTempDTO } from "../../../entities/fileTemp";

const filesTempService = new FilesTempService();

export class AccountsPayableService {
  async createAccountsPayable(
    files: Express.Multer.File[],
    authHeader: string
  ): Promise<ResponseAPI> {
    const filesTempResult = await filesTempService.toLoad(files, authHeader);

    const arquivosTemp = (filesTempResult.data as any[]).map<FileTempDTO>((t) => ({
      nomeDoArquivo: t.nomeArquivo,
      hashArquivo: t.hash,
      extensaoArquivo: t.extensao,
      cnpjInstituicao: "",
      parceriaId: 0,
    }));
    
    const resultados: AccountsPayable[] = [];

    for (const file of files) {
      try {
        const parsedData = await xmlParseJson(file.path);
        const nfe = mappersXml(parsedData);
        console.log("nota:",nfe)
        const rateio = Apportionment.maxTypeByValor(
          nfe.Det,
          nfe.Cnpj,
          nfe.ValorTotal
        );

        const newAccountPayable: AccountsPayableDTO = {
          ParceriaId: 0,
          PrestacaoContaId: prestacao.find(prestacao => prestacao.ano === nfe.Ano && prestacao.mes === nfe.Mes)?.id ?? 0,
          FornecedorId:
            fornecedores.find(
              (fornecedor) => fornecedor.CnpjCpf === nfe.Cnpj
            )?.Id ?? 0,
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
          ArquivoTemp: arquivosTemp[0],
          Rateios: (rateio ?? []).map((r: any): ApportionmentDTO => ({
            Id: r.Id ?? 0,
            UnidadeId: r.UnidadeId ?? 0,
            LinhaServicoId: r.LinhaServicoId ?? 0,
            TipoDespesaId: r.TipoDespesaId === null || r.TipoDespesaId === undefined ? 0 : r.TipoDespesaId,
            Valor: r.Valor ?? 0,
          })),
        };

        resultados.push(new AccountsPayable(newAccountPayable));
        console.log("Resultados:",resultados)
        
      } catch (error) {
        console.error("Error parsing XML file:", error);
      }
    }

    try {
      return {
        statusCode: 200,
        success: true,
        message: "Upload files is successfully",
        data: resultados,
      };
    } catch (error: Error | any) {
      return {
        statusCode: 501,
        success: false,
        message: "Method not implemented",
        data: null,
      };
    }
  }

  async createPreviewAccountsPayable(
    files: Express.Multer.File[]
  ): Promise<ResponseAPI> {
    const previewTable = await Promise.all(
      files.map(async (file) => {
        try {
          const parseData = await xmlParseJson(file.path);
          const newAccountResumePayable = new AccountsPayable(
            parseData
          ).getResumeProps();
          return { ...newAccountResumePayable, file: file.path };
        } catch (error) {
          console.error("Error Preview Table: ", error);
          return null;
        }
      })
    );
    try {
      return {
        statusCode: 200,
        success: true,
        message: "Upload files is successfully",
        data: previewTable,
      };
    } catch (error: Error | any) {
      return {
        statusCode: 501,
        success: false,
        message: "Method not implemented",
        data: null,
      };
    }
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

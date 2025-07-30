import { baseUrlAPI } from "../../../config/api";
import { getBearerToken } from "../../../config/auth";
import { ResponseAPI } from "../../../types";
import {
  xmlParseJson,
  xmlParseJsonFromBuffer,
} from "../../../utils/xmlParseJson";
import { mappersXml } from "../../../utils/mappersXml";
import { AccountsPayableDTO } from "../../../entities/accountsPayable";
import { fornecedores } from "../../../data/fornecedoresData";
import { prestacao } from "../../../data/prestacaoData";
import { FilesTempService } from "../../filesTemp/services";
import { FileTempDTO } from "../../../entities/fileTemp";
import { SicapClient } from "../../../clients/sicap.client";
import { MaxTypeByValor } from "../../../utils/maxTypeByValor";
import { itensNota } from "../../../data/produtosData";
import { AppError } from "../../../utils/appError";
import { checkCFOP } from "../../../middlewares/checkCFOP.middleware";
import path from "path";
import fs from "fs";
import { randomUUID } from "crypto";
import axios from "axios";

const filesTempService = new FilesTempService();

export class AccountsPayableService {
  private client = new SicapClient();

  async createAccountsPayable(
    file: Express.Multer.File,
    authHeader: string
  ): Promise<AccountsPayableDTO> {
    try {
      const filesTempResult = await filesTempService.toLoad(file, authHeader);

      if (!filesTempResult) throw new Error(`Error em FilesTempResult`);

      const arquivosTemp: FileTempDTO = {
        nomeDoArquivo: filesTempResult.data.NomeDoArquivo,
        hashArquivo: filesTempResult.data.HashArquivo,
        extensaoArquivo: filesTempResult.data.ExtensaoArquivo,
        cnpjInstituicao: filesTempResult.data.CnpjInstituicao,
        parceriaId: filesTempResult.data.ParceriaId,
      };

      const parsedData = await xmlParseJsonFromBuffer(file.buffer);
      const nfe = mappersXml(parsedData);

      const rateio = new MaxTypeByValor(itensNota).calculate({
        produtos: nfe.Det,
        cnpj: nfe.Cnpj,
        valor: nfe.ValorTotal,
      });

      console.log('parceriaId: ', arquivosTemp.parceriaId);

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
        ArquivoNF: arquivosTemp.nomeDoArquivo,
        ArquivoNFHash: arquivosTemp.hashArquivo,
        ArquivoNFExtensao: arquivosTemp.extensaoArquivo,
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
        NumIdentificador: randomUUID(),
        Observacao: "",

        Rateios: [
          {
            Id: rateio.Id,
            UnidadeId: rateio.UnidadeId,
            LinhaServicoId: rateio.LinhaServicoId,
            TipoDespesaId: rateio.TipoDespesaId,
            Valor: rateio.Valor,
          },
        ],
      };

      return newAccountPayable;
    } catch (error: any) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new Error("Erro inesperado ao criar contas a pagar.");
    }
  }

  async sendAccountsPayable(files: Express.Multer.File[], auth: string) {
    const contas = await Promise.all(
      files.map((file) => this.createAccountsPayable(file, auth))
    );

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
        console.log("ERROR: ", error.response.statusText);
        console.log('ERROR Message: ', error.message);
        console.log("ERROR Data: ", data);

        results.push({
          statusCode: status,
          success: false,
          message: `${mensage} - ${error.response.statusText}`,
          data: data,
        });
      }
    }
    console.log(`results: ${results.map((r) => r.message)}`);
    return results;
  }

  async createPreviewAccountsPayable(
    files: Express.Multer.File[]
  ): Promise<ResponseAPI[]> {
    const previewTable: ResponseAPI[] = [];

    const filteredFolder = path.resolve("filtered");

    if (!fs.existsSync(filteredFolder)) {
      fs.mkdirSync(filteredFolder, { recursive: true });
    }

    for (const file of files) {
      // const parseData = await xmlParseJson(file.path);
      const content = file.buffer;
      const parseData = await xmlParseJsonFromBuffer(content);
      const nfe = mappersXml(parseData);

      const isRejected = checkCFOP(nfe.Det);

      if (isRejected) {
        continue;
      }

      const filePath = path.join(filteredFolder, file.originalname);
      fs.writeFileSync(filePath, content);

      const listFornecedor = itensNota;

      const fornecedor = listFornecedor.find((f) => f.cnpj === nfe.Cnpj);

      const rateio = new MaxTypeByValor(itensNota).calculate({
        produtos: Array.isArray(nfe.Det) ? nfe.Det : [nfe.Det],
        cnpj: nfe.Cnpj,
        valor: nfe.ValorTotal,
      });

      const statusCode = fornecedor && rateio.TipoDespesaId != 0 ? 200 : 400;
      const success = !!fornecedor && rateio.TipoDespesaId != 0;
      const message = !fornecedor
        ? `CNPJ: ${nfe.Cnpj} não cadastrado`
        : rateio.TipoDespesaId === 0
        ? `Há itens na nota sem cadastro`
        : fornecedor.cnpj;

      const newAccountResumePayable: ResponseAPI = {
        statusCode,
        success,
        message,

        data: {
          fornecedor: message,
          NFDoc: nfe.NFDoc,
          NFDocSerie: nfe.NFDocSerie,
          DataEmissao: nfe.DataEmissao,
          ValorTotal: rateio.TipoDespesaId == 0 ? 0 : rateio.Valor,
        },
      };

      previewTable.push(newAccountResumePayable);
    }
    return previewTable;
  }

  async getAccountsPayable(authHeader: string): Promise<ResponseAPI> {
    if (!authHeader) {
      return {
        statusCode: 401,
        success: false,
        message: "Authorization header is missing",
        data: null,
      };
    }
    const data = await axios.get(`${this.client
      // .base arrumar a base no sicap.client.ts
    }/ContaAPagar`, {
      headers: {
        Authorization: authHeader,
        Accept: "application/json",
      },
    });
    console.log(data);
    return {
      statusCode: 200,
      success: true,
      message: "Get Accounts Payable Success",
      data: data,
    };
  }
}

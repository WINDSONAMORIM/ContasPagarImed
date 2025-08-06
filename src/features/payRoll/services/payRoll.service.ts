import axios from "axios";
import { ResponseAPI } from "../../../types";
import { xlsxParseJson } from "../../../utils/xlxsParseJson";
import { SicapClient } from "../../../clients/sicap.client";

export class PayRollService {
  private client = new SicapClient();
  async createPayRoll(
    file: Express.Multer.File,
    auth: string
  ): Promise<ResponseAPI> {
    console.log("createPayRoll called with file:", file.originalname);
    const parsedData = await xlsxParseJson(file);
    console.log("Parsed data:", parsedData.map((item) => item.Id));

    return {
      statusCode: 201,
      success: true,
      message: "Payroll entry created successfully",
      data: parsedData,
    };
  }

  async getPayRoll(
    auth: string,
    parceriaId: number,
    prestacaoId: number
  ): Promise<ResponseAPI> {
    if (!auth) {
      return {
        statusCode: 401,
        success: false,
        message: "Authorization header is missing",
        data: null,
      };
    }
    console.log("getPayRoll called with auth:", auth);
    try {
      const payrollData = await axios.get(
        `${this.client.base}/FolhaPagamento/ObterPorParceriaEPrestacao/${parceriaId}/${prestacaoId}`,
        {
          headers: {
            Authorization: auth,
            Accept: "application/json",
          },
        }
      );

      const responseData = payrollData.data;

      //   console.log("responseData: ", JSON.stringify(responseData, null, 2));
      //   const responseData = payrollData.data;

      //   console.log(
      //     responseData.map((item: any) =>
      //       item.map((FolhaPagamentoUnidade) => ({
      //         Id: FolhaPagamentoUnidade.Id,
      //         UnidadeId: FolhaPagamentoUnidade.UnidadeId,
      //         LinhaServicoId: FolhaPagamentoUnidade.LinhaServicoId,
      //         AreaAtuacaoId: FolhaPagamentoUnidade.AreaAtuacaoId,
      //         CargaHorariaSemanalId: FolhaPagamentoUnidade.CargaHorariaSemanalId,
      //       }))
      //     )
      //   );

      console.log(
        responseData.flatMap((item: any) =>
          item.FolhaPagamentoUnidade?.map((i: any) => i ?? [])
        )
      );

    //   console.log(
    //     responseData.map((item: any) =>
    //       item.Id
    //     )
    //   );

      return {
        statusCode: 200,
        success: true,
        message: "Payroll entries retrieved successfully",
        data: payrollData,
      };
    } catch (error) {
      console.error(
        "Error fetching payroll data:",
        error.response.statusText || error
      );
      throw new Error("Failed to fetch payroll data");
    }
  }
}
43;

import axios from "axios";
import { ResponseAPI } from "../../../types";
import { xlsxParseJson, xlsxParseJsonPayRoll } from "../../../utils/xlxsParseJson";
import { SicapClient } from "../../../clients/sicap.client";
import { mapperPayRoll } from "../../../utils/mapperPayRoll";
import { PayRollDTO } from "../../../entities/payRoll";

export class PayRollService {
  private client = new SicapClient();
  async createPayRoll(
    file: Express.Multer.File,
    auth: string
  ): Promise<ResponseAPI> {
    const parsedData = await xlsxParseJsonPayRoll(file);

    const listPayRoll = parsedData.map((p:PayRollDTO) => mapperPayRoll(p));
    // console.log("Mapped Payroll Data:", listPayRoll);

    // try {
    //   const responseListPayRoll = await Promise.all(
    //     listPayRoll.map((item) => this.client.createPayRoll(auth, item))
    //   );
    // } catch (error) {
    //   console.error("Error creating payroll entries:", error);
    //   if (axios.isAxiosError(error)) {
    //     console.error("Axios error:", {
    //       status: error.response?.status,
    //       headers: error.response?.headers,
    //       data: error.response?.data,
    //     });
    //     return {
    //       statusCode: error.response?.status || 500,
    //       success: false,
    //       message: error.message,
    //       data: error.response?.data,
    //     };
    //   }
    //   console.error("Error creating payroll:", error);
    //   return {
    //     statusCode: error.response?.status || 500,
    //     success: false,
    //     message: error.message,
    //     data: error.response?.data,
    //   };
    // }

    return {
      statusCode: 201,
      success: true,
      message: "Payroll entry created successfully",
      data: listPayRoll,
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
        `${this.client
          // .base
        }/FolhaPagamento/ObterPorParceriaEPrestacao/${parceriaId}/${prestacaoId}`,
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
        // error.response.statusText || error
      );
      throw new Error("Failed to fetch payroll data");
    }
  }
}

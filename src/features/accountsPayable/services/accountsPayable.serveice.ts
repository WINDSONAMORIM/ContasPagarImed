import path from "path";
import { baseUrlAPI } from "../../../config/api";
import { getBearerToken } from "../../../config/auth";
import { ResponseAPI } from "../../../types";
import { xmlParseJson } from "../../../utils/xmlParseJson";

export class AccountsPayableService {
  async createAccountsPayable(
    files: Express.Multer.File[]
  ): Promise<ResponseAPI> {

    const processedFiles = await Promise.all(
      files.map(async (file) => {
        try {
          const parsedData = await xmlParseJson(file.path);
          return { ...parsedData, file: file.path };
        } catch (error) {
          console.error("Error parsing XML file:", error);
          return null;
        }
      })
    );

    try {
      return {
        statusCode: 200,
        success: true,
        message: "Upload files is successfully",
        data: processedFiles,
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

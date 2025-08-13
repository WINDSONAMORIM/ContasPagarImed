import { SicapClient } from "../../../clients/sicap.client";
import { ResponseAPI } from "../../../types";
import { xlsxParseJson } from "../../../utils/xlxsParseJson";

export class EmployeeService {
  private client = new SicapClient();

  async createEmployee(
    file: Express.Multer.File,
    auth: string
  ): Promise<ResponseAPI> {
    const parseData = await xlsxParseJson(file);
    console.log("Parsed Employee Data:", parseData);   

    return {
      statusCode: 201,
      success: true,
      message: "Payroll entry created successfully",
      data: parseData,
    };
  }
}

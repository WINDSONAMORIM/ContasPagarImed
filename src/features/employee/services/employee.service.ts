import { SicapClient } from "../../../clients/sicap.client";
import { Employee } from "../../../entities/employee";
import { ResponseAPI } from "../../../types";
import { xlsxParseJson } from "../../../utils/xlxsParseJson";

export class EmployeeService {
  private client = new SicapClient();

  async formatedEmployeeData(data: Employee[]): Promise<Employee[]> {
    return data.map((item: any) => ({
      ParceriaId: 43,
      Nome: item.Nome,
      CPF: item.CPF,
      CnsDoProfissional: item.CnsDoProfissional,
    }));
  }

  async createEmployee(
    file: Express.Multer.File,
    auth: string
  ): Promise<ResponseAPI> {
    const parseData = await xlsxParseJson(file);
    console.log("Parsed Data:", parseData);
    const data = await this.client.createEmployee(auth, parseData);
    
    return {
      statusCode: data.status,
      success: true,
      message: data.statusText,
      data: data.data,
    };
  }
}

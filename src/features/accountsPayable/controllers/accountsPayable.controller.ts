import { Request, Response } from "express";
import axios from "axios";
import { ResponseAPI } from "../../../types";

export class AccountsPayableController {
  async createAccountPayable(req: Request, res: Response): Promise<void> {
    try {
      const { data } = await axios.post<ResponseAPI>(
        "https://sicap.prefeitura.sp.gov.br/v1/ContaAPagar",
        {
          headers: {
            Authorization: `Bearer ${req.headers.authorization}`,
            Accept: "text/plain",
          },
        }
      );
    } catch (error) {}
  }

  async getAccountsPayable(req: Request, res: Response): Promise<void> {
    try {
      const { data } = await axios.get<ResponseAPI>(
        "https://sicap.prefeitura.sp.gov.br/v1/ContaAPagar",
        {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IndpbmRzb24ubWFyYW5hIiwibmFtZWlkIjoiNDA2Iiwicm9sZSI6IkFzc2lzdGVudGUgYWRtaW5pc3RyYXRpdm8iLCJVc3VhcmlvSWQiOiI0MDYiLCJHcnVwb1VzdWFyaW9JZCI6IjI0IiwiQWRtaW5pc3RyYWRvckluZnJhIjoiTiIsIlN1cGVyVXN1YXJpbyI6Ik4iLCJBbmFsaXN0YSI6Ik4iLCJQYXJjZXJpYXNEb1VzdWFyaW8iOiI0MyIsIkV4cGlyZXMiOiIwNi8xMi8yMDI1IDEwOjIyOjQwIiwibmJmIjoxNzQ5Njk0OTYwLCJleHAiOjE3NDk3MjM3NjAsImlhdCI6MTc0OTY5NDk2MH0.yFdpGSuIDFwv2aj_QDIvopwC3kYwred4Or7k2GZ6ruY",
            Accept: "text/plain",
          },
        }
      );

      res.status(200).json({
        sucess: true,
        message: "Sucess",
        data: data,
      });
      
    } catch (error) {
      console.log(error);
    }
  }
}

import { Request, Response } from "express";
import axios from "axios";
import { ResponseAPI } from "../../../types";
import { AccountsPayableService } from "../services/accountsPayable.serveice";

export class AccountsPayableController {
  private accountPayableService: AccountsPayableService;

  constructor() {
    this.accountPayableService = new AccountsPayableService;
  }

  async createAccountPayable(req: Request, res: Response): Promise<void> {
    try {
      const files = req.files as Express.Multer.File[];
      if (!files || files.length === 0) {
        res.status(400).json({
          success: false,
          message: "No files uploaded",
          data: null,
        });
        return;
      }
      const response = await this.accountPayableService.createAccountsPayable(files);
      res.status(response.statusCode).json({
        success: response.success,
        message: response.message,
        data: response.data,
      });
      // const { data } = await axios.post<ResponseAPI>(
      //   "https://sicap.prefeitura.sp.gov.br/v1/ContaAPagar",
      //   {
      //     headers: {
      //       Authorization: `Bearer ${req.headers.authorization}`,
      //       Accept: "text/plain",
      //     },
      //   }
      // );
    } catch (error) {}
  }

  async getAccountsPayable(req: Request, res: Response): Promise<void> {
    try {
      const response = await this.accountPayableService.getAccountsPayable();
      res.status(response.statusCode).json({
        success: response.success,
        message: response.message,
        data: response.data,
      });
    } catch (error) {
      console.error("Error in getAccountsPayable:", error);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve accounts payable",
        data: "Internal Server Error",
      });
    }
  }

}  
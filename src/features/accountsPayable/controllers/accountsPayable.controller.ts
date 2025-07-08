import { Request, Response } from "express";
import axios from "axios";
import { ResponseAPI } from "../../../types";
import { AccountsPayableService } from "../services/accountsPayable.service";

const baseUrlAPI = process.env.SICAP_API_URL;
export class AccountsPayableController {
  private accountPayableService: AccountsPayableService;

  constructor() {
    this.accountPayableService = new AccountsPayableService();
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

      const authHeader = req.headers.authorization ?? "";
      const contasPagarResponse =
        await this.accountPayableService.sendAccountsPayable(files, authHeader);

      res.status(200).json({
        success: true,
        message: "Contas a Pagar enviada com sucesso",
        data: contasPagarResponse,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Erro ao enviar contas a pagar",
        data: error?.message ?? error,
      });
    }
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

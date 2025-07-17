import { Request, Response } from "express";
import { AccountsPayableService } from "../services/accountsPayable.service";
import { AppError } from "../../../utils/appError";
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
      if (error instanceof AppError) {
        console.log(`if (error instanceof AppError) ${error}`);
        res.status(error.statusCode).json({
          statusCode: error.statusCode,
          name: error.name,
          message: error.message,
        });
      }
      // res.status(500).json({
      //   success: false,
      //   message: "Erro ao enviar contas a pagar",
      //   data: error?.message ?? error,
      // });
    }
  }

  async createPreviewAccountPayable(
    req: Request,
    res: Response
  ): Promise<void> {
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
      const contasPagarResponse =
        await this.accountPayableService.createPreviewAccountsPayable(files);
      res.status(200).json({
        success: true,
        message: "Contas a Pagar enviada com sucesso",
        data: contasPagarResponse,
      });
    } catch (error) {
      if (error instanceof AppError) {
        console.log(`if (error instanceof AppError) ${error}`);
        res.status(error.statusCode).json({
          name: error.name,
          message: error.message,
        });
      }
      // res.status(500).json({
      //   success: false,
      //   message: "Erro ao enviar contas a pagar",
      //   data: error?.message ?? error,
      // });
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

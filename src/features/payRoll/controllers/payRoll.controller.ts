import { Request, Response } from "express";
import { PayRollService } from "../services";

export class PayRollController {
  private payRollService: PayRollService;

  constructor() {
    this.payRollService = new PayRollService();
  }

  async createPayRollController(req: Request, res: Response): Promise<void> {
    try {
      const file = req.file as Express.Multer.File;
      if (!file) {
        res.status(400).json({
          success: false,
          message: "No files uploaded",
          data: null,
        });
        return;
      }

      const authHeader = req.headers.authorization ?? "";
      const data = await this.payRollService.createPayRoll(file, authHeader);
      res.status(201).json({
        success: true,
        message: "Payroll entry created successfully",
        data: data,
      });
    } catch (error: any) {
      console.log("ERROR Controller: " ,error)
      res.status(500).json({
        success: false,
        message: error.message,
        data: error,
      });
    }
  }

  async getPayRollController(req: Request, res: Response): Promise<void> {
    console.log("getPayRollController called");
    try {
      const authHeader = req.headers.authorization ?? "";
      const parceriaId = parseInt(req.params.parceriaId, 10);
      console.log("parceriaId:", parceriaId);
      const prestacaoId = parseInt(req.params.prestacaoId, 10);
      console.log("prestacaoId:", prestacaoId);
      const data = await this.payRollService.getPayRoll(authHeader, parceriaId, prestacaoId);
      if (!data) {
        res.status(404).json({
          success: false,
          message: "No payroll entries found",
          data: null,
        });
        return;
      }
      res.status(201).json({
        success: true,
        message: "Payroll entry created successfully",
        data: data,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Unexpected error while creating payroll entry.",
        data: null,
      });
    }
  }
}

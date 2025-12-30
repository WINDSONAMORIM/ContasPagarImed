import { Request, Response } from "express";
import { PayRollSuppliersService } from "../services/payRollSuppliersService";

export class PayRollSuppliersController{
    private payRollSupliersService: PayRollSuppliersService;

    constructor(){
        this.payRollSupliersService = new PayRollSuppliersService();
    }

    async createPayRollSupplierController(req: Request, res: Response): Promise<void>{
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
        const data = await this.payRollSupliersService.createPayrollSuppliers(file, authHeader)
        res.status(201).json({
        success: true,
        message: "PayrollSupplier entry created successfully",
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
}
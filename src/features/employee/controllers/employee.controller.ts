import { Request, Response } from "express";
import { EmployeeService } from "../services";

export class EmployeeController{
    private employeeService: EmployeeService;

    constructor() {
        this.employeeService = new EmployeeService();
    }

    async createEmployeeController(req: Request, res: Response):Promise<void>{
        console.log("Passei pelo controller");
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
            const data = await this.employeeService.createEmployee(file, authHeader);
            res.status(201).json({
                success: true,
                message: "Employee entry created successfully",
                data: data,
            });
            
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Unexpected error while creating employee entry.",
                data: null,
            });
        }
    }
}
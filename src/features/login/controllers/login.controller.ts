import { Request, Response } from "express";
import axios from "axios";
import { ResponseAPI } from "../../../types";

export class LoginController {
    async login(req: Request, res: Response): Promise<void> {
        try {
            const { username, password } = req.body;

            const {data} = await axios.post<ResponseAPI>("https://sicap.prefeitura.sp.gov.br/v1/Autenticacao/Login", {
                    Login: username,
                    Senha: password,
                    ParceiaId: 0
            });

            console.log("Login request sent to SICP API");
            
            res.status(200).json({
                sucess : true, 
                message: "Sucess",
                data: data
            });
                
        } catch (error: Error | any) {
            console.error("Error during login:", error.message);
            const status = error.response?.status || 500;
            const details = error.response?.data || "Internal Server Error";
            res.status(status).json({
                success: false,
                message: "Login failed",
                error: details
            });
        }
    }
}

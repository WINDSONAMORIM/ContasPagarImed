import { Request, Response } from "express";
import { LoginService } from "../services/login.service";

export class LoginController {
  private loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  async login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;

    const response = await this.loginService.login({ username, password });

    if (!response.success) {
      res.json({
        success: false,
        message: "Login failed",
        data: response.data || "Internal Server Error",
      });
    }
    res.json({
      success: true,
      message: "Login successful",
      data: response.data,
    });
  }
}

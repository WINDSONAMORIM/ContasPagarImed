import { baseUrlAPI } from "../../../config/api";
import { setBearerToken } from "../../../config/auth";
import { UserLoginDTO } from "../../../entities/user";
import { ResponseAPI } from "../../../types";

export class LoginService {
  async login({ username, password }: UserLoginDTO): Promise<ResponseAPI> {
    try {
      const response = await baseUrlAPI.post(`/Autenticacao/Login`, {
        Login: username,
        Senha: password,
        ParceriaId: 0,
      });
      const token = response.data.Token;
      console.log("Token response:", token);

      if (!token) {
        return {
          statusCode: 401,
          success: false,
          message: "Invalid credentials",
          data: "Unauthorized",
        };
      }

      setBearerToken(token);

      return {
        statusCode: 200,
        success: true,
        message: "Login successful",
        data: response.data,
      };
    } catch (error: Error | any) {
      console.error("Login error Service:", error);
      return {
        statusCode: error.response?.status || 500,
        success: false,
        message: "Login failed",
        data: error.response?.data || "Internal Server Error",
      };
    }
  }
}

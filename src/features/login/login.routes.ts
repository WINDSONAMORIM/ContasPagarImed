import { Router } from "express";
import { LoginController } from "./controllers";

export const loginRoutes = (router: Router) => {
  const loginController = new LoginController();

  router.post("/login", loginController.login);
};

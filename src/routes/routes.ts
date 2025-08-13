import express, { Application, Request, Response } from "express";
import { loginRoutes } from "../features/login/login.routes";
import { accountsPayableRoutes } from "../features/accountsPayable/accountsPayable.routes";
import { filesTempRouter } from "../features/filesTemp/filesTemp.routes";
import { payRollRoutes } from "../features/payRoll/payRoll.routes";
import { employeeRoutes } from "../features/employee/employee.routes";

export const routesApp = (app: Application) => {
  const router = express.Router();

  app.use("/", router);

  app.get("/", (_req: Request, res: Response) => {
    res.send("API rodando! Bem-vindo à raiz.");
  });

  loginRoutes(router);
  accountsPayableRoutes(router);
  filesTempRouter(router);
  payRollRoutes(router);
  employeeRoutes(router);
};

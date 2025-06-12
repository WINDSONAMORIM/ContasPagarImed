import { Router } from "express";
import { AccountsPayableController } from "./controllers";


export const accountsPayableRoutes = (router: Router) => {
  const accountsPayableController = new AccountsPayableController();

  router.post("/contasPagar", accountsPayableController.createAccountPayable);
  router.get("/contasPagar", accountsPayableController.getAccountsPayable);
};

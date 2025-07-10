import { Router } from "express";
import { AccountsPayableController } from "./controllers";
import { upload } from "../../middlewares/upload.middleware";


export const accountsPayableRoutes = (router: Router) => {
  const accountsPayableController = new AccountsPayableController();

  router.post("/contasPagar",upload.array("files"), accountsPayableController.createAccountPayable.bind(accountsPayableController));

  router.post(
    "/contasPagarPreview",
    upload.array("files"),
    accountsPayableController.createPreviewAccountPayable.bind(
      accountsPayableController
    )
  );

  router.get("/contasPagar", accountsPayableController.getAccountsPayable.bind(accountsPayableController));
};

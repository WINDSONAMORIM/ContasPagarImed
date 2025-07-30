import { Router } from "express";
import { AccountsPayableController } from "./controllers";
import { uploadInMemory, validateuploadFolderExists } from "../../middlewares/validateuploadFolderExists.middleware";

export const accountsPayableRoutes = (router: Router) => {
  const accountsPayableController = new AccountsPayableController();

  router.post(
    "/contasPagar",
    uploadInMemory.array("files"),
    // validateuploadFolderExists.array("files"),
    accountsPayableController.createAccountPayable.bind(
      accountsPayableController
    )
  );

  router.post(
    "/contasPagarPreview",
    uploadInMemory.array("files"),
    // validateuploadFolderExists.array("files"),
    accountsPayableController.createPreviewAccountPayable.bind(
      accountsPayableController
    )
  );

  router.get(
    "/contasPagar",
    accountsPayableController.getAccountsPayable.bind(accountsPayableController)
  );
};

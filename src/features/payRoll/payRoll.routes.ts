import { Router } from "express";
import { PayRollController } from "./controllers";
import { uploadInMemory } from "../../middlewares/validateuploadFolderExists.middleware";

export const payRollRoutes = (router: Router) => {
  const payRollController = new PayRollController();
  
  router.post(
    "/folhaPagamentoPreview",
    uploadInMemory.single("files"),
    // validateuploadFolderExists.array("files"),
    payRollController.createPreviewPayRollController.bind(
      payRollController,
    ),
  );
  
  
  router.post(
    "/FolhaPagamento",uploadInMemory.single("files"),
    payRollController.createPayRollController.bind(payRollController)
  );

  router.get(
    "/FolhaPagamento/:parceriaId/:prestacaoId",
    payRollController.getPayRollController.bind(payRollController)
  );
};

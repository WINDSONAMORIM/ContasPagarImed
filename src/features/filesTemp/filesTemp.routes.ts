import { Router } from "express";
import { validateuploadFolderExists } from "../../middlewares/validateuploadFolderExists.middleware";
import { FilesTempController } from "./controllers";

export const filesTempRouter = (router: Router) => {
  const filesTempController = new FilesTempController();

  router.post(
    "/filesTemp",
    validateuploadFolderExists.array("files"),
    filesTempController.toLoad.bind(filesTempController)
  );
};

import { Router } from "express";
import { uploadInDisck } from "../../middlewares/validateuploadFolderExists.middleware";
import { FilesTempController } from "./controllers";

export const filesTempRouter = (router: Router) => {
  const filesTempController = new FilesTempController();

  router.post(
    "/filesTemp",
    uploadInDisck.array("files"),
    filesTempController.toLoad.bind(filesTempController),
  );
};

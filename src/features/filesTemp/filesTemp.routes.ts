import { Router } from "express";
import { upload } from "../../middlewares/upload.middleware";
import { FilesTempController } from "./controllers";

export const filesTempRouter = (router: Router) =>{
    const filesTempController = new FilesTempController();

    router.post("/filesTemp", upload.array("files"), filesTempController.toLoad.bind(filesTempController));
}
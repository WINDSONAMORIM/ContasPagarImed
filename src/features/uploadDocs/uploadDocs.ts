import { Router } from "express";
import { uploadInDisck } from "../../middlewares/validateuploadFolderExists.middleware";
import { UploadDocsController } from "./controllers/uploadDocs.controller";

export const uploadDocs = (router: Router) => {
    const uploadDocsController = new UploadDocsController();

    router.post(
      "/uploadDocs",
      uploadInDisck.single("files"),
      uploadDocsController.uploaderDocsController.bind(uploadDocsController),
    );
}
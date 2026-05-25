import { Request, Response } from "express";
import { UploadDocsService } from "../services/uploadDocs.service";

export class UploadDocsController {
    private uploadDocsService: UploadDocsService;
  constructor() {
    this.uploadDocsService = new UploadDocsService();
  }

  async uploaderDocsController(req: Request, res: Response): Promise<void> {
    try {
        const file = req.file as Express.Multer.File;
        if (!file) {
            res.status(400).json({
            success: false,
            message: "No files uploaded",
            data: null,
            });
            return;
        }
        const data = await this.uploadDocsService.uploaderDocsService(file);

        res.status(201).json({
          success: true,
          message: "Document uploaded successfully",
          data: null,
        });
    }
    catch (error: any) {
      console.log("ERROR Controller: ", error);
      res.status(500).json({
        success: false,
        message: error.message,
        data: error,
      });
    }
}
}
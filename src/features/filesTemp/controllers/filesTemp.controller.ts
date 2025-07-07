import { Request, Response } from "express";
import { FilesTemp } from "../../../models/fileTemp";
import { FilesTempService } from "../services";
import { ResponseAPI } from "../../../types";

export class FilesTempController {
  private filesTempService: FilesTempService;
  constructor() {
    this.filesTempService = new FilesTempService();
  }

  async toLoad(req: Request, res: Response): Promise<void> {
    try {
      const files = req.files as Express.Multer.File[];
      if (!files || files.length === 0) {
        res.status(400).json({
          success: false,
          message: "No files uploaded",
          data: null,
        });
        return;
      }

      const authHeader = req.headers.authorization || "";
      const response = await this.filesTempService.toLoad(files, authHeader);
      if (response) {
        res.status(response.statusCode).json({
          success: true,
          message: "upload Sucess",
          data: response.data,
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve accounts payable",
        data: "Internal Server Error",
      });
    }
  }
}

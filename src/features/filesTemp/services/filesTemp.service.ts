import fs from "fs";
import FormData from "form-data";
import { ResponseAPI } from "../../../types";
import { SicapClient } from "../../../clients/sicap.client";

export class FilesTempService {
  private client = new SicapClient();

  async toLoad(
    file: Express.Multer.File,
    authHeader: string
  ): Promise<ResponseAPI> {
    const form = new FormData();

    form.append("files", file.buffer, {
      filename: file.originalname,
      contentType: file.mimetype,
    });

    const { data } = await this.client.createFilesTemp(form, authHeader);

    return {
      success: true,
      statusCode: 200,
      message: "Upload Sucess",
      data: data,
    };
  }
}

import fs from 'fs'
import FormData from 'form-data';
import { ResponseAPI } from "../../../types";
import { SicapClient } from '../../../clients/sicap.client';

export class FilesTempService {
  private client = new SicapClient();

  async toLoad(files: Express.Multer.File[],authHeader: string): Promise<ResponseAPI> {
    const form = new FormData();
    for(const file of files){
      form.append("files", fs.createReadStream(file.path), file.originalname);
    }
    const { data } = await this.client.createFilesTemp(
      form,authHeader
    );

    return(
      {
        success: true,
        statusCode: 200,
        message: "Upload Sucess",
        data: data
      }
    )
  }
}

import fs from 'fs'
import axios from "axios";
import FormData from 'form-data';
import { ResponseAPI } from "../../../types";

const SICAP_API_URL = process.env.SICAP_API_URL;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IndpbmRzb24ubWFyYW5hIiwibmFtZWlkIjoiNDA2Iiwicm9sZSI6IkFzc2lzdGVudGUgYWRtaW5pc3RyYXRpdm8iLCJVc3VhcmlvSWQiOiI0MDYiLCJHcnVwb1VzdWFyaW9JZCI6IjI0IiwiQWRtaW5pc3RyYWRvckluZnJhIjoiTiIsIlN1cGVyVXN1YXJpbyI6Ik4iLCJBbmFsaXN0YSI6Ik4iLCJQYXJjZXJpYXNEb1VzdWFyaW8iOiI0MyIsIkV4cGlyZXMiOiIwNy8wNy8yMDI1IDA4OjI1OjU4IiwibmJmIjoxNzUxODQ3OTU4LCJleHAiOjE3NTE4NzY3NTgsImlhdCI6MTc1MTg0Nzk1OH0.k-lfHcWZv0dq1o65eyuGB8p1gyQ54W4S4OxuwhtNWx4";
  // sessionStorage.getItem(
  //   "Token"
  // );
export class FilesTempService {
  async toLoad(files: Express.Multer.File[],authHeader: string): Promise<ResponseAPI> {
    const form = new FormData();
    for(const file of files){
      form.append("files", fs.createReadStream(file.path), file.originalname);
    }
    const { data } = await axios.post<ResponseAPI>(
      `${SICAP_API_URL}/Arquivos/SubirArquivoTemporario`,
      form,
      {
        headers: {
          ...form.getHeaders(),
          Authorization: `Bearer ${token}`,
          Accept: "text/plain",
        },
      }
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

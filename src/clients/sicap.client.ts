import axios from "axios";
import FormData from 'form-data';
import { AccountsPayableDTO } from "../entities/accountsPayable";

export class SicapClient {
  constructor(private base = process.env.SICAP_API_URL) {}
  
  async createAccount(account: AccountsPayableDTO, token: string) {
    return axios.post(`${this.base}/ContaAPagar`, account, {
        headers:{Authorization:token, Accept: 'text/plain'},
    });
  }

  async createFilesTemp(form: FormData, auth: string){
    return axios.post(`${this.base}/Arquivos/SubirArquivoTemporario`, form, {
      headers: {
        ...form.getHeaders(),
        Authorization: auth,
        Accept: "text/plain",
      },
    });

  }
}

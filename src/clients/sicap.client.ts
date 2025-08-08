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

  async createPayRoll(auth: string, data: any) {
    return axios.put(`${this.base}/FolhaPagamento`, data, {
      headers: {
        Authorization: auth,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  async editPayRoll(auth: string) {
    console.log("editPayRoll called with auth:", auth);
    // return axios.put(`${this.base}/FolhaPagamento`,{
    //   headers: {
    //     Authorization: auth,
    //     Accept: "text/plain",
    //   },
    // });
  }
}

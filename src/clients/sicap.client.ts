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
    return axios.post(`${this.base}/FolhaPagamento/Multiplos`, data, {
      headers: {
        Authorization: auth,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  async createEmployee(auth: string, data: any) {
    return axios.post(`${this.base}/Funcionario/Multiplos`, data, {
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

  async createPayRollSuppliers(auth: string, data: any){
    return axios.post(`${this.base}/FolhaPagamentoPessoaJuridica`,data,{
      headers: {
        Authorization: auth,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
  }

  async getCargaHorariaById(auth: string, data: number){
    return axios.get(`${this.base}v1/CargaHoraria/${data}`,{
      headers: {
        Authorization: auth,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
  }
}

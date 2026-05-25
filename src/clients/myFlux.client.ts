import fs from "fs";
import os from "os";
import axios, { AxiosError, AxiosInstance } from "axios";
import path from "path";

export class MyFluxClient{
    private api: AxiosInstance;
    private token?: string;
    private tokenExpiration?: number;

    constructor(private base = process.env.MYFLUX_API_URL){
        this.api = axios.create({baseURL: this.base})
    }

    private async ensureToken(): Promise<void>{
        if(!this.token || Date.now() > (this.tokenExpiration || 0)){
            await this.login (process.env.MYFLUX_USER!, process.env.MYFLUX_PASSWORD!);
        }
    }

    async login(username: string, password:string){
        const {data} = await this.api.post(`/login`,{username, password})
        
        this.token = data
        this.tokenExpiration = Date.now() + 60 * 60 * 1000;
        this.api.defaults.headers.common["Authorization"] = `Bearer ${this.token}`
        this.api.defaults.headers.common["Content-Type"] = "application/json";
    }

    async getTitle(processId: Number): Promise<any>{
        try {
            await this.ensureToken()

            this.api.defaults.headers.common = {
                "Authorization": `Bearer ${this.token}`,
                "Accept": "application/json",
                };
            
            const {data} = await this.api.get(`/processos/${processId}`,{withCredentials:true})
            
            if(data){
                console.log(`Process: ${processId} Data: ${data.titulo}  `)
                // console.log(`Process: ${processId} Data: ${JSON.stringify(data,null,4)}  `)
                const fullTitle = data.titulo; // "NF35899_NIHON_HMB_20251017"
                const partes = fullTitle.split("_");
                const tituloCurto = `${partes[0]}_${partes[1]}`;
                return tituloCurto
            }

        } catch (error) {
            
        }
    }

    async empacotar(processId: Number): Promise<any>{
        try {
            await this.ensureToken()
            
              this.api.defaults.headers.common = {
                "Authorization": `Bearer ${this.token}`,
                "Accept": "application/json",
                };

            const title = await this.getTitle(processId)
            const {data} = await this.api.get(`/processos/${processId}/empacotar`,{withCredentials:true})
            if(data){
                console.log(`Process: ${processId} Data: ${data}  `)
                console.log(`Process: ${processId} title: ${title}  `)
                // console.log(`Process: ${processId} Data: ${JSON.stringify(data,null,4)}  `)
            }
            
            const downloadsDir = path.join(os.homedir(), "Downloads");
            const filePath = path.join(downloadsDir, `Processo - ${processId}.zip`);
            // const filePath = path.join(downloadsDir, `${title}.zip`);
            const buffer = Buffer.from(data.processoZipPdf, "base64");
            fs.writeFileSync(filePath, buffer,)

            return data;
        } catch (error) {
            if(error instanceof AxiosError){
                if (error.response) {
                    console.error("🔍 Status:", error.response.status);
                    console.error("🔍 Status:", error);
                }             
            } else {
                console.error("❌ Erro inesperado no empacotar:", error);
            }
        }
        
    }

}
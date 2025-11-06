import fs from "fs";
import os from "os";
import axios, { AxiosError, AxiosInstance } from "axios";
import path from "path";

import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";

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

    async empacotar(processId: Number): Promise<any>{
        try {
            await this.ensureToken()
            // this.api.defaults.headers.common["Authorization"] = `Bearer ${this.token}`
            // this.api.defaults.headers.common["Content-Type"] = "application/json";
            // this.api.defaults.headers.common["Origin"] = "https://imed.myflux.ai";
            // this.api.defaults.headers.common["Referer"] = "https://imed.myflux.ai/";
            
              this.api.defaults.headers.common = {
                "Authorization": `Bearer ${this.token}`,
                "Accept": "application/json",
                };

            const {data} = await this.api.get(`/processos/${processId}/empacotar`,{withCredentials:true})
            
            const downloadsDir = path.join(os.homedir(), "Downloads");
            const filePath = path.join(downloadsDir, `processo_${processId}.zip`);
            const buffer = Buffer.from(data.processoZipPdf, "base64");
            fs.writeFileSync(filePath, buffer,)

            return data;
        } catch (error) {
            if(error instanceof AxiosError){
                if (error.response) {
                    console.error("🔍 Status:", error.response.status);
                    console.error("🔍 Headers:", JSON.stringify(error.response.headers, null, 2));  
                if (typeof error.response.data === "string") {
                    console.error("🔍 Corpo (texto):", error.response.data);
                } else if (error.response.data instanceof ArrayBuffer) {
                    console.error("🔍 Corpo (binário):", Buffer.from(error.response.data).toString("utf8"));
                } else {
                    console.error("🔍 Corpo (JSON):", JSON.stringify(error.response.data, null, 2));
                }
                } else {
                console.error("❌ Nenhuma resposta recebida do servidor:", error.message);
                }
            } else {
                console.error("❌ Erro inesperado no empacotar:", error);
            }
        }
        
    }

}
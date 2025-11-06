import { Response } from "express";
import { ResponseAPI } from "../../../types";
import { DownloadProcessesService } from "../services"
import { json } from "stream/consumers";

export class DownloadProcessesController{
    private downloadProcessesService: DownloadProcessesService 

    constructor () {
        this.downloadProcessesService = new DownloadProcessesService();
    }

    async downloadProcesses(data: any):Promise<ResponseAPI>{
        try {
            console.log(`Tudo certo por aqui no Controller`)
            if(!data){
                return {
                    statusCode: 400,
                    success: false,
                    message: "No process information",
                    data: null
                }
            }
            const process = data.process

            console.log("Processos recebidos:", data.process);

            const results = await this.downloadProcessesService.downloaderProcess(process)

            if(!results){
                return {
                    statusCode: 400,
                    success: false,
                    message: "No results in process",
                    data: null
                }
            }
            
            return {
                statusCode: 200,
                success: true,
                message:"Process incluides",
                data: data
            }
        } catch (error) {
            return{
                statusCode: 500,
                success: false,
                message: "Controller Internal server error",
                data: error
            }
        }
    }
}
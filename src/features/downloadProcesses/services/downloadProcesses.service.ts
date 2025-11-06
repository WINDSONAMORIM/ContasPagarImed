import { MyFluxClient } from "../../../clients/myFlux.client";

export class DownloadProcessesService{
 private client = new MyFluxClient();
 
    async downloaderProcess(data: Number[]): Promise<any>{
        console.log(`Data Service: ${data}`)
        const result = await Promise.all(
            data.map((id)=>{
                this.client.empacotar(id)  
                }
            )
        )
        return result
    }
}
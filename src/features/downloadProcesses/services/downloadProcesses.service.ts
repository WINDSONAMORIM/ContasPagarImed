import { MyFluxClient } from "../../../clients/myFlux.client";

export class DownloadProcessesService{
 private client = new MyFluxClient();

    async downloaderProcess(data: Number[]): Promise<any> {
        const results = [];
        for(const id of data) {
            const result = await this.client.empacotar(id);
            results.push(result);
        }
        return results;
    }
}
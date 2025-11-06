import { Router, Request as Req, Response as Res } from "express";
import { DownloadProcessesController } from "./controllers";

export const downloadProcessesRoutes = (router: Router) => {
    const downloadProcessesController = new DownloadProcessesController();
    router.post("/downloadProcesses", async (req:Req, res:Res) : Promise<void> => {
        const process = req.body;
        console.log(process)
      const response = await downloadProcessesController.downloadProcesses(process);
    res.status(response.statusCode).json(response);
});
}
import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import { routesApp } from "./routes/routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routesApp(app);

app.listen(process.env.PORT, () =>
  console.log("Servidor iniciado na porta " + process.env.PORT)
);

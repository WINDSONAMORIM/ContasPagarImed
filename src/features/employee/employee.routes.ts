import { Router } from "express";
import { EmployeeController } from "./controllers";
import { uploadInMemory } from "../../middlewares/validateuploadFolderExists.middleware";

export const employeeRoutes = (router: Router) => {
    const employeeController = new EmployeeController();
    router.post(
        "/Funcionario",uploadInMemory.single("files"),
        employeeController.createEmployeeController.bind(employeeController)
    );
}
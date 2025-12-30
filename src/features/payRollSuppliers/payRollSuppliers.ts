import { Router } from "express";
import { PayRollSuppliersController } from "./controllers/payRollSuppliers.controller";
import { uploadInMemory } from "../../middlewares/validateuploadFolderExists.middleware";

export const payRollSuppliers = (router: Router) => {
    const payRollSuppliersController = new PayRollSuppliersController();

    router.post("/folhaPJ",uploadInMemory.single("files"),
    payRollSuppliersController.createPayRollSupplierController.bind(payRollSuppliersController));
}
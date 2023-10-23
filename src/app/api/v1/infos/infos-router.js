import { Router } from "express";
import infosController from "./infos-controller.js";

const infosRouter = Router();

infosRouter.route("/infos").get((req, res) => infosController.get(req, res));
infosRouter.route("/infos").post((req, res) => infosController.post(req, res));
infosRouter.route("/infos/:id").delete((req, res) => infosController.delete(req, res));


export default infosRouter;
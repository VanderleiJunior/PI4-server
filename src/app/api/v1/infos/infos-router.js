import { Router } from "express";
import infosController from "./infos-controller.js";

const infosRouter = Router();

infosRouter.route("/infos").get((req, res) => infosController.getInfos(req, res));

export default infosRouter;
import { Router } from "express";
import infosController from "./infos-controller.js";
import auth from "../../../config/middleware/auth/auth.js";

export const infosRouter = Router();

infosRouter.route("/infos").post((req, res) => infosController.post(req, res));

export const infosRouterAuth = Router();

infosRouterAuth.use(auth);

infosRouterAuth
  .route("/infos")
  .get((req, res) => infosController.get(req, res));

infosRouterAuth
  .route("/infos/:id")
  .delete((req, res) => infosController.delete(req, res));

infosRouterAuth
  .route("/infos/statistic")
  .get((req, res) => infosController.statistic(req, res));

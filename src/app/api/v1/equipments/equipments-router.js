import { Router } from "express";
import auth from "../../../config/middleware/auth/auth.js";
import equipmentsController from "./equipments-controller.js";

export const equipmentsRouter = Router();

equipmentsRouter.use(auth);

equipmentsRouter
  .route("/equipments")
  .post((req, res) => equipmentsController.create(req, res));
equipmentsRouter
  .route("/equipments")
  .get((req, res) => equipmentsController.find(req, res));
equipmentsRouter
  .route("/equipments")
  .delete((req, res) => equipmentsController.delete(req, res));

export default equipmentsRouter;

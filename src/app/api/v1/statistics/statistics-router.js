import { Router } from "express";
import statisticsController from "./statistics-controller.js";
import auth from "../../../config/middleware/auth/auth.js";

export const statisticsRouter = Router();

statisticsRouter.use(auth);

statisticsRouter
  .route("/statistic")
  .post((req, res) => statisticsController.post(req, res));
statisticsRouter
  .route("/statistic")
  .get((req, res) => statisticsController.get(req, res));

export default statisticsRouter;

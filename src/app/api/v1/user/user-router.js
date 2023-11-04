import { Router } from "express";
import userController from "./user-controller.js";
import auth from "../../../config/middleware/auth/auth.js";

export const userRouter = Router();
userRouter.route("/user").post((req, res) => userController.post(req, res));
userRouter
  .route("/user/auth")
  .post((req, res) => userController.auth(req, res));

export const userRouterAuth = Router();
userRouterAuth.use(auth);
userRouterAuth.route("/user").get((req, res) => userController.get(req, res));
userRouterAuth.route("/user").put((req, res) => userController.put(req, res));

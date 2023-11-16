import { Router } from "express";
import userController from "./users-controller.js";
import auth from "../../../config/middleware/auth/auth.js";

export const userRouter = Router();
userRouter.route("/users").post((req, res) => userController.post(req, res));
userRouter
  .route("/users/auth")
  .post((req, res) => userController.auth(req, res));

export const userRouterAuth = Router();
userRouterAuth.use(auth);
userRouterAuth.route("/users").get((req, res) => userController.get(req, res));
userRouterAuth.route("/users").put((req, res) => userController.put(req, res));

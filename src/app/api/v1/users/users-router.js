import { Router } from "express";
import usersController from "./users-controller.js";
import auth from "../../../config/middleware/auth/auth.js";

export const userRouter = Router();
userRouter.route("/users").post((req, res) => usersController.post(req, res));
userRouter
  .route("/users/auth")
  .post((req, res) => usersController.auth(req, res));

export const userRouterAuth = Router();
userRouterAuth.use(auth);
userRouterAuth.route("/users").get((req, res) => usersController.get(req, res));
userRouterAuth.route("/users").put((req, res) => usersController.put(req, res));

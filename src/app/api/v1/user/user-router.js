import { Router } from "express";
import userController from "./user-controller.js";

const userRouter = Router();

userRouter.route("/user").get((req, res) => userController.get(req, res));
userRouter.route("/user").post((req, res) => userController.post(req, res));

export default userRouter;

import { Router } from "express";
import userController from "./user-controller.js";

const userRouter = Router();

userRouter.route("/user").get((req, res) => userController.getUsers(req, res));

export default userRouter;

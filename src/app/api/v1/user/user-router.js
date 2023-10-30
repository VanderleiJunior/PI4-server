import { Router } from "express";
import userController from "./user-controller.js";
import auth from "../../../config/middleware/auth/auth.js";

const userRouter = Router();
userRouter.route("/user").post((req, res) => userController.post(req, res));
userRouter
  .route("/user/auth")
  .post((req, res) => userController.auth(req, res));

userRouter.use(auth);

userRouter.route("/user").get((req, res) => userController.get(req, res));
userRouter.route("/user").put((req, res) => userController.put(req, res));

export default userRouter;

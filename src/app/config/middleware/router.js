import { Router } from "express";
import userRouter from "../../api/v1/user/user-router.js";
import infosRouter from "../../api/v1/infos/infos-router.js";

const router = Router();

router.use("/api/v1", userRouter);

router.use("/api/v1", infosRouter);

export default router;

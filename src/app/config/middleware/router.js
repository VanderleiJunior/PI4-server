import { Router } from "express";
import userRouter from "../../api/v1/user/user-router.js";

const router = Router();

router.use("/api/v1", userRouter);

export default router;

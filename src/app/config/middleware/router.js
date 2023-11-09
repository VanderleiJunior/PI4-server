import { Router } from "express";
import { userRouter, userRouterAuth } from "../../api/v1/user/user-router.js";
import {
  infosRouter,
  infosRouterAuth,
} from "../../api/v1/infos/infos-router.js";
import statisticsRouter from "../../api/v1/statistics/statistics-router.js";

const router = Router();

router.use("/api/v1", userRouter);

router.use("/api/v1", infosRouter);

router.use("/api/v1", infosRouterAuth);

router.use("/api/v1", userRouterAuth);

router.use("/api/v1", statisticsRouter);

export default router;

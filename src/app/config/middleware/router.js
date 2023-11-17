import { Router } from "express";
import { userRouter, userRouterAuth } from "../../api/v1/users/users-router.js";
import {
  infosRouter,
  infosRouterAuth,
} from "../../api/v1/infos/infos-router.js";
import equipmentsRouter from "../../api/v1/equipments/equipments-router.js";

const router = Router();

router.use("/api/v1", userRouter);

router.use("/api/v1", infosRouter);

router.use("/api/v1", infosRouterAuth);

router.use("/api/v1", userRouterAuth);

router.use("/api/v1", equipmentsRouter);

export default router;

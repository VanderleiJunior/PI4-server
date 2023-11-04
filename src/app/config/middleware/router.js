import { Router } from "express";
import { userRouter, userRouterAuth } from "../../api/v1/user/user-router.js";
import {
  infosRouter,
  infosRouterAuth,
} from "../../api/v1/infos/infos-router.js";
import swaggerDocs from "./swagger.json" assert { type: "json" };
import swaggerUi from "swagger-ui-express";

const router = Router();

router.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

router.use("/api/v1", userRouter);

router.use("/api/v1", infosRouter);

router.use("/api/v1", infosRouterAuth);

router.use("/api/v1", userRouterAuth);

export default router;

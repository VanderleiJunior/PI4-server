import { Router } from "express";
import { userRouter, userRouterAuth } from "../../api/v1/user/user-router.js";
import {
  infosRouter,
  infosRouterAuth,
} from "../../api/v1/infos/infos-router.js";
import swaggerJSON from "./swagger.json" assert { type: "json" };
import swaggerUi from "swagger-ui-express";

const swaggerDocs = swaggerUi.setup(swaggerJSON);

const router = Router();

router.use("/api/v1/api-docs", swaggerUi.serve, swaggerDocs);

router.use("/api/v1", userRouter);

router.use("/api/v1", infosRouter);

router.use("/api/v1", infosRouterAuth);

router.use("/api/v1", userRouterAuth);

export default router;

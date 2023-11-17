import express from "express";
import cors from "cors";
import swaggerJSON from "./swagger.json" assert { type: "json" };
import swaggerUi from "swagger-ui-express";

import router from "./router.js";

const swaggerDocs = swaggerUi.setup(swaggerJSON);

const appMiddleware = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use("/api/v1/api-docs", swaggerUi.serve, swaggerDocs);
  app.use(router);
};

export default appMiddleware;

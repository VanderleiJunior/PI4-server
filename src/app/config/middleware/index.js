import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import router from "./router.js";
import swaggerDocs from "./swagger.json" assert { type: "json" };

const appMiddleware = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(router);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

export default appMiddleware;

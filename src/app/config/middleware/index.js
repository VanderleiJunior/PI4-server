import express from "express";
import cors from "cors";

import router from "./router.js";

const appMiddleware = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(router);
};

export default appMiddleware;

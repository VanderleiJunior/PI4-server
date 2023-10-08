import express from "express";
import appConfig from "./config/index.js";

const app = express();

appConfig(app);

export default app;

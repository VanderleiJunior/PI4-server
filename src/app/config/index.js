import connectToMongoDB from "../database/index.js";
import appMiddleware from "./middleware/index.js";
import crons from "../cron/index.js";

const appConfig = (app) => {
  connectToMongoDB();
  appMiddleware(app);
  crons();
};

export default appConfig;

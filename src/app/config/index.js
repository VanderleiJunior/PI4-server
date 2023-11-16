import connectToMongoDB from "../database/index.js";
import appMiddleware from "./middleware/index.js";
import crons from "../cron/index.js";
import consumer from "./broker/consumer.js";

const appConfig = (app) => {
  connectToMongoDB();
  appMiddleware(app);
  consumer();
  //crons();
};

export default appConfig;

import connectToMongoDB from "../database/index.js";
import appMiddleware from "./middleware/index.js";

const appConfig = (app) => {
  connectToMongoDB();
  appMiddleware(app);
};

export default appConfig;

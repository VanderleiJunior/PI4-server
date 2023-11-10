import { cronWeather } from "./cronWeather.js";

const crons = () => {
  console.log("Cron start");
  cronWeather.start();
};

export default crons;

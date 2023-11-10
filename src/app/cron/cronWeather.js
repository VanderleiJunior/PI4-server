import { CronJob } from "cron";
import setWeather from "../weather/index.js";

const weatherCronTime = process.env.WEATHER_CRON_TIME;
const weatherCronActive = process.env.WEATHER_CRON;
const weatherCronTimeZone = process.env.WEATHER_CRON_TIME_ZONE;

export const cronWeather = new CronJob(
  weatherCronTime,
  async () => {
    await setWeather();
  },
  null,
  weatherCronActive,
  weatherCronTimeZone
);

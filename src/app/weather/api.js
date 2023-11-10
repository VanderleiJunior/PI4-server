import axios from "axios";

const cityName = process.env.WEATHER_API_CITY_NAME;
const stateCode = process.env.WEATHER_API_STATE_CODE;
const countryCode = process.env.WEATHER_API_COUNTRY_CODE;
const lang = process.env.WEATHER_API_LANG;
const APIkey = process.env.WEATHER_API_KEY;

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode},${countryCode}&lang=${lang}&appid=${APIkey}`;

export const getWeather = async () => {
  await axios
    .get(apiURL)
    .then((data) => {
      console.log(data);
    })
    .catch((e) => console.log(e));
};

import infosRepository from "../api/v1/infos/infos-repository.js";
import { getWeather } from "./api.js";

const setWeather = async () => {
  const { data } = await getWeather();
  const weather = {
    temperature: data.main.temp,
    airMoisture: data.main.humidity,
  };

  const res = await infosRepository.create(weather);

  return console.log("Os dados foram salvos: ", res.data);
};

export default setWeather;

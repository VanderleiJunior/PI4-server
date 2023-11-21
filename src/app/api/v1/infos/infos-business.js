import calculateStatistics from "../../../math/index.js";
import calculateHydrationProbability from "../../../math/probabilities.js";
import infosRepository from "./infos-repository.js";

const infosBusiness = {
  find: async (params) => {
    if (params.filter != "day" && params.filter != "hours") {
      return {
        data: "Filter parameter is only value = day our hours",
        status: 400,
      };
    } else if (
      params.filter == "day" &&
      (!params.initDate || !params.lastDate)
    ) {
      return {
        data: "For filter = day, initDate and lastDate is required",
        status: 400,
      };
    } else if (!params.equipmentSerialNumber) {
      return { data: "equipment SerialNumber is required", status: 400 };
    }
    const lastDate =
      params.filter == "hours" ? getDateTime().date : params.lastDate;
    const initDate =
      params.filter == "hours" ? getDateTime(true).date : params.initDate;

    return await infosRepository.find({ ...params, lastDate, initDate });
  },
  create: async (infos) => {
    const dateTime = getDateTime();
    const res = await infosRepository.create({ ...infos, ...dateTime });
    return res;
  },
  delete: async (id) => {
    return await infosRepository.delete(id);
  },
  statistic: async (params) => {
    if (params.filter != "day" && params.filter != "hours") {
      return {
        data: "Filter parameter is only value = day our hours",
        status: 400,
      };
    } else if (
      params.filter == "day" &&
      (!params.dates || params.dates.length <= 0)
    ) {
      return {
        data: "For filter = day, dates array is required",
        status: 400,
      };
    } else if (!params.equipmentSerialNumber) {
      return { data: "equipment SerialNumber is required", status: 400 };
    }

    if (params.filter == "hours") {
      const response = await infosBusiness.find(params);
      if (response.status) {
        return response;
      }
      const data = {
        temperature: [],
        soilMoisture: [],
        airMoisture: [],
        hydrationProbability: null,
        date: "last 5 hours",
      };
      response.data.map((e, i) => {
        if (i == 0) {
          data.hydrationProbability = calculateHydrationProbability(
            e.soilMoisture,
            e.temperature
          );
        }
        data.temperature.push(e.temperature);
        data.airMoisture.push(e.airMoisture);
        data.soilMoisture.push(e.soilMoisture);
      });

      data.temperature = calculateStatistics(data.temperature);
      data.airMoisture = calculateStatistics(data.airMoisture);
      data.soilMoisture = calculateStatistics(data.soilMoisture);

      return { data: [{ ...data }] };
    } else if (params.filter == "day") {
      const err = {
        data: null,
        status: null,
      };
      const dataOfAll = {
        temperature: [],
        soilMoisture: [],
        airMoisture: [],
        date: "all",
      };
      const data = [];
      for (let date of params.dates) {
        const dataDay = {
          temperature: [],
          soilMoisture: [],
          airMoisture: [],
          hydrationProbability: null,
          date: null,
        };
        const response = await infosBusiness.find({
          ...params,
          lastDate: date,
          initDate: date,
        });

        if (response.status) {
          err.data = response.data;
          err.status = response.status;
          break;
        }

        response.data.map((e) => {
          dataDay.temperature.push(e.temperature);
          dataDay.airMoisture.push(e.airMoisture);
          dataDay.soilMoisture.push(e.soilMoisture);
          dataOfAll.temperature.push(e.temperature);
          dataOfAll.airMoisture.push(e.airMoisture);
          dataOfAll.soilMoisture.push(e.soilMoisture);
        });

        dataDay.temperature = calculateStatistics(dataDay.temperature);
        dataDay.airMoisture = calculateStatistics(dataDay.airMoisture);
        dataDay.soilMoisture = calculateStatistics(dataDay.soilMoisture);
        dataDay.hydrationProbability = calculateHydrationProbability(
          dataDay.soilMoisture.mean,
          dataDay.temperature.mean
        );
        dataDay.date = date;

        data.push(dataDay);
      }

      dataOfAll.temperature = calculateStatistics(dataOfAll.temperature);
      dataOfAll.airMoisture = calculateStatistics(dataOfAll.airMoisture);
      dataOfAll.soilMoisture = calculateStatistics(dataOfAll.soilMoisture);
      dataOfAll.hydrationProbability = calculateHydrationProbability(
        dataOfAll.soilMoisture.mean,
        dataOfAll.temperature.mean
      );

      data.push(dataOfAll);

      if (err.status) {
        return err;
      }
      return { data: data };
    }
  },
};

const getDateTime = (ontem = false) => {
  const dataHoraAtual = new Date();

  if (ontem) {
    dataHoraAtual.setDate(dataHoraAtual.getDate() - 1);
  }

  const data = dataHoraAtual.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  const [date, time] = data.split(",").map((elemento) => elemento.trim());

  return { date, time };
};

export default infosBusiness;

import statisticsRepository from "./statistics-repository.js";

const statisticsBusiness = {
  find: async (type) => {
    if (type > 3 || type < 1) {
      return { data: "type is invalid value", status: 400 };
    } else if (type == 1) {
      const result = await infosBusiness.find(5);
      const temperature = [];
      const soilMoisture = [];
      const airMoisture = [];

      result.data.map((data) => {
        temperature.push(data.temperature);
        soilMoisture.push(data.soilMoisture);
        airMoisture.push(data.airMoisture);
      });

      const data = {
        temperature: calculateStatistics(temperature),
        soilMoisture: calculateStatistics(soilMoisture),
        airMoisture: calculateStatistics(airMoisture),
      };

      return res.status(200).send(data);
    } else if (type == 2) {
      const response = await statisticsRepository.find(5);
      return response;
    }
    const data = await statisticsRepository.find(150);

    if (data.status) {
      return data;
    }

    const response = data.data.map((e) => {
      const dataMap = {
        temperature: {
          mean: [],
          mode: [],
          median: [],
          standardDeviation: [],
          skewness: [],
          kurtosis: [],
        },
        soilMoisture: {
          mean: [],
          mode: [],
          median: [],
          standardDeviation: [],
          skewness: [],
          kurtosis: [],
        },
        airMoisture: {
          mean: [],
          mode: [],
          median: [],
          standardDeviation: [],
          skewness: [],
          kurtosis: [],
        },
      };
      e.map((s) => {
        dataMap.temperature.mean.push(s.temperature.mean);
        dataMap.temperature.mode.push(s.temperature.mode);
        dataMap.temperature.median.push(s.temperature.median);
        dataMap.temperature.standardDeviation.push(
          s.temperature.standardDeviation
        );
        dataMap.temperature.skewness.push(s.temperature.skewness);
        dataMap.temperature.kurtosis.push(s.temperature.kurtosis);

        dataMap.soilMoisture.mean.push(s.soilMoisture.mean);
        dataMap.soilMoisture.mode.push(s.soilMoisture.mode);
        dataMap.soilMoisture.median.push(s.soilMoisture.median);
        dataMap.soilMoisture.standardDeviation.push(
          s.soilMoisture.standardDeviation
        );
        dataMap.soilMoisture.skewness.push(s.soilMoisture.skewness);
        dataMap.soilMoisture.kurtosis.push(s.soilMoisture.kurtosis);

        dataMap.airMoisture.mean.push(s.airMoisture.mean);
        dataMap.airMoisture.mode.push(s.airMoisture.mode);
        dataMap.airMoisture.median.push(s.airMoisture.median);
        dataMap.airMoisture.standardDeviation.push(
          s.airMoisture.standardDeviation
        );
        dataMap.airMoisture.skewness.push(s.airMoisture.skewness);
        dataMap.airMoisture.kurtosis.push(s.airMoisture.kurtosis);
      });

      const mean = {
        temperature: {
          mean:
            dataMap.temperature.mean.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.temperature.mean.length,
          mode:
            dataMap.temperature.mode.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.temperature.mode.length,
          median:
            dataMap.temperature.median.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.temperature.median.length,
          standardDeviation:
            dataMap.temperature.standardDeviation.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.temperature.standardDeviation.length,
          skewness:
            dataMap.temperature.skewness.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.temperature.skewness.length,
          kurtosis:
            dataMap.temperature.skewness.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.temperature.skewness.length,
        },
        soilMoisture: {
          mean:
            dataMap.soilMoisture.mean.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.soilMoisture.mean.length,
          mode:
            dataMap.soilMoisture.mode.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.soilMoisture.mode.length,
          median:
            dataMap.soilMoisture.median.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.soilMoisture.median.length,
          standardDeviation:
            dataMap.soilMoisture.standardDeviation.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.soilMoisture.standardDeviation.length,
          skewness:
            dataMap.soilMoisture.skewness.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.soilMoisture.skewness.length,
          kurtosis:
            dataMap.soilMoisture.skewness.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.soilMoisture.skewness.length,
        },
        airMoisture: {
          mean:
            dataMap.airMoisture.mean.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.airMoisture.mean.length,
          mode:
            dataMap.airMoisture.mode.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.airMoisture.mode.length,
          median:
            dataMap.airMoisture.median.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.airMoisture.median.length,
          standardDeviation:
            dataMap.airMoisture.standardDeviation.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.airMoisture.standardDeviation.length,
          skewness:
            dataMap.airMoisture.skewness.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.airMoisture.skewness.length,
          kurtosis:
            dataMap.airMoisture.skewness.reduce(
              (accumulator, value) => accumulator + value,
              0
            ) / dataMap.airMoisture.skewness.length,
        },
        date: {
          firstDate: e[0].date,
          lastDate: e[e.length - 1].date,
        },
      };

      return mean;
    });

    return { data: response };
  },
  create: async (statistic) => {
    const data = await statisticsRepository.create(statistic);

    return data;
  },
};

export default statisticsBusiness;

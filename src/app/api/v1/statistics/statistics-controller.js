import statisticsBusiness from "./statistics-business.js";

const statisticsController = {
  get: async (req, res) => {
    //type eh uma variavel para verificar se voce deseja estatistica:
    //type 1: ultimas 5 horas
    //type 2: ultimos 5 dias
    //type 3: 5 mes

    const type = req.query.type;

    if (!type) {
      return res.send("type is required").status(400);
    }

    const result = await statisticsBusiness.find(type);

    if (result.status) {
      return res.send(result.data).status(result.status);
    }

    return res.json(result).status(200);
  },
  post: async (req, res) => {
    const statistic = {
      temperature: {
        mean: req.body.temperature.mean,
        mode: req.body.temperature.mode,
        median: req.body.temperature.median,
        standardDeviation: req.body.temperature.standardDeviation,
        skewness: req.body.temperature.skewness,
        kurtosis: req.body.temperature.kurtosis,
      },
      soilMoisture: {
        mean: req.body.soilMoisture.mean,
        mode: req.body.soilMoisture.mode,
        median: req.body.soilMoisture.median,
        standardDeviation: req.body.soilMoisture.standardDeviation,
        skewness: req.body.soilMoisture.skewness,
        kurtosis: req.body.soilMoisture.kurtosis,
      },
      airMoisture: {
        mean: req.body.airMoisture.mean,
        mode: req.body.airMoisture.mode,
        median: req.body.airMoisture.median,
        standardDeviation: req.body.airMoisture.standardDeviation,
        skewness: req.body.airMoisture.skewness,
        kurtosis: req.body.airMoisture.kurtosis,
      },
      date: req.body.date,
    };

    if (!statistic.date) {
      return res.send("date is required").status(400);
    }

    const result = await statisticsBusiness.create(statistic);

    if (result.status) {
      return res.send(result.data).status(result.status);
    }

    return res.json(data).status(201);
  },
};

export default statisticsController;

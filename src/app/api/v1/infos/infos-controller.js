import calculateStatistics from "../../../math/index.js";
import infosBusiness from "./infos-business.js";

const infosController = {
  get: async (req, res) => {
    const params = {
      equipmentSerialNumber: req.query.equipmentSerialNumber,
      initDate: req.query.initDate,
      lastDate: req.query.lastDate,
      filter: req.query.filter,
      infosType: req.query.infosType
        ? [req.query.infosType]
        : ["temperature", "soilMoisture", "airMoisture"],
    };

    const result = await infosBusiness.find(params);
    return res.send(result.data).status(result.status || 200);
  },
  post: async (req, res) => {
    const infos = {
      temperature: req.body.temperature,
      soilMoisture: req.body.soilMoisture,
      airMoisture: req.body.airMoisture,
      equipmentSerialNumber: req.body.equipmentSerialNumber,
    };

    if (!infos.temperature | !infos.soilMoisture | !infos.airMoisture) {
      return res
        .status(400)
        .send("Soil moisture, temperature and air moisture is required");
    }

    const result = await infosBusiness.create(infos);
    return res.status(result.status || 201).send(result.data);
  },
  delete: async (req, res) => {
    const infosId = req.query.id;

    if (!infosId) {
      return res.status(400).send("Infos ID is required");
    }

    const result = await infosBusiness.delete(infosId);

    if (result.status === 200) {
      return res.status(200).send(result.data);
    } else if (result.status === 404) {
      return res.status(404).send(result.data);
    } else {
      return res.status(500).send(result.data);
    }
  },
  statistic: async (req, res) => {
    const params = {
      equipmentSerialNumber: req.query.equipmentSerialNumber,
      filter: req.query.filter,
      infosType: req.query.infosType
        ? [req.query.infosType]
        : ["temperature", "soilMoisture", "airMoisture"],
      dates: req.body.dates,
    };

    const response = await infosBusiness.statistic(params);

    return res.status(response.status || 200).send(response.data);
  },
};

export default infosController;

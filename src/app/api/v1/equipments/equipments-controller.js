import equipmentsBusiness from "./equipments-business.js";

const equipmentsController = {
  find: async (req, res) => {
    const userId = req.userId;

    const result = await equipmentsBusiness.find(userId);
    return res.status(result.status || 200).send(result.data);
  },
  create: async (req, res) => {
    const equipment = {
      serialNumber: req.query.serialNumber,
      userId: req.userId,
    };
    console.log(req.par);

    if (!equipment.serialNumber) {
      return res.status(400).send("equipment SerialNumber is required");
    }

    const result = await equipmentsBusiness.create(equipment);
    return res.status(result.status || 200).send(result.data);
  },
  delete: async (req, res) => {
    const equipment = {
      serialNumber: req.query.serialNumber,
      userId: req.userId,
    };

    if (!equipment.serialNumber) {
      return res.status(400).send("equipment SerialNumber is required");
    }

    const result = await equipmentsBusiness.create(equipment);
    return res.status(result.status || 200).send(result.data);
  },
};

export default equipmentsController;

import equipmentsBusiness from "../equipments/equipments-business.js";
import equipmentsController from "../equipments/equipments-controller.js";
import usersBusiness from "./users-business.js";

const usersController = {
  get: async (req, res) => {
    const userId = req.userId;
    const result = await usersBusiness.find(userId);
    return res.json(result.data).status(200);
  },
  post: async (req, res) => {
    const user = {
      name: req.body.name,
      email: req.body.email.toLowerCase() || null,
      password: req.body.password,
    };

    if (!user.name | !user.email | !user.password) {
      return res.status(400).send("Email, name and password is required");
    }

    const result = await usersBusiness.create(user);

    return res.status(result.status || 201).send(result.data);
  },
  auth: async (req, res) => {
    const user = {
      email: req.body.email.toLowerCase() || null,
      password: req.body.password,
    };

    if (!user.email) {
      return res.status(400).send("Email is required");
    } else if (!user.password) {
      return res.status(400).send("Password is required");
    }

    const result = await usersBusiness.login(user);
    return res.status(result.status || 200).send(result.data);
  },
  put: async (req, res) => {
    if (!req.body.user) {
      return res.status(400).send("req empty");
    }
    const user = { ...req.body.user, _id: req.userId };

    const result = await usersBusiness.put(user);
    return res.status(result.status || 200).send(result.data);
  },
};

export default usersController;

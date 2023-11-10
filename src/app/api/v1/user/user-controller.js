import userBusiness from "./user-business.js";

const userController = {
  get: async (req, res) => {
    const userId = req.userId;
    const result = await userBusiness.find(userId);
    return res.json(result).status(200);
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

    const result = await userBusiness.create(user);
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

    const result = await userBusiness.login(user);
    return res.status(result.status || 200).send(result.data);
  },
  put: async (req, res) => {
    if (!req.body.user) {
      return res.status(400).send("req empty");
    }
    const user = { ...req.body.user, _id: req.userId };

    const result = await userBusiness.put(user);
    return res.status(result.status || 200).send(result.data);
  },
};

export default userController;

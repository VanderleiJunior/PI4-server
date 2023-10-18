import userBusiness from "./user-business.js";

const userController = {
  get: async (req, res) => {
    const userId = req.params.userId;
    const result = await userBusiness.find(userId);
    return res.json(result).status(200);
  },
  post: async (req, res) => {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };

    if (!user.name | !user.email | !user.password) {
      return res.status(400).send("Email, name and password is required");
    }

    const result = await userBusiness.create(user);
    return res.status(result.status || 201).send(result.data);
  },
};

export default userController;

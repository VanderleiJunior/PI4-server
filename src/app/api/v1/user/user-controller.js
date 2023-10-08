import userBusiness from "./user-business.js";

const userController = {
  getUsers: async (req, res) => {
    const user = req.body.user;
    const result = await userBusiness.find(user);
    return res.json(result).status(200);
  },
};

export default userController;

import userRepository from "./user-repository.js";
import validName from "../../../utils/validName.js";
import validEmail from "../../../utils/validEmail.js";
import validPassword from "../../../utils/validPassword.js";

const userBusiness = {
  find: async (user) => {
    return await userRepository.find(user);
  },
  create: async (user) => {
    if (!validName(user.name)) {
      return { data: "Name invalid", status: 400 };
    } else if (!validEmail(user.email)) {
      return { data: "Email invalid", status: 400 };
    } else if (!validPassword(user.password)) {
      return { data: "Password invalid", status: 400 };
    }
    const res = await userRepository.create(user);
    return res;
  },
};

export default userBusiness;

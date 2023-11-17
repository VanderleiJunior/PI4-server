import usersRepository from "./users-repository.js";
import validName from "../../../utils/validName.js";
import validEmail from "../../../utils/validEmail.js";
import validPassword from "../../../utils/validPassword.js";
import crypt from "../../../config/middleware/auth/crypt.js";
import token from "../../../config/middleware/auth/token.js";

const usersBusiness = {
  find: async (userId) => {
    const res = await usersRepository.get(userId);
    return res;
  },
  create: async (user) => {
    if (!validName(user.name)) {
      return { data: "Name invalid", status: 400 };
    } else if (!validEmail(user.email)) {
      return { data: "Email invalid", status: 400 };
    } else if (!validPassword(user.password)) {
      return { data: "Password invalid", status: 400 };
    }
    const res = await usersRepository.create({
      ...user,
      password: await crypt.passwordHash(user.password),
    });

    if (user.serialNumber && !result.status) {
      await equipmentsBusiness.create({
        userId: res.data._id,
        serialNumber: user.serialNumber,
      });
    }

    if (!res.status) {
      const codToken = token.newToken(res.data._id);

      return { data: { token: codToken } };
    } else {
      return res;
    }
  },
  login: async (user) => {
    const dbUser = await usersRepository.find({ email: user.email });

    if (dbUser.status) {
      return dbUser;
    } else if (!dbUser.data.password) {
      return { data: "Password invalid", status: 400 };
    }

    if (!crypt.passwordCompare(user.password, dbUser.data.password)) {
      return { data: "password invalid", status: 404 };
    } else {
      const codToken = token.newToken(dbUser.data._id);
      return { data: { token: codToken } };
    }
  },
  put: async (user) => {
    if (user.name && !validName(user.name)) {
      return { data: "Name invalid", status: 400 };
    } else if (user.email && !validEmail(user.email)) {
      return { data: "Email invalid", status: 400 };
    } else if (user.password && !validPassword(user.password)) {
      return { data: "Password invalid", status: 400 };
    }

    const upUser = new Object();

    user.name ? (upUser.name = user.name) : null;
    user.email ? (upUser.email = user.email) : null;
    user.password ? (upUser.password = user.password) : null;
    user.birthDate ? (upUser.birthDate = user.birthDate) : null;
    user.address ? (upUser.address = user.address) : null;
    upUser._id = user._id;

    const res = await usersRepository.update(upUser);
    if (!res.status) {
      return { data: { ...res.data._doc, ...upUser } };
    }
    return res;
  },
};

export default usersBusiness;

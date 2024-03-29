import { UsersSchema } from "./users-schema.js";

const usersRepository = {
  get: async (userId) => {
    try {
      const res = await UsersSchema.find({ _id: userId });
      return { data: res };
    } catch (err) {
      console.error(err);

      return { data: err.menssage, status: 400 };
    }
  },
  find: async (email) => {
    try {
      const res = await UsersSchema.findOne(email).select("password");
      if (res == null) {
        return { data: "email invalid", status: 404 };
      }
      return { data: res };
    } catch (err) {
      console.error(err);
      return { data: "email invalid", status: 404 };
    }
  },
  create: async (user) => {
    try {
      const result = await UsersSchema.create(user);
      return { data: result };
    } catch (err) {
      console.error(err);
      if (err.code === 11000) {
        return { data: "Email already exists.", status: 409 };
      } else {
        return { data: err.message, status: 400 };
      }
    }
  },
  update: async (user) => {
    try {
      const result = await UsersSchema.findByIdAndUpdate(user._id, { ...user });
      return { data: result };
    } catch (err) {
      console.error(err);
      return { data: "Id invalid.", status: 409 };
    }
  },
};

export default usersRepository;

import { UserSchema } from "./user-schema.js";

const userRepository = {
  find: async (user) => {
    try {
      const res = { data: await UserSchema.find(user) };
      return res;
    } catch (err) {
      return err;
    }
  },
  create: async (user) => {
    try {
      const result = await UserSchema.create(user);
      return { data: result };
    } catch (err) {
      if (err.code === 11000) {
        return { data: "Email already exists.", status: 409 };
      } else {
        return { data: err.message, status: 400 };
      }
    }
  },
};

export default userRepository;

import { UserSchema } from "./user-schema.js";

const userRepository = {
  get: async (userId) => {
    try {
      const res = await UserSchema.find({ _id: userId });
      return { data: res };
    } catch (err) {
      return { data: err.menssage, status: 400 };
    }
  },
  find: async (email) => {
    try {
      const res = await UserSchema.findOne({ email: email }).select("password");
      return { data: res };
    } catch (err) {
      return { data: "email invalid", status: 404 };
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
  update: async (user) => {
    try {
      const result = await UserSchema.findByIdAndUpdate(user._id, { ...user });
      return { data: result };
    } catch (err) {
      return { data: "Id invalid.", status: 409 };
    }
  },
};

export default userRepository;

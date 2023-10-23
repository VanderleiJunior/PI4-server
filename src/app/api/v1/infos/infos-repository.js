import { InfosSchema } from "./infos-schema.js";

const infosRepository = {
  find: async (infos) => {
    try {
      const res = { data: await InfosSchema.find(infos) };
      return res;
    } catch (err) {
      return err;
    }
  },
  create: async (infos) => {
    try {
      const result = await InfosSchema.create(infos);
      return { data: result };
    } catch (err) {
      if (err.code === 11000) {
        return { data: "Email already exists.", status: 409 };
      } else {
        return { data: err.message, status: 400 };
      }
    }
  },
  delete: async (id) => {
    try {
      const deletedInfo = await InfosSchema.findByIdAndDelete(id);
      if (deletedInfo) {
        return { data: "Info deleted successfully.", status: 200 };
      } else {
        return { data: "Info not found.", status: 404 };
      }
    } catch (err) {
      return { data: err.message, status: 500 };
    }
  },
};

export default infosRepository;
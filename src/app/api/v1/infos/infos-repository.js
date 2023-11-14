import { InfosSchema } from "./infos-schema.js";

const infosRepository = {
  find: async (size) => {
    try {
      const res = {
        data: await InfosSchema.find().sort({ createdAt: -1 }).limit(size),
      };
      return res;
    } catch (err) {
      console.error(err);
      return err;
    }
  },
  create: async (infos) => {
    try {
      const result = await InfosSchema.create(infos);
      return { data: result };
    } catch (err) {
      console.error(err);
      return { data: err.message, status: err.status };
      
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
      console.error(err);
      return { data: err.message, status: 500 };
    }
  },
};

export default infosRepository;

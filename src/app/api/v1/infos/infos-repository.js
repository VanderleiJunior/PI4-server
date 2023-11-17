import { InfosSchema } from "./infos-schema.js";

const infosRepository = {
  find: async (params) => {
    try {
      const infosType = [];
      params.infosType.map((e) => infosType.push(e));
      infosType.push("date", "time");

      const res = {
        data: await InfosSchema.find({
          equipmentSerialNumber: params.equipmentSerialNumber,
          date: params.date,
        })
          .select(infosType)
          .sort({ time: -1 }),
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

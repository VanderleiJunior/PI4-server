import { EquipmentsSchema } from "./equipments-schema.js";

const equipmentsRepository = {
  get: async (userId) => {
    try {
      const res = await EquipmentsSchema.find({ userId: userId });
      return { data: res };
    } catch (err) {
      console.error(err);

      return { data: err.menssage, status: 400 };
    }
  },
  create: async (equipment) => {
    try {
      const result = await EquipmentsSchema.create(equipment);
      return { data: result };
    } catch (err) {
      console.error(err);
      return { data: err.message, status: 400 };
    }
  },
  delete: async (equipment) => {
    try {
      const res = await EquipmentsSchema.deleteOne({ ...equipment });
      return { data: res };
    } catch (err) {
      console.error(err);

      return { data: err.menssage, status: 400 };
    }
  },
};

export default equipmentsRepository;

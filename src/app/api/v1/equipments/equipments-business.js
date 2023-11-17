import equipmentsRepository from "./equipments-repository.js";

const equipmentsBusiness = {
  find: async (userId) => {
    return await equipmentsRepository.get(userId);
  },
  create: async (equipment) => {
    return await equipmentsRepository.create(equipment);
  },
  delete: async (equipment) => {
    return await equipmentsRepository.delete(equipment);
  },
};

export default equipmentsBusiness;

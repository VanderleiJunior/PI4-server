import infosRepository from "./infos-repository.js";

const infosBusiness = {
  find: async (size) => {
    return await infosRepository.find(size);
  },
  create: async (infos) => {
    const res = await infosRepository.create(infos);
    return res;
  },
  delete: async (id) => {
    return await infosRepository.delete(id);
  },
  // populate: async (month) => {
  //   const data = await infosRepository.create(statistic);

  //   return data;
  // },
};

export default infosBusiness;

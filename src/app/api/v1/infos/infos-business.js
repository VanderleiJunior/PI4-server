import infosRepository from "./infos-repository.js";

const infosBusiness = {
  find: async (infos) => {
    return await infosRepository.find(infos);
  },
  create: async (infos) => {

    const res = await infosRepository.create(infos);
    return res;
  },
  delete: async (id) => {

    return await infosRepository.delete(id);
    
  },
};

export default infosBusiness;
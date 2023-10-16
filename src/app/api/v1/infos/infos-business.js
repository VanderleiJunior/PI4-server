import infosRepository from "./infos-repository.js";

const infosBusiness = {
  find: async (infos) => {
    return infosRepository.find(infos);
  },
};

export default infosBusiness;
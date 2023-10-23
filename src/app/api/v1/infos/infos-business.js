import infosRepository from "./infos-repository.js";

const find = async (infos) => {

  return infosRepository.find(infos);
}

export default find;
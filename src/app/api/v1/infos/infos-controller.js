import infosBusiness from "./infos-business.js";

const getInfos = async (request, h) => {

  const result = await infosBusiness.find();
  return h.response(result).code(200);
};

export default {getInfos};

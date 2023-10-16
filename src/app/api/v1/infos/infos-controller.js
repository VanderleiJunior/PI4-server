import infosBusiness from "./infos-business.js";

const infosController = {
  getInfos: async (req, res) => {
    const infos = req.body.infos;
    const result = await infosBusiness.find(infos);
    return res.json(result).status(200);
  },
};

export default infosController;

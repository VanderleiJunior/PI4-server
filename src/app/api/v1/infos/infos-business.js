import infosRepository from "./infos-repository.js";

const infosBusiness = {
  find: async (params) => {
    const date = params.date ?? getDateTime().date;
    return await infosRepository.find({ ...params, date });
  },
  create: async (infos) => {
    const dateTime = getDateTime();
    const res = await infosRepository.create({ ...infos, ...dateTime });
    return res;
  },
  delete: async (id) => {
    return await infosRepository.delete(id);
  },
};

const getDateTime = () => {
  const dataHoraAtual = new Date();

  const data = dataHoraAtual.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  const [date, time] = data.split(",").map((elemento) => elemento.trim());

  return { date, time };
};

export default infosBusiness;

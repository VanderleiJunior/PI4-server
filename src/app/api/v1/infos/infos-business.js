import infosRepository from "./infos-repository.js";

const infosBusiness = {
  find: async (params) => {
    if (params.filter != "day" && params.filter != "hours") {
      return {
        data: "Filter parameter is only value = day our hours",
        status: 400,
      };
    } else if (
      params.filter == "day" &&
      (!params.initDate || !params.lastDate)
    ) {
      return {
        data: "For filter = day, initDate and lastDate is required",
        status: 400,
      };
    } else if (!params.equipmentSerialNumber) {
      return { data: "equipment SerialNumber is required", status: 400 };
    }
    const lastDate =
      params.filter == "hours" ? getDateTime().date : params.lastDate;
    const initDate =
      params.filter == "hours" ? getDateTime(true).date : params.initDate;

    return await infosRepository.find({ ...params, lastDate, initDate });
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

const getDateTime = (ontem = false) => {
  const dataHoraAtual = new Date();

  if (ontem) {
    dataHoraAtual.setDate(dataHoraAtual.getDate() - 1);
  }

  const data = dataHoraAtual.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  const [date, time] = data.split(",").map((elemento) => elemento.trim());

  return { date, time };
};

export default infosBusiness;

import { StatisticsSchema } from "./statistics-schema.js";

const statisticsRepository = {
  find: async (size) => {
    try {
      const res = {
        data: await StatisticsSchema.find()
          .sort({ date: -1 })
          .limit(size)
          .then((data) => {
            if (size <= 5) {
              return data;
            }
            const value1 = [];
            const value2 = [];
            const value3 = [];
            const value4 = [];
            const value5 = [];
            data.map((e, i) => {
              if (i < 30) {
                value1.push(e);
              } else if (i < 60) {
                value2.push(e);
              } else if (i < 90) {
                value3.push(e);
              } else if (i < 120) {
                value4.push(e);
              } else if (i < 150) {
                value5.push(e);
              }
            });
            return [value1, value2, value3, value4, value5];
          }),
      };
      return res;
    } catch (err) {
      console.error(err);
      return { data: err.message, status: 400 };
    }
  },
  create: async (statistics) => {
    try {
      const result = await StatisticsSchema.create(statistics);
      return { data: result };
    } catch (err) {
      console.error(err);
      if (err.code === 11000) {
        return { data: "date already exists.", status: 409 };
      } else {
        return { data: err.message, status: 400 };
      }
    }
  },
};

export default statisticsRepository;

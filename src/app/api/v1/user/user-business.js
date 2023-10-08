import userRepository from "./user-repository.js";

const userBusiness = {
  find: async (user) => {
    return userRepository.find(user);
  },
};

export default userBusiness;

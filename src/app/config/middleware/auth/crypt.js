import bcrypt from "bcrypt";

const crypt = {
  passwordHash: async (password) => {
    const salt = await bcrypt.genSalt(12);
    const passCrypted = await bcrypt.hash(password, salt);

    return passCrypted;
  },
  passwordCompare: async (pass, passCrypted) => {
    const check = await bcrypt.compare(pass, passCrypted);

    return check ? true : false;
  },
};

export default crypt;

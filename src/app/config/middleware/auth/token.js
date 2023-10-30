import jwt from "jsonwebtoken";

const secret = process.env.SECRET;
const tokenTime = process.env.TOKEN_TIME;

const token = {
  newToken: (id) => {
    const token = jwt.sign({ id: id }, secret, { expiresIn: tokenTime });
    return token;
  },
  validToken: async (token) => {
    const decodedToken = jwt.verify(
      token.replace(/^['"]|['"]$/g, ""),
      secret || ""
    );
    const id = decodedToken.id;
    return id;
  },
};

export default token;

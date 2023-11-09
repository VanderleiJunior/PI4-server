import jwt from "jsonwebtoken";

const secret = process.env.SECRET;
const tokenTime = process.env.TOKEN_TIME;

const token = {
  newToken: (id) => {
    const token = jwt.sign({ id: id }, secret);
    return token;
  },
  validToken: (token, res) => {
    try {
      const decodedToken = jwt.verify(
        token.replace(/^['"]|['"]$/g, ""),
        secret || ""
      );
      const id = decodedToken.id;
      return id;
    } catch (err) {
      console.error("Token invalid or expired");
      return res.status(401).send({ error: "Token invalid or expired" });
    }
  },
};

export default token;

import token from "./token.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: "No token provided" });
  }
  const parts = authHeader.split(" ");

  if (!parts.length === 2) {
    return res.status(401).send({ error: "Token error" });
  }
  const [scheme, codToken] = parts;
  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: "Token no formatted" });
  }

  const id = await token.validToken(codToken);
  if (!id) {
    return res.status(401).send({ error: "Token invalid or expired" });
  }
  req.userId = id;
  return next();
};

export default auth;

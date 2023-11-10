import token from "./token.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    console.error("No token provided");
    return res.status(401).send({ error: "No token provided" });
  }
  const parts = authHeader.split(" ");

  if (!parts.length === 2) {
    console.error("Token error");
    return res.status(401).send({ error: "Token error" });
  }
  const [scheme, codToken] = parts;
  if (!/^Bearer$/i.test(scheme)) {
    console.error("Token no formatted");
    return res.status(401).send({ error: "Token no formatted" });
  }

  const id = await token.validToken(codToken, res);
  if (!id) {
    console.error("Token invalid or expired");
    return res.status(401).send({ error: "Token invalid or expired" });
  }

  req.userId = id;
  return next();
};

export default auth;

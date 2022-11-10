const TOKEN_KEY = "pizza-app";
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token =
    req?.body?.token || req?.query?.token || req?.headers["authorization"];
  if (!token) {
    return res?.status(403).send("A token is required for authentication");
  }
  try {
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res?.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
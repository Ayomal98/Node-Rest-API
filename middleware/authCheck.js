const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.json({ message: "Invalid Authorization" });
  try {
    const user = await jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(user);
    next();
  } catch (error) {}
};

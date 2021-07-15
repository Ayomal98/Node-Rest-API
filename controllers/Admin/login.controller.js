require("dotenv").config();
const Admin = require("../../models/admin.model");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

module.exports = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await Admin.findOne({ email });
    if (result) {
      const hashedPassword = result.password;
      console.log(hashedPassword);

      const passwordMatched = await bcrypt.compare(password, hashedPassword);
      if (!passwordMatched) {
        return res.json({ message: "Password or email does not match" });
      } else {
        const token = await JWT.sign(email, process.env.TOKEN_SECRET);
        return res
          .status(200)
          .json({ token, message: "You have successfully login" });
      }
    } else {
      return res.json({ message: "No such user found" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

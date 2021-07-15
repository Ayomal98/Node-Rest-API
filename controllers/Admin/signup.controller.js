require("dotenv").config();
const Admin = require("../../models/admin.model");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const saltRounds = 10;

module.exports = async (req, res) => {
  const {
    userId,
    email,
    password,
    firstName,
    lastName,
    city,
    street,
    houseNumber,
    contactNumber,
  } = req.body;

  try {
    //to check whether an existing admin exists
    const result = await Admin.find({ email });
    if (result.length === 1) {
      console.log(result);
      res.status(400).json({ message: "User already exists" });
    } else {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const created = await Admin.create({
        _id: userId,
        email,
        password: hashedPassword,
        name: { firstName, lastName },
        address: { city, street, houseNumber },
        contactNumber,
      });
      const token = await JWT.sign(
        { userId, email },
        process.env.TOKEN_SECRET,
        { expiresIn: 3600 }
      );
      res.json({ token, message: "Successfully created Account" });
    }
  } catch (error) {
    console.log(error);
  }
};

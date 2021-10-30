const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    _id: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String },
    },
    address: {
      city: { type: String },
      street: { type: String, required: true },
      houseNumber: { type: Number, required: true },
    },
    contactNumber: { type: Number, required: true },
  },
  { _id: false }
);

const User= mongoose.model("Admin", userSchema);
module.exports = User;

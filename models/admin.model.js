const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    _id: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String },
    },
    address: {
      city: { type: String, required: true },
      street: { type: String, required: true },
      houseNumber: { type: Number, required: true },
    },
    contactNumber: { type: Number, required: true },
  },
  { _id: false }
);

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;

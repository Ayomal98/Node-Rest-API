require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");

const app = express();
const PORT = parseInt(process.env.PORT) || 3100;
const URI = process.env.MONGO_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productRoutes);

const connectDB = async () => {
  console.log(URI);
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.log("Error");
  }
};
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

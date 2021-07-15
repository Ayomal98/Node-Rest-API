const Product = require("../models/product.model");

module.exports = async (req, res) => {
  try {
    let result = await Product.find();
    if (result > 0) {
      await Product.deleteMany();
      res.status(200).json({ message: "All Products deleted successfully" });
    } else {
      res.status(204).json({ message: "No Products Left" });
    }
  } catch (error) {}
};

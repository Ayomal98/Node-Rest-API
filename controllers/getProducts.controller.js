const Product = require("../models/product.model");

module.exports = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length > 0) {
      res.status(200).json({ products });
    } else {
      res.status(204).json({ message: "There are No Products Available" });
    }
  } catch (error) {
    res.status(400).json({
      error: {
        message: error,
      },
    });
  }
};

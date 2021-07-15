const Product = require("../models/product.model");

module.exports = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length > 0) {
      res.json({ products });
    } else {
      res.json({ message: "There are No Products Available" });
    }
  } catch (error) {
    res.status(400).json({
      error: {
        message: error,
      },
    });
  }
};

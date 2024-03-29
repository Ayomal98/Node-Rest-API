const Product = require("../../models/product.model");

module.exports = async (req, res) => {
  console.log(req.body);
  const { name, quantity, type, price } = req.body;
  try {
    await Product.create({ name, quantity, type, price });
    res.status(201).json({ message: "Product Successfully added" });
    console.log("Product Created");
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: { message: "Product Failed to added" } });
  }
};

const Product = require("../../models/product.model");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, quantity, type, price } = req.body;
  try {
    await Product.findByIdAndUpdate(id, { name, quantity, type, price });
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

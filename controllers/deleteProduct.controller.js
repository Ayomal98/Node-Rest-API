const Product = require("../models/product.model");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Product.findByIdAndDelete(id);
    if (result) {
      res.json({ message: "Product deleted successfully" });
    } else {
      res.json({ message: "Product was not found" });
    }
  } catch (error) {
    res.json({ message: error });
  }
  res.json({ message: "hello" });
};

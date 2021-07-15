const Product = require("../../models/product.model");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Product.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "Product deleted successfully" });
    } else {
      res.status(204).json({ message: "Product was not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

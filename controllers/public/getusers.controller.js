const User = require("../../models/user.model");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Product.findById(id);
    console.log(result);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error });
  }
};

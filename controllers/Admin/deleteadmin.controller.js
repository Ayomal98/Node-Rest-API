const Admin = require("../../models/admin.model");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Admin.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "Your admin account has been deleted successfully" });
    } else {
      res.status(204).json({ message: "Error occured" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

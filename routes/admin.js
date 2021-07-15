const router = require("express").Router();

const signUp = require("../controllers/Admin/signup.controller");
const login = require("../controllers/Admin/login.controller");
const deleteProduct = require("../controllers/Admin/deleteproduct.controller");
const deleteProducts = require("../controllers/Admin/deleteallproducts.controller");
const updateProduct = require("../controllers/Admin/updateproduct.controller");
const addProduct = require("../controllers/Admin/addproduct.controller");
const authCheck = require("../middleware/authCheck");

router.post("/signup", signUp);
router.post("/login", login);
router.post("/addproduct", authCheck, addProduct);
router.delete("/deleteproduct/:id", authCheck, deleteProduct);
router.delete("/deleteProducts", authCheck, deleteProducts);
router.put("/updateProduct/:id", authCheck, updateProduct);

module.exports = router;

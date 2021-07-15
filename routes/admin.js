const router = require("express").Router();

const signUp = require("../controllers/Admin/signup.controller");
const login = require("../controllers/Admin/login.controller");
const deleteProduct = require("../controllers/Admin/deleteproduct.controller");
const deleteProducts = require("../controllers/Admin/deleteallproducts.controller");
const updateProduct = require("../controllers/Admin/updateproduct.controller");
const addProduct = require("../controllers/Admin/addproduct.controller");

router.post("/signup", signUp);
router.post("/login", login);
router.post("/addproduct", addProduct);
router.delete("/deleteproduct/:id", deleteProduct);
router.delete("/deleteProducts", deleteProducts);
router.put("/updateProduct/:id", updateProduct);

module.exports = router;

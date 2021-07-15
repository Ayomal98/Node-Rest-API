const express = require("express");
const router = express.Router();

const addProduct = require("../controllers/addproduct.controller");
const getAllProducts = require("../controllers/getproducts.controller");
const getProduct = require("../controllers/getproduct.controller");
const deleteProduct = require("../controllers/deleteproduct.controller");
const deleteProducts = require("../controllers/deleteallproducts.controller");
const updateProduct = require("../controllers/updateproduct.controller");

router.get("/", getAllProducts);
router.get(":id", getProduct);
router.post("/addproduct", addProduct);
router.delete("/deleteproduct/:id", deleteProduct);
router.delete("/deleteProducts", deleteProducts);
router.put("/updateProduct/:id", updateProduct);

module.exports = router;

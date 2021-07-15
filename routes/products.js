const express = require("express");
const router = express.Router();

const addProduct = require("../controllers/addProduct.controller");
const getAllProducts = require("../controllers/getProducts.controller");
const getProduct = require("../controllers/getProduct.controller");
const deleteProduct = require("../controllers/deleteProduct.controller");
const deleteProducts = require("../controllers/deleteAllProducts.controller");
const updateProduct = require("../controllers/updateProduct.controller");

router.get("/", getAllProducts);
router.get(":id", getProduct);
router.post("/addproduct", addProduct);
router.delete("/deleteproduct/:id", deleteProduct);
router.delete("/deleteProducts", deleteProducts);
router.put("/updateProduct/:id", updateProduct);

module.exports = router;

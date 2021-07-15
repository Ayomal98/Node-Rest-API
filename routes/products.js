const express = require("express");
const router = express.Router();

const addProduct = require("../controllers/addProdcuts.controller");
const getAllProducts = require("../controllers/getProducts.controller");
const deleteProduct = require("../controllers/deleteProduct.controller");

router.get("/", getAllProducts);
router.post("/addproduct", addProduct);
router.delete("/deleteproduct/:id", deleteProduct);

module.exports = router;

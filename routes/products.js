const express = require("express");
const router = express.Router();

const addProduct = require("../controllers/addProduct.controller");
const getAllProducts = require("../controllers/getProducts.controller");
const getProduct = require("../controllers/getProduct.controller");
const deleteProduct = require("../controllers/deleteProduct.controller");
const deleteProducts = require("../controllers/deleteProducts.controller");

router.get("/", getAllProducts);
router.get(":id", getProduct);
router.post("/addproduct", addProduct);
router.delete("/deleteproduct/:id", deleteProduct);
router.delete("/deleteProducts", deleteProducts);

module.exports = router;

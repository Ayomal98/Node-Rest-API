const express = require("express");
const router = express.Router();

const addProduct = require("../controllers/addProdcuts.controller");
const getAllProducts = require("../controllers/getProducts.controller");

router.get("/", getAllProducts);

router.post("/addproduct", addProduct);

module.exports = router;

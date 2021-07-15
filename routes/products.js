const express = require("express");
const router = express.Router();

const getAllProducts = require("../controllers/public/getproducts.controller");
const getProduct = require("../controllers/public/getproduct.controller");

router.get("/", getAllProducts);
router.get(":id", getProduct);

module.exports = router;

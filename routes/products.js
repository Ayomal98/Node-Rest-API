const express = require("express");
const router = express.Router();

const addProdcut = require("../controllers/addProdcuts.controller");

router.get("/", async (req, res) => {
  console.log("get product");
});

router.post("/addproduct", addProdcut);

module.exports = router;

const router = require("express").Router();

const signUp = require("../controllers/Admin/signup.controller");

router.post("/signup", signUp);
module.exports = router;

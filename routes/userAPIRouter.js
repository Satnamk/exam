const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/userSSRController");

console.log(signup); // This should output the function definition if correctly imported

router.post("/signup", signup);

module.exports = router;

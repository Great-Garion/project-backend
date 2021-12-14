const express = require("express");
const router = express.Router();

const { addLogin, addRegis } = require("../controllers/authController");

router.post("/regis", addRegis);
router.post("/login", addLogin);

module.exports = router;

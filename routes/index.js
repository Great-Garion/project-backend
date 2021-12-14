const express = require("express");
const router = express.Router();

//from user.routes
const authRouter = require("./auth.routers")


router.get("/", (req, res) => {
  res.json("auth from express");
});


router.use("/auth", authRouter)

module.exports = router;
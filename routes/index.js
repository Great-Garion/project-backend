const express = require("express");
const router = express.Router();

const authRouter = require("./auth.routers");
const userRouter = require("./userRouter");
const sellerRouter = require("./sellerRouter");
const productRouter = require("./productRouter");
const consumerRouter = require("./consumerRouter");
const transaksiRouter = require("./transaksiRouter");

router.get("/", (req, res) => {
  res.json("Garion Mall");
});

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/seller", sellerRouter);
router.use("/product", productRouter);
router.use("/consumer", consumerRouter);
router.usr("/transaksi", transaksiRouter);

module.exports = router;

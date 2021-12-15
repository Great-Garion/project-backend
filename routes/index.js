const express = require("express");
const router = express.Router();

const authRouter = require("./auth.routers");
const userRouter = require("./userRouter");
const sellerRouter = require("./sellerRouter");
const productRouter = require("./productRouter");
const consumerRouter = require("./consumerRouter");
const transaksiRouter = require("./transaksiRouter");
const validateToken = require("../middleware/middleware");

router.get("/", (req, res) => {
  res.json("Garion Mall");
});
router.use("/auth", authRouter);

router.use(validateToken)

router.use("/user", userRouter);
router.use("/seller", sellerRouter);
router.use("/product", productRouter);
router.use("/consumer", consumerRouter);
router.use("/transaksi", transaksiRouter);

module.exports = router;

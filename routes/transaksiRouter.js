const express = require("express");
const router = express.Router();

const TJB = require("../models/transaksi");

router.get("/", async (req, res) => {
  try {
    const JB = await TJB.find({}, "-__v");

    res.json(JB);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Internam Server Error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const JB = await TJB.findById(id);

    res.json(JB);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    let newTJB = req.body;
    await TJB.create(newTJB);

    res.json("success");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: err.message || "Internal Server Error",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await TJB.findByIdAndDelete(id);

    res.json("success");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const update = {
      consumer: req.body.consumer,
      product: req.body.product,
      total_product: req.body.total_product,
      total_price: req.body.total_price,
    };

    await TJB.findByIdAndUpdate(id, update);
    res.json("success");
  } catch (error) {
    res.status(500).json({
      message: err.message || "Internal Server Error",
    });
  }
});

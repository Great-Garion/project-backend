const express = require("express");
const router = express.Router();

const consumers = require("../models/consumer");

router.get("/", async (req, res) => {
  try {
    const consum = await consumers.find({}, "-__v").populate("user");

    res.json(consum);
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
    const consum = await consumers.findById(id);

    res.json(consum);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    let dataConsum = req.body;
    await consumers.create(dataConsum);

    res.json("success")
    
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
    await consumers.findByIdAndDelete(id);

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
      user: req.body.user,
    };

    await consumers.findByIdAndUpdate(id, update);
    res.json("success");
  } catch (error) {
    res.status(500).json({
      message: err.message || "Internal Server Error",
    });
  }
});

module.exports = router;
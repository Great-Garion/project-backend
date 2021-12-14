const express = require("express");
const users = require("../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const Users = await users.find({}, "-password -__v");

    res.json(Users);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userByID = await users.findById(id, "-password -__v");

    res.json(userByID);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    let postUser = req.body;
    await users.create(postUser);

    res.json("user has been created");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await users.findByIdAndDelete(id);

    res.json("successfully delete user");
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
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      isAdmin: req.body.isAdmin,
    };

    await users.findByIdAndUpdate(id, update);

    res.json("successfully updated user");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
});

module.exports = router;

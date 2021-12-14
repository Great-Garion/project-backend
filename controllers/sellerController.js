const sellers = require("../models/seller");

module.exports = {
  getAllSeller: async (req, res) => {
    try {
      const dataSeller = await sellers.find({}, "-__v").populate("user");

      res.json(dataSeller);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internam Server Error",
      });
    }
  },

  getSellerByID: async (req, res) => {
    try {
      const { id } = req.params;
      const dataSeller = await sellers
        .findById(id, "-password -__v")
        .populate("user");

      res.json(dataSeller);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  addNewSeller: async (req, res) => {
    try {
      let newSeller = req.body;
      await sellers.create(newSeller);
  
      res.json("success");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },

  deleteSeller: async (req, res) => {
    try {
      const { id } = req.params;
      await sellers.findByIdAndDelete(id);
  
      res.json("success");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  editSeller: async (req, res) => {
    try {
      const { id } = req.params;
      const update = {
        user: req.body.user,
      };
  
      await sellers.findByIdAndUpdate(id, update);
      res.json("success");
    } catch (error) {
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  }
};

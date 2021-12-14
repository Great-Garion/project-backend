const produk = require("../models/product");

module.exports = {
  getAllProduct: async (req, res) => {
    try {
      const DP = await produk.find({}, "-__v");

      res.json(DP);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internam Server Error",
      });
    }
  },

  getProductByID: async (req, res) => {
    try {
      const { id } = req.params;
      const DB = await produk.findById(id);

      res.json(DB);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  addNewProduct: async (req, res) => {
    try {
      const newProduct = req.body;
      await produk.create(newProduct);

      res.json("success");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      await produk.findByIdAndDelete(id);

      res.json("success");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  editProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const update = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        seller: produk.seller,
      };

      await produk.findByIdAndUpdate(id, update);

      res.json("success");
    } catch (error) {
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },
};

const consumers = require("../models/consumer");

module.exports = {
  getAllConsum: async (req, res) => {
    try {
      const consum = await consumers.find({}, "-__v").populate("user");

      res.json(consum);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internam Server Error",
      });
    }
  },

  getConsumByID: async (req, res) => {
    try {
      const { id } = req.params;
      const consum = await consumers.findById(id).populate("user");

      res.json(consum);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  addNewConsum: async (req, res) => {
    try {
      let dataConsum = req.body;
      await consumers.create(dataConsum);

      res.json("success");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },

  deleteConsum: async (req, res) => {
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
  },

  editConsum: async (req, res) => {
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
  },
};

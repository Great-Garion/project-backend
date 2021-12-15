const express = require("express");
const router = express.Router();

const {
  getAllTJB,
  getTJBByID,
  addNewTJB,
  deleteTJB,
  editTJB,
} = require("../controllers/transaksiController");
router.get("/", getAllTJB);

router.get("/:id", getTJBByID);

router.post("/", addNewTJB);

router.delete("/:id", deleteTJB);

router.put("/:id", editTJB);

module.exports = router;

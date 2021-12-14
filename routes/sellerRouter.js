const express = require("express");
const router = express.Router();

const {
  getAllSeller,
  getSellerByID,
  addNewSeller,
  deleteSeller,
  editSeller,
} = require("../controllers/sellerController");
router.get("/", getAllSeller);

router.get("/:id", getSellerByID);

router.post("/", addNewSeller);

router.delete("/:id", deleteSeller);

router.put("/:id", editSeller);

module.exports = router;

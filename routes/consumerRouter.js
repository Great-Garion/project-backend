const express = require("express");
const router = express.Router();

const {
  getAllConsum,
  getConsumByID,
  addNewConsum,
  deleteConsum,
  editConsum,
} = require("../controllers/consumerController");
router.get("/", getAllConsum);

router.get("/:id", getConsumByID);

router.post("/", addNewConsum);

router.delete("/:id", deleteConsum);

router.put("/:id", editConsum);

module.exports = router;

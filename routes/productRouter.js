const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  getProductByID,
  addNewProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/productController");
router.get("/", getAllProduct);

router.get("/:id", getProductByID);

router.post("/", addNewProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", editProduct);

module.exports = router;

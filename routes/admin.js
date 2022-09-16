const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET

// /admin/products => GET
router.get("/add-product", adminController.getAddProduct);

router.get("/products", adminController.getProducts);
// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);
router.get("/edit-product/:productId", adminController.getEditProduct);
router.post("/edit-product", adminController.postEditProduct)

module.exports = router;
import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} from "../controllers/product.js";

const router = express.Router();

// CREATE
router.post("/", createProduct);

// UPDATE
router.put("/:id", updateProduct);

// DELETE
router.delete("/:id", deleteProduct);

// GET
router.get("/product/:id", getProduct);

//GET ALL
router.get("/", getAllProduct);

export default router;

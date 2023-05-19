import express from "express";

import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrder,
  updateOrder,
} from "../controllers/orders.js";

const ordersRouter = express.Router();

// CREATE
ordersRouter.post("/create", createOrder);

// UPDATE
ordersRouter.put("/:id", updateOrder);

// DELETE
ordersRouter.delete("/:id", deleteOrder);

// GET
ordersRouter.get("/:id", getOrder);

//GET ALL
ordersRouter.get("/", getAllOrders);

export default ordersRouter;

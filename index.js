import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import router from "./routes/products.js";
import ordersRouter from "./routes/orders.js";

const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connected to mongodb");
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});

mongoose.connection.on("connect", () => {
  console.log("mongodb connected");
});

// middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", router);
app.use("/api/order", ordersRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: errorStatus.stack,
  });
});

app.get("/", (req, res) => {
  res.send("Organic-Valley-Server is running");
});

app.listen(5000, () => {
  connect();
  console.log("Connected to backend!");
});

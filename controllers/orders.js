import Orders from "../models/Orders.js";
import Product from "../models/Product.js";

export const getAllOrders = async (req, res, next) => {
  const { email } = req.query;
  try {
    const orders = await Orders.find({ email }).lean();
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

export const getOrder = async (req, res, next) => {
  try {
    const order = await Orders.findById(req.params.id).lean();
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};
export const createOrder = async (req, res, next) => {
  try {
    const order = await Orders.create(req.body).lean();
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const order = await Product.findByIdAndUpdate(
      id,
      req.body,

      { new: true }
    ).lean();
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    await Orders.findByIdAndDelete(req.params.id).lean();
    res.status(200).json("Order has been deleted.");
  } catch (err) {
    next(err);
  }
};

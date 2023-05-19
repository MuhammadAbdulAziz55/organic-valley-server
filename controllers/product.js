import Product from "../models/Product.js";

export const createProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save().lean();
    res.status(200).json(savedProduct);
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).lean();
    res.status(200).json(updateProduct);
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id).lean();
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).lean();
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

export const getAllProduct = async (req, res, next) => {
  try {
    const products = await Product.find().lean();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

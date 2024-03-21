const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  throw new Error("testing");
  res.status(200).json({ message: "product testing" });
};

module.exports = {
  getAllProducts,
};

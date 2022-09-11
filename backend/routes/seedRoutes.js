import Product from "../models/productModel.js";
import express from "express";
import data from "../data.js";
import User from "../models/userModels.js";

const seedRouter = express.Router();
seedRouter.get("/", async (req, res) => {
  await Product.remove({});
  const CreateProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ CreateProducts, createdUsers });
});
export default seedRouter;

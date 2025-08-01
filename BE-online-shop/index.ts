import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { ProductsRouter } from "./router/product-router";
import { OrderRouter } from "./router/order-router";

const app = express();
app.use(express.json());
app.use(cors());

const databaseConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://altsermaa:5EFHkAOwz1Rt3jNQ@onlineshop.q6s0pbf.mongodb.net/onlineshop"
    );
  } catch (error) {
    console.log(error);
  }
};

databaseConnect();

app.use(ProductsRouter);
app.use(OrderRouter);

app.listen(8000, () => {
    console.log("running on https://localhost:8000");
  });
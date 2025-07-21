import { Router } from "express";
import { createProduct } from "../controller/product/create-product";
import { createCategory } from "../controller/product/create-category";
import { getAllProducts } from "../controller/product/get-all-products";

export const ProductsRouter = Router();

ProductsRouter.post("/createProduct", createProduct);
ProductsRouter.post("/createCategory", createCategory);
ProductsRouter.get("/getAllProducts", getAllProducts);
// ProductsRouter.delete("/deleteProduct", deleteProduct);

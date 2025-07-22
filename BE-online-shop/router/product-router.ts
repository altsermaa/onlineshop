import { Router } from "express";
import { createProduct } from "../controller/product/create-product";
import { createCategory } from "../controller/product/create-category";
import { getAllProducts } from "../controller/product/get-all-products";
import { getSingleProduct } from "../controller/product/get-single-product";

export const ProductsRouter = Router();

ProductsRouter.post("/createProduct", createProduct);
ProductsRouter.post("/createCategory", createCategory);
ProductsRouter.get("/getAllProducts", getAllProducts);
ProductsRouter.get("/getSingleProduct/:id", getSingleProduct);

// ProductsRouter.delete("/deleteProduct", deleteProduct);

import { Router } from "express";
import { createOrder } from "../controller/order/create-order";
import { getAllOrders } from "../controller/order/get-all-orders";


export const OrderRouter = Router();

OrderRouter.post("/createOrder", createOrder);
OrderRouter.get("/getAllOrders", getAllOrders);
// ProductsRouter.delete("/deleteProduct", deleteProduct);

import { Request, Response } from "express";
import { ProductsModel } from "../../model/product.model";

export const getSingleProduct = async (
  request: Request,
  response: Response
) => {
  const { _id } = request.body;

  try {
    const productInfo = await ProductsModel.findById(
      { _id }
    );
    response.status(200).send({message: "Fetched product data successfully", fetchedData: productInfo});
  } catch (err) {
    response.status(400).send({ message: "Error in fetching data", err });
  }
};

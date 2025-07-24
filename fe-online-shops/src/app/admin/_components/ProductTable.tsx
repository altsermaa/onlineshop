"use client";
import { Product } from "@/app/_components/ShowCards";
import axios from "axios";
import { useEffect, useState } from "react";

type PropsType = {
  products: Record<string, Product[]>;
};

export default function ProductTable() {
  const [products, setProducts] = useState<Record<string, Product[]>>();

 useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios.get(
        "http://localhost:8000/getAllProducts",
       
      );
      setProducts(response?.data?.products);
    };
    getAllProducts();
  }, []);

  console.log(products);
    if (!products) return <div>Loading...</div>;
    const keys = Object.keys(products)



  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Products</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Add Product</button>
      </div>
      <table className="w-full border text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
            <th className="p-2">Category</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            keys.map((el, index) => {
              return (
                <div key={index}>
                  <h2 className="mb-14 text-3xl text-white font-black">{el}</h2>
                  <div>
                    {products[el].length === 0 ? (
            <tr><td colSpan={4} className="p-4 text-center">No products yet.</td></tr>
          ) : (
            products[el].map((product, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{product.productName}</td>
                <td className="p-2">{product.price}</td>
                <td className="p-2">{product.categoryId}</td>
                <td className="p-2 flex gap-2">
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                  <button className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))
          )}
                  </div>
                </div>
              )
            })
          }
          
        </tbody>
      </table>
    </div>
  );
} 
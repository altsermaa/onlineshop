
import { CircleMinus, CirclePlus, CircleX } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CartItemType } from "./CartProvider";

export type ProductTypeProps = {
  _id: string;
  productName: string;
  description: string;
  price: number;
  image: string;
  addcount: number;
  onRemove: () => void;
  setCart: Dispatch<SetStateAction<CartItemType[]>>;
};

export const OrderedItem = ({
  productName,
  description,
  price,
  image,
  addcount,
  _id,
  onRemove,
}: ProductTypeProps) => {
  const [qty, setQty] = useState<number>(addcount);
const storageKey = "productCart";

  const minusQty = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
      const existingData = localStorage.getItem(storageKey);
      const cartItems: CartItemType[] = existingData
        ? JSON.parse(existingData)
        : [];
      const newProducts = cartItems.map((product) => {
        if (product._id === _id) {
          return { ...product, addcount: product.addcount - 1 };
        } else {
          return product;
      }
    });
    localStorage.setItem(storageKey, JSON.stringify(newProducts));
    }
  };

  const plusQty = () => {
    setQty((prev) => prev + 1);
    const existingData = localStorage.getItem(storageKey);
    const cartItems: CartItemType[] = existingData
      ? JSON.parse(existingData)
      : [];
    const newProducts = cartItems.map((product) => {
      if (product._id === _id) {
        return { ...product, addcount: product.addcount + 1 };
      } else {
        return product;
      }
    });
    localStorage.setItem(storageKey, JSON.stringify(newProducts));
  };

  const deleteProduct = () => {
    const storageKey = "productCart";

    const existingData = localStorage.getItem(storageKey);
    const cartItems: CartItemType[] = existingData
      ? JSON.parse(existingData)
      : [];

    const newProducts = cartItems.filter((product) => product._id !== _id);
    localStorage.setItem(storageKey, JSON.stringify(newProducts));

    onRemove();
  };



  return (
    <div>
      <div className="flex w-[439px] h-[120px] gap-2 ">
        <div className="h-full w-[124px] relative">
          <Image
            src={image}
            fill
            objectFit="cover"
            alt="productImage"
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex h-full ">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#FD543F] text-base">{productName}</h3>
              <p className="text-xs">
                {description}
              </p>
            </div>
            <div onClick={deleteProduct}>
              <CircleX className="text-[#FD543F]" />
            </div>
          </div>

          <div className="flex flex-row-reverse justify-between">
            <p className="text-base">{price * qty}</p>
            <div className="flex h-full gap-2 text-lg">
              <button type="button" onClick={minusQty}>
                <CircleMinus className="border-none" />
              </button>

              <p>{qty}</p>
              <button type="button" onClick={plusQty}>
                <CirclePlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

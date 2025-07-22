"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { SkeletonDetails } from "./Skeleton";
import { Dot, Play, Plus, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const DetailPageShow = ( ) => {


  const [loading, setLoading] = useState<Boolean>(false);
  const handleLoading = () => {
    setLoading(!loading);
  };

  return loading ? (
    <SkeletonDetails />
  ) : (
    <div className="flex flex-col px-5 my-8 mx-auto lg:w-[1080px] lg:mt-14 lg:mb-28 lg:p-0">
      <div className="flex justify-between gap-10">
        <div className="flex-2/3">
          <h1 className="text-2xl font-bold">ProductName</h1>
          <div className="flex">
            <p>Price</p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start">
          <div className="h-[16px]"></div>
          <div className="flex items-center gap-2.5">
            <Star className="text-[#f6e238] fill-yellow-300" />
          </div>
        </div>
      </div>
      <div className="relative w-screen h-[211px] mt-4 mb-8 lg:hidden">
        <Image
          src="/dress.jpeg"
          fill
          objectFit="contain"
          alt="productImage"
        />
        <div className="absolute top-3/4 left-3 z-10 flex items-center gap-3">
          <Button className="bg-white rounded-4xl text-black" size="icon">
            {/* <Plus {id={_id}} /> */}
          </Button>
        </div>
      </div>
      <div className="flex gap-8 lg:hidden">
        <div className="flex-2/3">
          <div className="flex flex-col gap-5">
            <p className="text-base">Product description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

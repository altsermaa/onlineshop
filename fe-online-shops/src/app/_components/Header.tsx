import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, CircleUserRound, MenuIcon, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Order } from "./Order";

export const Header = () => {
    return  <div className="w-full px-4 lg:px-10 py-3 border-b">
      <div className="flex justify-between items-center h-[59px] w-full lg:w-[930px] m-auto lg:py-3">
        <div className="flex items-center">
          
            <div
              className="flex gap-2 font-black items-center " 
            >
              <MenuIcon />
              <Link href={`/`}>
                <Image src="/logoNoText.png" width={80} height={80} alt="logo"/>
              </Link>

            </div>
         
        </div>

        <div className="flex gap-3 lg:w-[723px] lg:justify-between">
          <div className="flex gap-3 items-center">
            <div className="relative flex items-center">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hidden lg:block"
                  size={20}
                />
              <Button
                // onClick={handleMobileSearch}
                className="w-[36px] lg:hidden"
                variant="outline"
              >
                <Search />
              </Button>
              <Input
                  type="text"
                  placeholder="Search"
                //   value={search}
                //   onChange={handleSearch}
                  className="hidden lg:block lg:pl-10 w-fit lg:w-[379px]"
                />
            </div>
          </div>
          <div className="flex items-center gap-4">
              <Order />
              <CircleUserRound className="hidden lg:block"/>
          </div>
        </div>
      </div>
  </div>
}
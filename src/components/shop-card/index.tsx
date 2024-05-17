import Button from "@/components/button";
import Image from "next/image";
import { ShopItem } from "@/declarations";
import placeholder from '../../../public/imgs/movie-preview.png'

export default function ShopCard(shopItem: ShopItem): JSX.Element {
  return (
    <div className="shop-card">
      <Image alt='' className="w-full" src={placeholder}></Image>
      <div className="shop-item-info bg-[#333333] p-2 z-[2] w-[90%] left-[5%] top-[-20px] relative text-center px-4 py-3">
        <h4>{shopItem.title}</h4>
        <h6 className="text-[var(--theme-yellow-color)]  mt-1 mb-2">${shopItem.price}</h6>
        <div className="text-center mt-2 mb-2">
          {shopItem.in_cart ? (
            <div className="flex quantity-selector shadow border border-[var(--theme-yellow-color)]">
              <button className="py-[7px] w-full">-</button>
              <span className="py-[7px] w-full border-x border-l-[var(--theme-yellow-color)] border-r-[var(--theme-yellow-color)]">1</span>
              <button className="py-[7px] w-full">+</button>
            </div>
          ) : (
            <Button text="Add to cart" />
          )}
        </div>
      </div>
    </div>
  );
}

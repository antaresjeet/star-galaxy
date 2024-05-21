import Image from "next/image";
import { ShopItem } from "@/declarations";
import CartHandle from "../cart-handle";

export default function ShopCard(shopItem: ShopItem): JSX.Element {
  return (
    <div className="shop-card">
      <Image alt={shopItem.name} className="w-full h-full min-h-[350px] max-h-[350px]" src={shopItem.image} placeholder="blur" draggable="false"></Image>
      <div className="shop-item-info bg-[#333333] p-2 z-[2] w-[90%] left-[5%] top-[-20px] relative text-center px-4 py-3">
        <h4>{shopItem.name}</h4>
        <h6 className="text-[var(--theme-yellow-color)]  mt-1 mb-2">${shopItem.price}</h6>
        <CartHandle {...shopItem} />
      </div>
    </div>
  );
}

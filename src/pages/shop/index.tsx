import ShopCard from "@/components/shop-card";
import { shopItems } from "@/constants";

export default function Shop(): JSX.Element {
  return (
    <section className="shop-star-container container mx-auto px-16 py-8">
      <div className="text-center">
        <h2 className="text-4xl mb-4">Navigate the Cosmos</h2>
        <p className="text-base">Unearth Rare Finds and Galactic Wonders Alike</p>
      </div>
      <div className="shop-star-war mt-12 grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {shopItems.map((shopItem => (
          <ShopCard {...shopItem} key={shopItem.id}></ShopCard>
        )))}
      </div>
    </section>
  );
}

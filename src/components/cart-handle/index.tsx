import Button from "@/components/button";
import { Cart, QuantityUpdateButtonProps, ShopItem } from "@/declarations";
import { cartAtom } from "@/jotai";
import { motion } from "framer-motion";
import { useAtom } from "jotai";

export default function CartHandle(shopItem: ShopItem): JSX.Element {
  const [cart, setCart] = useAtom(cartAtom);

  const cartItemIndex = cart.findIndex(cartItem => cartItem.shopItem.id === shopItem.id);

  const handleAddToCart = () => {
    setCart([...cart, { shopItem: shopItem, quantity: 1 }]);
  }

  const updateQuantity = (type: '+' | '-') => {
    if (cartItemIndex === -1) return;

    const cartCopy: Cart[] = [...cart];
    if (type === '+' && shopItem.availableQuantity > cart[cartItemIndex].quantity) {
      cartCopy[cartItemIndex].quantity += 1;
    } else if (type === '-') {
      if (cart[cartItemIndex].quantity > 1) {
        cartCopy[cartItemIndex].quantity -= 1;
      } else {
        cartCopy.splice(cartItemIndex, 1)
      }
    }

    setCart(cartCopy)
  }

  const QuantityUpdateButton = ({ sign, isDisabled }: QuantityUpdateButtonProps) => {
    return <motion.button className={`py-[7px] w-full ${isDisabled ? 'opacity-20' : ''}`} onClick={() => updateQuantity(sign)} whileTap={{ scale: isDisabled ? 1 : 0.9 }} disabled={isDisabled}>{sign}</motion.button>
  }

  return (
    <div className="text-center mt-2 mb-2">
      {cartItemIndex !== -1 ? (
        <div className="flex quantity-selector shadow border border-[var(--theme-yellow-color)]">
          <QuantityUpdateButton sign='-' isDisabled={false} />
          <span className="py-[7px] w-full border-x border-l-[var(--theme-yellow-color)] border-r-[var(--theme-yellow-color)]">{cart[cartItemIndex].quantity}</span>
          <QuantityUpdateButton sign='+' isDisabled={cart[cartItemIndex].quantity >= shopItem.availableQuantity} />
        </div>
      ) : (
        <Button text="Add to cart" clickHandler={() => handleAddToCart()} />
      )}
    </div>
  );
}

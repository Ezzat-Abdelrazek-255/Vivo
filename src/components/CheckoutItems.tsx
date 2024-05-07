"use client";

import CartItem from "./CartItem";
import { useShop } from "./providers/ShopProvider";

const CheckoutItems = () => {
  const shop = useShop();
  return (
    <div className="grid  gap-4">
      {shop.state.cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CheckoutItems;

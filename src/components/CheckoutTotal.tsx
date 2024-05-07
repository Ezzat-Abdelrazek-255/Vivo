"use client";
import React from "react";
import { useShop } from "./providers/ShopProvider";

const CheckoutTotal = () => {
  const shop = useShop();
  return (
    <p className="text-center text-2xl font-bold underline">
      Total:{" "}
      {shop.state.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      )}
      $
    </p>
  );
};

export default CheckoutTotal;

"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { useShop } from "./providers/ShopProvider";

const CartItem = ({ item }: { item: Item }) => {
  const shop = useShop();

  const handleIncreaseQuantity = (item: Item) => {
    shop.increaseQuantity(item.id);
  };
  const handleDecreaseQuantity = (item: Item) => {
    if (item.quantity === 1) return shop.removeItem(item.id);
    shop.decreaseQuantity(item.id);
  };

  return (
    <article className="flex flex-col items-center gap-4 py-4">
      <div>
        <Image src={item.thumbnail} alt={item.title} width={200} height={200} />
      </div>
      <div className="flex flex-col gap-2 items-center w-full">
        <h2 className="font-bold uppercase">{item.title}</h2>
        <div className="flex items-center justify-evenly w-full">
          <Button
            variant="outline"
            aria-label="Decrease quantity"
            onClick={() => handleDecreaseQuantity(item)}
          >
            <Minus />
          </Button>
          <div className="flex flex-col items-center">
            <span className="whitespace-nowrap">
              {item.quantity} x ${item.price}
            </span>
            <span className="font-bold text-xl">
              ${item.price * item.quantity}
            </span>
          </div>
          <Button
            variant="outline"
            aria-label="Increase quantity"
            onClick={() => handleIncreaseQuantity(item)}
          >
            <Plus />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;

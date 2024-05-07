"use client";
import { ShoppingCart } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useShop } from "./providers/ShopProvider";
import CartItem from "./CartItem";

const Cart = () => {
  const shop = useShop();

  return (
    <Sheet
      open={shop.state.isOpen}
      onOpenChange={(open) => {
        if (!open) shop.closeCart();
        else shop.openCart();
      }}
    >
      <SheetTrigger aria-label="Cart" className="relative">
        {shop.state.cart.length > 0 && (
          <p className="absolute text-sm -top-1 rounded-full w-4 h-4 grid place-content-center bg-red-600 -right-2">
            {shop.state.cart.length}
          </p>
        )}
        <ShoppingCart />
      </SheetTrigger>
      <SheetContent className="overflow-scroll">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>
            You have {shop.state.cart.length} Items in your cart
          </SheetDescription>
        </SheetHeader>
        <ul className="my-8 flex flex-col divide-y-2">
          {shop.state.cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;

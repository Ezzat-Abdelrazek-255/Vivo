"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { useShop } from "./providers/ShopProvider";

const CheckoutBtn = ({ isSignedIn }: { isSignedIn: boolean }) => {
  const router = useRouter();
  const shop = useShop();
  console.log(isSignedIn);

  const handleClick = () => {
    if (shop.state.cart.length === 0) {
      return router.push("/");
    }
    if (!isSignedIn) router.push("/sign-in");
  };
  return (
    <Button onClick={handleClick} className="font-bold w-1/3 py-6">
      Checkout
    </Button>
  );
};

export default CheckoutBtn;

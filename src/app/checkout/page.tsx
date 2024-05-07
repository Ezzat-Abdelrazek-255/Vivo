import CheckoutBtn from "@/components/CheckoutBtn";
import CheckoutItems from "@/components/CheckoutItems";
import CheckoutTotal from "@/components/CheckoutTotal";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const CheckoutPage = async () => {
  const user = await currentUser();

  return (
    <main className="max-w-[1920px] mx-auto">
      <h2 className="font-bold text-2xl">Shopping Cart</h2>

      <div className="flex flex-col gap-16 items-center">
        <CheckoutItems />
        <CheckoutTotal />
        <CheckoutBtn isSignedIn={!!user} />
      </div>
    </main>
  );
};

export default CheckoutPage;

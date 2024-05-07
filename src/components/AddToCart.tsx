"use client";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useShop } from "./providers/ShopProvider";

interface AddToCartProps {
  product: Product;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const shop = useShop();

  const handleClick = () => {
    if (shop.state.cart.length === 0) shop.openCart();
    if (shop.state.cart.find((item) => item.id === product.id))
      return shop.increaseQuantity(product.id);
    shop.addItem({ ...product, quantity: 1 });
  };

  return (
    <Button aria-label="Add to cart" onClick={handleClick}>
      <ShoppingCart />
    </Button>
  );
};

export default AddToCart;

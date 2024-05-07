import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import AddToCart from "./AddToCart";

type ProductCardPropsType = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardPropsType) => {
  return (
    <Card className="max-h-96 h-96  grid grid-rows-6 overflow-hidden">
      <Link
        href={`/products/${product.id}`}
        className="row-span-5 overflow-hidden grid grid-rows-5"
      >
        <CardContent className="p-0 row-span-3">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
            className="object-center w-full h-full"
          />
        </CardContent>
        <CardHeader className="relative row-span-2 overflow-hidden">
          <CardTitle className="xl:text-xl lg:text-lg">
            {product.title}
          </CardTitle>
          <CardDescription className="ellipsis ">
            {product.description}
          </CardDescription>
        </CardHeader>
      </Link>
      <CardFooter className="flex justify-between mt-4">
        <p className="font-bold">{product.price}$</p>
        <AddToCart product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

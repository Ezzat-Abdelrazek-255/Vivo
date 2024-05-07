"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const ProductDisplay = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = React.useState(product.images[0]);

  return (
    <div className="grid grid-cols-8 grid-row-8 gap-x-4 gap-y-8 col-span-2">
      <div className="xl:col-span-7 col-span-8 row-span-5 h-[600px]">
        <Image
          className="rounded-md w-full h-full object-cover"
          src={activeImage}
          alt={product.title}
          width={2000}
          height={2000}
        ></Image>
      </div>
      <div className="xl:col-span-1 col-span-8 flex xl:flex-col lg:flex-row  gap-2">
        {product.images.map((image) => (
          <Button
            onClick={() => setActiveImage(image)}
            key={image}
            className={`xl:h-20 lg:h-16 md:h-12 hover:bg-transparent bg-transparent hover:scale-75 transition-all ${
              activeImage === image ? "scale-75 shadow-md shadow-primary " : ""
            }`}
          >
            <Image
              className="h-full w-full object-cover rounded-sm"
              src={image}
              alt={product.title}
              width={400}
              height={400}
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;

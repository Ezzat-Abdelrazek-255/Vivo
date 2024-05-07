import ProductCard from "@/components/ProductCard";
import React from "react";

const WeeklyTopSelling = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=4&skip=50");
  const products: { products: Product[] } = await res.json();

  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-center text-4xl font-bold">Weekly Top Selling</h2>
      <div className=" grid lg:grid-cols-4 gap-4 md:grid-cols-2">
        {products.products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default WeeklyTopSelling;

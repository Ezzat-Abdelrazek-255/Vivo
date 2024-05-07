import ProductCard from "@/components/ProductCard";
import React from "react";

const FeaturedProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=20");
  const products: { products: Product[] } = await res.json();

  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-center text-4xl font-bold">Featured Products</h2>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 xl:grid-cols-5 ">
        {products.products.map((product) => (
          <article key={product.id}>
            <ProductCard product={product} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

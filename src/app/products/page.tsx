"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`https://dummyjson.com/products?q=${search}`);
      const data = await res.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, [search]);

  return (
    <main className="flex flex-col gap-8">
      <h2>You Searched for: {search}</h2>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 xl:grid-cols-5 ">
        {products.map((product) => (
          <article key={product.id}>
            <ProductCard product={product} />
          </article>
        ))}
      </div>
    </main>
  );
};

export default Products;

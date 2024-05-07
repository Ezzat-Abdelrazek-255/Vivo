import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProductDisplay from "@/components/ProductDisplay";
import AddToCart from "@/components/AddToCart";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const productRes = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product: Product = await productRes.json();

  const relatedProductsRes = await fetch(
    `https://dummyjson.com/products/category/${product.category}?limit=3`
  );
  const relatedProducts: { products: Product[] } =
    await relatedProductsRes.json();

  return (
    <main className="grid grid-cols-3 gap-8 max-w-[1920px] mx-auto">
      <ProductDisplay product={product} />
      <div className="flex flex-col gap-8 col-span-1">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-4xl">{product.title}</h2>
          <p className="text-base">{product.description}</p>
        </div>
        <div>
          <p className="font-bold text-3xl">{product.price}$</p>
        </div>
        <div className="grid grid-cols-2 gap-4 items-center">
          <Button className=" xl:text-lg py-8 lg:text-base" variant="outline">
            Buy Now
          </Button>
          <AddToCart product={product} />
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                When can I expect my delivery?
              </AccordionTrigger>
              <AccordionContent>
                The delivery time can vary depending on several factors such as
                the shipping method chosen, the location of the recipient, and
                any potential delays in processing or shipping. Typically,
                standard shipping might take anywhere from a few days to a
                couple of weeks, while expedited shipping options could deliver
                within a few business days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What&apos;s our return policy ?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <h4 className="font-bold ">Our Return Policy:</h4>
                <div className="flex flex-col gap-2">
                  <p className="text-muted-foreground">
                    We want you to be completely satisfied with your purchase.
                    If for any reason you are not satisfied, we will gladly
                    accept returns within 30 days of purchase. Please note the
                    following guidelines for returns:
                  </p>
                  <ul className="list-disc pl-8">
                    <li>
                      Items must be returned in their original condition, unworn
                      and with tags attached.
                    </li>
                    <li>
                      Returns must be accompanied by the original receipt or
                      proof of purchase.
                    </li>
                    <li>
                      Refunds will be issued to the original method of payment.
                    </li>
                    <li>Shipping charges are non-refundable.</li>
                    <li>Returns are subject to a restocking fee of 10%.</li>
                    <li>
                      Certain items, such as personalized or clearance items,
                      may not be eligible for return.
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="col-span-3 xl:col-span-2  flex flex-col gap-4">
        <h3 className="font-bold text-2xl">Related Products</h3>
        <div className="grid grid-cols-3 gap-4">
          {relatedProducts.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;

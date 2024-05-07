import Image from "next/image";
import React from "react";

const PromoCodeSection = () => {
  return (
    <section className="w-full h-72 rounded-lg overflow-hidden">
      <Image
        className="object-cover w-full h-full "
        src="/images/promo-code.jpg"
        alt="An Image of an Iphone Max Headphone with a yellow background"
        width={2000}
        height={2000}
        placeholder="blur"
        blurDataURL="/images/compressed/promo-code.jpg"
      />
    </section>
  );
};

export default PromoCodeSection;

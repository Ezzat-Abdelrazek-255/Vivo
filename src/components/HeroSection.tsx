import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-5 grid-rows-2 h-[80vh] gap-4 ">
      <div className="col-span-3 row-span-2 bg-white">
        <Image
          className="object-cover w-full h-full"
          src="/images/hero-1.jpg"
          alt="A Collection of Nike Products"
          width={2000}
          height={2000}
          priority
        />
      </div>
      <div className=" col-span-2">
        <Image
          className="object-cover w-full h-full"
          src="/images/hero-2.jpg"
          alt="A teal blue plastic shaker cup"
          width={1000}
          height={1000}
        />
      </div>
      <div className=" col-span-2">
        <Image
          className="object-cover w-full h-full"
          src="/images/hero-3.jpg"
          alt="A Airpods tossed into the air"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default HeroSection;

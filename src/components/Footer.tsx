import React from "react";
import Logo from "./Logo";
import { FOOTER_NAVIGATION } from "@/constants";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 text-center bg-black px-24 py-12">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-muted-foreground">
            Shop the latest products right from your home with Vivo. We have
            products and accessories from top brands.
          </p>
        </div>
        <ul className="text-base flex gap-2">
          {FOOTER_NAVIGATION.map((value, i) => (
            <li key={value}>
              <Button asChild variant="ghost">
                <Link href="#">{value}</Link>
              </Button>
              <span className="ml-2">
                {i === FOOTER_NAVIGATION.length - 1 ? "" : "·"}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <hr className="bg-foreground h-[1px] w-full" />
      <p className="text-sm">
        ©2024 Copyright <strong>Vivo</strong>. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

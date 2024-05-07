import Link from "next/link";
import React from "react";
import SearchInput from "./Search";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import Cart from "./Cart";

const Header = async () => {
  const user = await currentUser();

  return (
    <header className="flex flex-col gap-8 sticky top-0">
      <div className="flex justify-between bg-black px-24 py-4 items-center">
        <h2>Welcome to our online store!</h2>
        {!user ? (
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="/sign-in">Login</Link>
            </Button>
            <div className="w-[1px] bg-foreground"></div>
            <Button variant="ghost" asChild>
              <Link href="/sign-up">Signup</Link>
            </Button>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <p>Hello, {user.firstName}</p>
            <UserButton />
          </div>
        )}
      </div>
      <div className="flex justify-between px-24 items-center ">
        <Logo />
        {/* <nav>
          <ul className="flex gap-12">
            {NAVIGATION.map(({ value, link }) => (
              <li key={value}>
                <Button asChild variant="outline">
                  <Link href={link}>{value}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav> */}
        <SearchInput />
        <div className="flex gap-4">
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;

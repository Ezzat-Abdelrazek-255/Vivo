import type { Metadata } from "next";
import { Montserrat, Sedan } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import ShopProvider from "@/components/providers/ShopProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const sedan = Sedan({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sedan",
});

export const metadata: Metadata = {
  title: "Vivo",
  description: "Where Shopping Comes Alive",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ShopProvider>
        <html lang="en" className="dark">
          <body
            className={cn(
              montserrat.className,

              `${montserrat.variable} ${sedan.variable} bg-background text-foreground `
            )}
          >
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="my-24 px-24 flex-grow">{children}</div>
              <Footer />
            </div>
          </body>
        </html>
      </ShopProvider>
    </ClerkProvider>
  );
}

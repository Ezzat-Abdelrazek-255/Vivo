import Header from "@/components/Header";
import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import PromoCodeSection from "../components/PromoCodeSection";
import WeeklyTopSelling from "../components/WeeklyTopSelling";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-32">
      <HeroSection />
      <FeaturedProducts />
      <PromoCodeSection />
      <WeeklyTopSelling />
    </main>
  );
};

export default LandingPage;

import React from "react";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata = {
  title: "Portfolio — Aura Visuals",
  description:
    "A curated selection of our finest projects across digital and brand design.",
};

export default function PortfolioPage() {
  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <PortfolioHero />
      <PortfolioGrid />
    </main>
  );
}

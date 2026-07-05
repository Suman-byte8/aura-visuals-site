import React from "react";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesBento from "@/components/services/ServicesBento";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Services — Aura Visuals",
  description:
    "Precision-crafted digital services — from social media marketing and SEO to web design, development, and hosting.",
};

export default function ServicesPage() {
  return (
    <main className="flex-grow pt-20">
      <ServicesHero />
      <ServicesBento />
      <ServicesCTA />
    </main>
  );
}

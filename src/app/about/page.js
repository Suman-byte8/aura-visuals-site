import React from "react";
import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import WhyWorkWithUs from "@/components/about/WhyWorkWithUs";

export const metadata = {
  title: "About — Aura Visuals",
  description:
    "We are a creative agency driven by a passion for blending high-end design with strategic thinking.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <WhyWorkWithUs />
    </>
  );
}

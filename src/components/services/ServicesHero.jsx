import React from "react";
import FadeInSection from "../FadeInSection";

const ServicesHero = () => {
  return (
    <FadeInSection>
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center border-b border-outline-variant relative overflow-hidden">
        {/* Subtle atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-low to-transparent opacity-50 -z-10" />

        <div className="max-w-4xl mx-auto space-y-8">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">
            Our Expertise
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight">
            Creative Solutions Designed Around Your Business
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            We deliver precision-crafted digital experiences that elevate brands.
            From strategic marketing to high-performance development, our services
            are engineered for impact.
          </p>
          <div className="pt-8 flex justify-center">
            <span className="material-symbols-outlined text-outline-variant animate-bounce">
              arrow_downward
            </span>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default ServicesHero;

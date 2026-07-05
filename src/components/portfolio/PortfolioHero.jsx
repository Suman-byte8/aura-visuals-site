import React from "react";
import FadeInSection from "../FadeInSection";

const PortfolioHero = () => {
  return (
    <FadeInSection>
      <section className="mb-section-padding text-center md:text-left grid md:grid-cols-12 gap-gutter items-end">
        <div className="md:col-span-8">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-6">
            Our Creative Work
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            A curated selection of our finest projects across digital and brand
            design. We blend strategic thinking with avant-garde aesthetics to
            deliver work that stands out.
          </p>
        </div>
      </section>
    </FadeInSection>
  );
};

export default PortfolioHero;

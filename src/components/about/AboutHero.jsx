import React from "react";
import FadeInSection from "../FadeInSection";

const AboutHero = () => {
  return (
    <FadeInSection>
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center flex flex-col items-center justify-center min-h-[60vh] w-full">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-4xl mb-6 leading-tight">
          Creating Digital Experiences with Purpose
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          We are a creative agency driven by a passion for blending high-end design with strategic thinking. Our mission is to elevate brands through quiet luxury and meticulous craftsmanship, ensuring every digital touchpoint is both beautiful and highly functional.
        </p>
      </section>
    </FadeInSection>
  );
};

export default AboutHero;

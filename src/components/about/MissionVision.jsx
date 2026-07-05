import React from "react";
import FadeInSection from "../FadeInSection";

const MissionVision = () => {
  return (
    <FadeInSection>
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter w-full">
          <div className="p-8 md:p-12 border border-outline-variant/20 bg-surface square-corners group hover:bg-surface-container-high transition-colors duration-300">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6 block">
              visibility
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Our Vision</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              To define the future of digital luxury, creating timeless interfaces that respect the user's attention while delivering profound aesthetic impact and business value.
            </p>
          </div>
          <div className="p-8 md:p-12 border border-outline-variant/20 bg-surface square-corners group hover:bg-surface-container-high transition-colors duration-300">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6 block">
              rocket_launch
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Our Mission</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We partner with forward-thinking organizations to craft premium, purpose-driven digital products that strip away the non-essential, leaving only clarity and elegance.
            </p>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default MissionVision;

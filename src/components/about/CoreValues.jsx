import React from "react";
import FadeInSection from "../FadeInSection";

const CoreValues = () => {
  const values = [
    {
      icon: "brush",
      title: "Creativity",
      description: "Pushing boundaries through thoughtful innovation.",
    },
    {
      icon: "water_drop",
      title: "Transparency",
      description: "Clear communication and open processes.",
    },
    {
      icon: "verified",
      title: "Quality",
      description: "Uncompromising standards in every detail.",
    },
    {
      icon: "trending_up",
      title: "Growth",
      description: "Continuous learning and elevating partners.",
    },
  ];

  return (
    <FadeInSection>
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16 w-full">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2 block">
            Our Foundation
          </span>
          <h2 className="font-headline-md text-headline-md text-primary">Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="aspect-square border border-outline-variant/30 p-8 flex flex-col items-center justify-center text-center square-corners gold-border-hover transition-colors duration-300 group bg-surface hover:bg-surface-container-low"
            >
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-secondary transition-colors duration-300 mb-4">
                {val.icon}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                {val.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
};

export default CoreValues;

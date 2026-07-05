import React from "react";
import FadeInSection from "../FadeInSection";

const ServicesCTA = () => {
  return (
    <FadeInSection>
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant">
        <div className="bg-primary text-on-primary p-16 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
          {/* Decorative background icon */}
          <div className="absolute -right-20 -top-20 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[300px]">all_inclusive</span>
          </div>

          <div className="max-w-2xl relative z-10">
            <h3 className="font-headline-md text-headline-md text-on-primary mb-4">
              Ready to elevate your brand?
            </h3>
            <p className="font-body-lg text-body-lg text-on-primary/80">
              Let&apos;s build something extraordinary together. Contact us for a
              consultation.
            </p>
          </div>

          <button className="bg-on-primary text-primary px-10 py-5 font-label-caps text-label-caps hover:bg-secondary hover:text-on-secondary transition-colors whitespace-nowrap z-10">
            Start a Project
          </button>
        </div>
      </section>
    </FadeInSection>
  );
};

export default ServicesCTA;

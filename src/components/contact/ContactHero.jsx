import React from "react";
import FadeInSection from "../FadeInSection";

const ContactHero = () => {
  return (
    <FadeInSection>
      <section className="mb-24 text-center md:text-left max-w-4xl mx-auto md:mx-0">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
          Let&apos;s Bring Your Ideas to Life
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Start a project with us today. Fill out the form below and our team
          will get back to you within 24 hours to discuss how we can elevate
          your brand&apos;s visual presence.
        </p>
      </section>
    </FadeInSection>
  );
};

export default ContactHero;

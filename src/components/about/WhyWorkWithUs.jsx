import React from "react";
import FadeInSection from "../FadeInSection";

const WhyWorkWithUs = () => {
  const points = [
    {
      icon: "person",
      title: "Personalized Approach",
      description: "We treat every project as a unique ecosystem, tailoring our methodology to fit your specific goals and audience.",
    },
    {
      icon: "lightbulb",
      title: "Creative Thinking",
      description: "Beyond standard solutions, we seek the unexpected elegant answers that set your brand apart in a crowded digital space.",
    },
    {
      icon: "memory",
      title: "Modern Technologies",
      description: "We leverage robust, scalable, and cutting-edge tech stacks to ensure your digital presence is fast and future-proof.",
    },
    {
      icon: "payments",
      title: "Affordable Pricing",
      description: "Premium quality delivered efficiently, maximizing the value of your investment without compromising on craftsmanship.",
    },
    {
      icon: "support_agent",
      title: "Reliable Support",
      description: "We stand by our work, offering ongoing maintenance and optimization to keep your digital assets performing at their peak.",
    },
    {
      icon: "handshake",
      title: "Long-Term Collaboration",
      description: "We view our clients as partners, seeking to build enduring relationships that evolve as your business grows.",
    },
  ];

  return (
    <FadeInSection>
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-primary text-on-primary my-16 square-corners relative overflow-hidden">
        {/* Minimalist background texture */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10 w-full">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-secondary-container uppercase tracking-widest mb-2 block">
              The Advantage
            </span>
            <h2 className="font-headline-md text-headline-md text-on-primary">
              Why Work With Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="p-8 border border-on-primary/20 square-corners hover:border-secondary-container transition-colors duration-300 bg-transparent"
              >
                <span className="material-symbols-outlined text-3xl text-secondary-container mb-4 block">
                  {point.icon}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">
                  {point.title}
                </h3>
                <p className="font-body-md text-body-md text-on-primary/70">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default WhyWorkWithUs;

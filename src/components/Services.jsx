import React from "react";
import FadeInSection from "./FadeInSection";

const Services = () => {
  const services = [
    {
      icon: "campaign",
      title: "Social Media Marketing",
      description: "Strategic content creation and campaign management to build community and drive engagement.",
    },
    {
      icon: "search_insights",
      title: "SEO Services",
      description: "Data-driven optimization strategies to improve visibility and rank higher in search results.",
    },
    {
      icon: "brush",
      title: "Graphics Design",
      description: "Striking visual identities, typography, and layout design that communicate your brand's essence.",
    },
    {
      icon: "devices",
      title: "Responsive Web Design",
      description: "Beautiful, intuitive interfaces crafted to perform flawlessly across all devices and screen sizes.",
    },
    {
      icon: "code",
      title: "Web Development",
      description: "Robust, scalable architecture and custom coding tailored to your specific business requirements.",
    },
    {
      icon: "dns",
      title: "Hosting & Domain",
      description: "Secure, reliable infrastructure management and ongoing technical support for peace of mind.",
    },
  ];

  return (
    <FadeInSection>
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16 w-full">
          <h2 className="font-headline-md text-headline-md text-primary max-w-2xl">
            Everything You Need to Build Your Online Presence
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-outline-variant w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-12 border-b border-r border-outline-variant bg-surface hover:bg-surface-container-lowest transition-all duration-300 min-h-[320px] flex flex-col justify-between"
            >
              <div className="absolute inset-0 border border-transparent group-hover:border-secondary transition-colors duration-300 pointer-events-none z-10"></div>
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:text-secondary transition-colors">
                  {service.icon}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                  {service.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 flex items-center text-label-caps font-label-caps tracking-widest text-primary uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
};

export default Services;

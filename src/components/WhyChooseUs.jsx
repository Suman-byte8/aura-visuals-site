import React from "react";
import FadeInSection from "./FadeInSection";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Personalized Service",
      description: "Bespoke strategies tailored to your unique brand DNA.",
    },
    {
      title: "Modern Design",
      description: "Forward-thinking aesthetics that cut through the noise.",
    },
    {
      title: "Affordable Solutions",
      description: "Premium quality without the inflated agency overhead.",
    },
  ];

  return (
    <FadeInSection>
      <section className="py-section-padding bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Illustration */}
            <div className="relative h-[600px] border border-outline-variant p-4 bg-surface shadow-sm">
              <div
                className="bg-cover bg-center w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1GxF6sG1yjXxjRfFRwYO6bTXxxsgzi4ervjH1EHQ5PcnPQEF0JXaMggkYfIbmarboKLx8M2kG4f5KfyVMx2D__AoF0HPGyKQton7B0eMHXzjparu2Q_6ESyEq3UqQ8IrZWO2nm3KyFjF9xAH86DQvPWXBYrB942A-y0MZs_Mb5tqMHyboMZndxy3ozv14gVDOYVwJ3D_6ONMCbHs2O6Yq1NHwgzGcM6PI_kOSZYhjYNBouCh8N6YA_u4y3FcfOySaEXT2qzufBFs')`,
                }}
                role="img"
                aria-label="A highly detailed 3D abstract render representing creativity and strategy with spheres, cubes, and gold accents"
              />
            </div>
            {/* Right: Features */}
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-12">
                Why Choose Us
              </h2>
              <ul className="space-y-8">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex gap-4 pb-8 border-b border-outline-variant last:border-b-0 last:pb-0"
                  >
                    <span className="material-symbols-outlined text-secondary mt-1">
                      check_circle
                    </span>
                    <div>
                      <h4 className="font-headline-sm text-lg text-primary mb-2">
                        {feature.title}
                      </h4>
                      <p className="font-body-md text-on-surface-variant">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default WhyChooseUs;

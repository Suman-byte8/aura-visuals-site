import React from "react";
import FadeInSection from "../FadeInSection";

const ServicesBento = () => {
  return (
    <FadeInSection>
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface-container-lowest">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-unit">

          {/* Service 1: Social Media Marketing — large feature (8 cols) */}
          <div className="col-span-1 md:col-span-8 border border-outline-variant p-12 hover:bg-surface-container-low transition-colors duration-300 group relative">
            {/* Gold sweep line on hover */}
            <div className="absolute top-0 right-0 w-0 h-[1px] bg-secondary transition-all duration-500 group-hover:w-full" />

            <div className="flex flex-col md:flex-row gap-12 h-full">
              <div className="flex-1 space-y-6">
                <div className="h-16 w-16 bg-primary text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">campaign</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary">
                  Social Media Marketing
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Strategic audience engagement and brand building across all major
                  platforms. We don&apos;t just post; we create conversations that convert.
                </p>
                <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant pt-4 border-t border-outline-variant">
                  {[
                    "Data-driven content strategy",
                    "Community management & growth",
                    "Targeted ad campaigns",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary symbol-filled">
                        check_small
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden md:flex flex-1 items-end justify-end">
                <button className="border border-primary text-primary px-8 py-4 hover:bg-primary hover:text-on-primary transition-all duration-300 font-label-caps text-label-caps flex items-center gap-2">
                  Explore Service
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Service 2: SEO Services — tall feature (4 cols) */}
          <div className="col-span-1 md:col-span-4 border border-outline-variant p-12 hover:bg-surface-container-low transition-colors duration-300 group flex flex-col justify-between min-h-[500px]">
            <div className="space-y-6">
              <div className="h-12 w-12 border border-secondary text-secondary flex items-center justify-center mb-8">
                <span className="material-symbols-outlined">travel_explore</span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-primary">
                SEO Services
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Dominate search rankings with our comprehensive optimization
                strategies. Visibility is the currency of the digital age.
              </p>
              <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant pt-6">
                {["Technical SEO Audits", "Keyword Strategy", "Backlink Generation"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-primary rounded-full" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <button className="mt-8 text-left font-label-caps text-label-caps text-secondary hover:text-primary transition-colors flex items-center gap-2 group-hover:translate-x-2 duration-300">
              Learn More{" "}
              <span className="material-symbols-outlined text-sm">east</span>
            </button>
          </div>

          {/* Service 3: Graphics Design (6 cols) */}
          <div className="col-span-1 md:col-span-6 border border-outline-variant p-10 hover:border-secondary transition-colors duration-300 group flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <h2 className="font-headline-sm text-headline-sm text-primary max-w-[200px]">
                  Graphics Design
                </h2>
                <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary transition-colors">
                  design_services
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant pt-4 border-t border-outline-variant">
                Visual identities that command attention. From logos to comprehensive
                brand guidelines, we craft premium aesthetics.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {["Branding", "Illustration", "Print"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-caps text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button className="mt-8 border border-outline-variant px-6 py-3 text-primary font-label-caps text-label-caps hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all w-fit">
              View Portfolio
            </button>
          </div>

          {/* Service 4: Responsive Web Design (6 cols) */}
          <div className="col-span-1 md:col-span-6 border border-outline-variant p-10 hover:border-secondary transition-colors duration-300 group flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <h2 className="font-headline-sm text-headline-sm text-primary max-w-[250px]">
                  Responsive Web Design
                </h2>
                <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary transition-colors">
                  devices
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant pt-4 border-t border-outline-variant">
                Pixel-perfect interfaces that adapt flawlessly to any screen. We
                design user experiences that are as intuitive as they are beautiful.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {["UI/UX", "Prototyping", "Mobile-First"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-caps text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button className="mt-8 border border-outline-variant px-6 py-3 text-primary font-label-caps text-label-caps hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all w-fit">
              See Details
            </button>
          </div>

          {/* Service 5: Web Development — fill/slide hover (7 cols) */}
          <div className="col-span-1 md:col-span-7 border border-outline-variant bg-surface-container-low p-12 relative overflow-hidden group">
            {/* Black fill slides up on hover */}
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

            <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 border border-primary group-hover:border-on-primary flex items-center justify-center transition-colors duration-500">
                  <span className="material-symbols-outlined group-hover:text-on-primary transition-colors duration-500">
                    code
                  </span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-primary group-hover:text-on-primary transition-colors duration-500">
                  Web Development
                </h2>
              </div>

              <p className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-on-primary/80 max-w-xl transition-colors duration-500">
                Robust, scalable architecture built on modern frameworks. We
                engineer digital products that perform under pressure.
              </p>

              <ul className="space-y-2 font-body-md text-body-md">
                <li className="flex items-center gap-3 text-on-surface group-hover:text-on-primary transition-colors duration-500">
                  <span className="material-symbols-outlined text-secondary group-hover:text-secondary-container transition-colors duration-500">
                    terminal
                  </span>
                  Custom CMS Integration
                </li>
                <li className="flex items-center gap-3 text-on-surface group-hover:text-on-primary transition-colors duration-500">
                  <span className="material-symbols-outlined text-secondary group-hover:text-secondary-container transition-colors duration-500">
                    api
                  </span>
                  API Development
                </li>
              </ul>

              <button className="mt-4 text-left font-label-caps text-label-caps text-on-surface group-hover:text-on-primary flex items-center gap-2 group-hover:translate-x-2 transition-all duration-300">
                Discuss Project{" "}
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </button>
            </div>
          </div>

          {/* Service 6: Hosting & Domain Support (5 cols) */}
          <div className="col-span-1 md:col-span-5 border border-outline-variant p-12 flex flex-col justify-center items-center text-center hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-5xl text-outline-variant mb-6">
              dns
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary mb-4">
              Hosting &amp; Domain Support
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Secure, reliable infrastructure to keep your digital assets online
              24/7/365.
            </p>
            <button className="bg-primary text-on-primary px-8 py-3 font-label-caps text-label-caps hover:bg-secondary transition-colors w-full">
              View Plans
            </button>
          </div>

        </div>
      </section>
    </FadeInSection>
  );
};

export default ServicesBento;

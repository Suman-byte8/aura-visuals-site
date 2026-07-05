import React from "react";
import ShaderBackground from "./ShaderBackground";
import FadeInSection from "./FadeInSection";

const Hero = () => {
  return (
    <FadeInSection>
      <section className="relative pt-32 pb-section-padding md:pt-48 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen flex items-center">
        <ShaderBackground />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center w-full">
          <div className="lg:col-span-6 space-y-8 z-10">
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary">
              Elevate Your Digital Presence
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Modern digital marketing, branding, websites, and creative solutions tailored for businesses ready to grow. We blend high-end aesthetics with strategic functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase hover:bg-surface-tint transition-colors duration-300 group"
                href="#"
              >
                Let's Build Your Brand
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-label-caps text-label-caps tracking-widest uppercase hover:bg-surface-container-low transition-colors duration-300"
                href="#"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 relative mt-12 lg:mt-0">
            <div className="aspect-[1.79/1] relative border border-outline-variant p-2 bg-surface-container-lowest shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <img
                alt="Premium modern abstract illustration"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLvJ-ApTuZQI5RkZORttVq3Oezp0NwkANd-fswt-XbtJDzIezjoO72I6ydWjb0MWJ4EGzOv242Q9dLVBmrwMBIwVEgSJYVpKVcrbthU3cDhgSXM2E-QP2ea6cgU0zd6FeHoQbFf3glYTiGM4YX47y3lawq5WNKFOjCzMus8Uzc-TbbB7-cDAuZm-ai654M6bb0xhuDz6Y992BD94-QgdhSIkR7mMkChQA8uGPicbLMl-7TZ73ZFvfazUe-s"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l border-b border-secondary"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-r border-t border-secondary"></div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Hero;

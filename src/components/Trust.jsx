import React from "react";
import FadeInSection from "./FadeInSection";

const Trust = () => {
  const logos = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyvVCkxVoDmzX-EU8GbOP210xvLEvuXnEymG66kpjBIIm99i6lIrjrXfL8BcNycFjfmTVbNdtm-8ifeQGGchmJziZVhtGki1B7-dXg6JHuUkK8hOSES4oyKTcEWSwDFbweGQ1bsVhWSQEv9s3ELWmpNEQNaI4armPmp1hctaofziGnaJBa2tsVn6GsenM_2rs6GwrJ2GB8rrO-fnMbAG2wyVHCNXy2s7omDnU21wIY-Yo96V43aeIsLCurdKmuMftePTaXns6-8us",
      alt: "V-shaped minimalist tech brand logo mark",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBANmzvB8SYu4q80hAu8ozuat9H6ULihwKIpBN9eFImya1N9_OpN-JWh8hznRPJuRWopsnkNwQaQFU6ZfzvEJ9sPcQVpQnr2LMNscSDwAHBtoOBAw_NOUfPpuKiGW1PymmTT6n2dqzcmVb2lJ7OsZZ7K9XdsrBmUu-JonCCcdJ8GsEiqaeC3VELjEYZLyhvOMnROdeH8R4bVtEhLIIy-ffBnmpBFihgSRxt3P-2EBn7lInDlP8c5sDqLSKYfizhFE19K8frtvEubl8",
      alt: "Interlocking circles corporate logo design",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaWZhTXoM6VL_5-lOCYLz_GE-p2otLhCnFZLv9pdESBPpZ5b9KSkgs90CcTU2FaYd4JPEwSjAU4ksH_vtp0wUPaKCmZD0YvCa-7uTssJy4hnflhai5Z9gES8RHi2HISkXCYf6ohDyZAuK_CXPmAh2Ez9fl1FwZp0AE9ei2xoc1uL4Yr4-8J4AYEhPwoHXkP6mkZHUgctYGlPJsVyolvYSpoz6QjCklFNZ_XdTwOIa-epqhWx5yfM2nYa77Y3Z2ef2H10xxsk5Lb3w",
      alt: "Diagonal split square brand mark",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAQgDdFTpyVgBhOd2nT1t9XoPa3UfZmcRXvSKH6RZm4SOysPLB7aEAerifRY40OqTWy5TAbbWUDzT9O0njg5uIMVR1Iyc0AGPpRkjlT5PcHe8O7szCU-89ugqD1cJzUVqPHvleWmUNXKBasa1qDueUeFSAE0dZBSxF0ka0hdsMKA0d1yRv8jugbINPtO9smmVkBpJapAz0bsNrKmsXNAKEPUUa1tpTE6CPDa2GkMQuOnWbzVmLBoUWImkSnEpS5Ki9NziAPwuHsIM",
      alt: "Heavy sans-serif monolithic A shape typography logo mark",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6eKKtzg_XOjz6DREV-b2G6HH_Q5OeDzBsrX9SXozYiVQrKEV0oALi-rBgTiyqXhtCYhhKWh171I6YltDHwytGYcIwr7N2HRM7lBkTwtxaYbRkRaCjqgjU3deeKM6SjT6K0R6Icyrspz2U8hh9FzOXYjo2oWGnwPS7tbYnN4DKY9kkuG5d7gks6A-YDuR3f5N0OWyuQIVBp-63XBXvwF8qC_t91Gx4LXVYrzsJqL1hd84nLNcXflk15KNVtes88MHPZFzhqnR1I5A",
      alt: "Stylized minimalist flow wave pattern logo mark",
      desktopOnly: true,
    },
  ];

  return (
    <FadeInSection>
      <section className="py-section-padding bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto text-center space-y-12 w-full">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-headline-md text-headline-md text-primary">
              Built for Businesses Ready to Grow
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Whether you're launching a new business or strengthening an existing one, Aura Visuals delivers creative digital solutions designed to help your brand stand out with confidence.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`items-center justify-center h-16 ${
                  logo.desktopOnly ? "hidden md:flex" : "flex"
                }`}
              >
                <img
                  className="h-8 object-contain"
                  src={logo.src}
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Trust;

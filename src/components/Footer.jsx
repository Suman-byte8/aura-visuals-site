import React from "react";
import Link from "next/link";
import FadeInSection from "./FadeInSection";

const Footer = () => {
  return (
    <FadeInSection>
      <footer className="w-full py-section-padding bg-surface border-t border-outline-variant">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

          {/* Brand */}
          <div className="col-span-2 md:col-span-2 flex flex-col space-y-4">
            <Link href="/">
              <img
                alt="Aura Visuals"
                className="h-24 w-auto object-contain grayscale brightness-0"
                src="/aura-visuals-logo-horz.png"
              />
            </Link>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-xs">
              Elevating digital presence through premium minimal design and
              strategic innovation.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-8" suppressHydrationWarning>
              © {new Date().getFullYear()} Aura Visuals. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-label-caps text-label-caps tracking-widest uppercase text-primary mb-2">
              Quick Links
            </h4>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary hover:underline transition-all"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary hover:underline transition-all"
              href="/about"
            >
              About
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary hover:underline transition-all"
              href="/portfolio"
            >
              Portfolio
            </Link>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-label-caps text-label-caps tracking-widest uppercase text-primary mb-2">
              Services
            </h4>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary hover:underline transition-all"
              href="/services"
            >
              Design
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary hover:underline transition-all"
              href="/services"
            >
              Development
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary hover:underline transition-all"
              href="/services"
            >
              Marketing
            </Link>
          </div>

          {/* Connect */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-label-caps text-label-caps tracking-widest uppercase text-primary mb-2">
              Connect
            </h4>
            <a
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary hover:underline transition-all"
              href="mailto:av.visuals.design@gmail.com"
            >
              Email
            </a>
            <a
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary hover:underline transition-all"
              href="#"
            >
              Socials
            </a>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary hover:underline transition-all"
              href="/contact"
            >
              Contact
            </Link>
          </div>

        </div>
      </footer>
    </FadeInSection>
  );
};

export default Footer;

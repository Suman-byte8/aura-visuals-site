import React from "react";
import Link from "next/link";
import FadeInSection from "./FadeInSection";

// Grayscale SVG icons
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const Footer = () => {
  return (
    <FadeInSection>
      <footer className="w-full bg-primary text-on-primary">

        {/* ── Main content row ── */}
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

            {/* Brand block */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <Link href="/" className="inline-block">
                <img
                  alt="Aura Visuals"
                  className="h-12 w-auto object-contain brightness-0 invert"
                  src="/aura-visuals-logo-horz.png"
                />
              </Link>
              <p className="font-body-md text-body-md text-on-primary/70 max-w-xs leading-relaxed">
                Premium digital design and visual identities for forward-thinking brands. We blend quiet luxury with strategic thinking.
              </p>
              {/* Social icons */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://www.instagram.com/aura.visualsofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 flex items-center justify-center border border-on-primary/20 text-on-primary/50 hover:text-on-primary hover:border-on-primary transition-colors duration-300"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61589394205755"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 flex items-center justify-center border border-on-primary/20 text-on-primary/50 hover:text-on-primary hover:border-on-primary transition-colors duration-300"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>

            {/* Nav columns */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">

              {/* Pages */}
              <div className="flex flex-col gap-4">
                <h4 className="font-label-caps text-label-caps text-on-primary/40 tracking-widest uppercase mb-1">
                  Pages
                </h4>
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Contact", href: "/contact" },
                ].map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="font-body-md text-body-md text-on-primary/70 hover:text-on-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Services */}
              <div className="flex flex-col gap-4">
                <h4 className="font-label-caps text-label-caps text-on-primary/40 tracking-widest uppercase mb-1">
                  Services
                </h4>
                {[
                  { label: "Social Media Marketing", href: "/services" },
                  { label: "SEO Services", href: "/services" },
                  { label: "Graphics Design", href: "/services" },
                  { label: "Web Design", href: "/services" },
                  { label: "Web Development", href: "/services" },
                ].map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="font-body-md text-body-md text-on-primary/70 hover:text-on-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-4">
                <h4 className="font-label-caps text-label-caps text-on-primary/40 tracking-widest uppercase mb-1">
                  Contact
                </h4>
                <a
                  href="mailto:av.visuals.design@gmail.com"
                  className="font-body-md text-body-md text-on-primary/70 hover:text-on-primary transition-colors duration-200 break-all"
                >
                  av.visuals.design@gmail.com
                </a>
                <p className="font-body-md text-body-md text-on-primary/70 leading-relaxed">
                  Malda, West Bengal — 732103
                  <br />
                  India
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-label-caps text-label-caps text-on-primary/70 hover:text-on-primary transition-colors duration-200 uppercase tracking-widest mt-1 group"
                >
                  Get in touch
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-on-primary/10">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p
              className="font-label-caps text-label-caps text-on-primary/40 tracking-widest"
              suppressHydrationWarning
            >
              © {new Date().getFullYear()} Aura Visuals. All rights reserved.
            </p>
            <p className="font-label-caps text-label-caps text-on-primary/30 tracking-widest">
              Crafted with precision &amp; purpose
            </p>
          </div>
        </div>

      </footer>
    </FadeInSection>
  );
};

export default Footer;

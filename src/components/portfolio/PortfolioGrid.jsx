"use client";

import React, { useState } from "react";
import FadeInSection from "../FadeInSection";

const CATEGORIES = [
  "All Work",
  "Website Design",
  "UI/UX Design",
  "Social Media Creatives",
  "Brand Identity",
  "Graphics Design",
];

const PROJECTS = [
  {
    title: "Nexus Analytics",
    category: "UI/UX Design",
    tag: "Design Concept",
    aspect: "aspect-[4/5]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAHDTHrcYVFW-gDVwgok_okuuah2YPxd3lJ5DpZc0HOHbX1YHTe81CuTxRZOZIoJM_7lMf4It2r47t-XNWr4TsQ2t_O3ib72Xl8PTWvWjQJsOWaRZ9MbAQwwJePYo_P5PAxAkGgm9sO3xX1Q25p35G47iUvJmwZ2RHOmUxB4js64JWxLFa86AVan_nmI1MdT0uVpwzgJWG1sTzneypjX1KgA7BLQrQz-koppo8FCwZyh4vbtit3IRYCYcBFRgeBcZdIn7_p8cyYfs",
    alt: "A clean, modern SaaS dashboard interface displayed on a sleek monitor.",
  },
  {
    title: "Maison Vogue",
    category: "Brand Identity",
    tag: null,
    aspect: "aspect-square",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9j28f4sGuIyzWlNVrhaIciEJSbwl24ZNhoLYB6H9GDI470ydLLBUrUKJeMvYjlDdERgHXkILztTfGumGArQNMeFiQ5_E2CTas8fVg25XuBoTLpYrK28RgkIeBXeIXXSvAKAxy5TSiv-I47g8WBRtfGpTi15Tpa7bOj2CmQaCGj8kGdzW9bYUXYej61BwdVA1n74EVzLihD4uBsnoRjMTag7j3lJaH4Ojgmm_Ex9yYl-EPZYKVNOWKd_1xfRNMo2q76frcS8Iu0SY",
    alt: "A high-end editorial layout for a luxury fashion brand.",
  },
  {
    title: "Aethel Architecture",
    category: "Website Design",
    tag: "Design Concept",
    aspect: "aspect-[3/4]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWQVf_rN99ypgB0u15fRv-pIOLIQWv195IfYsc7Jvr8iJrvSEpUkUmdtLTAjflnZkRsKnk1wjelOlxbvweJyRERnK7EW2nS8_RY6ef8rts-EoATd5ssSIgllIbMUMwBYJV6K2-yFaI0n_sXpgzUhOCrnT4tCJUjccA4-dg6sedDQYD5kjwypVTk5U5sykJC_YIjXVHIkT0FngoUFpWOAA520Rjnflm5lWNA_vVrO_-96GWGf4_vDYdGVBQIU4V6SBEm5oTmDeER6M",
    alt: "A striking minimalist website landing page with bold monolithic typography.",
  },
  {
    title: "Lumina Campaign",
    category: "Social Media Creatives",
    tag: null,
    aspect: "aspect-video",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDo-MYLZoat0Yak5HRBKYXhzFxMgO0FDlJw4mT5poqyOWACeujTYEwIbo_BPL2tfRAXHgckEy9dDoIA_HFIOO8UVTdTdiThrrMJQ-h-_XC1gYJ4EynhcFMBsUpbQFJrnrRPHqq5tastCYOIMDyKTIuMbhA1YbpBtunKAtXTIGIEaEvvLpmFDcQNXhJ_uEtcS7jWoT9Vj_kwK3nhned1K73cxRMCaNGy9EIMA2ORHrUbROHq2xdS-nirVoUSkx_ic5_wC-M02y6qbf8",
    alt: "A collection of avant-garde social media creative posts in a grid.",
  },
];

const ProjectCard = ({ title, category, tag, aspect, image, alt }) => (
  <article className="masonry-item group cursor-pointer">
    <div
      className={`relative overflow-hidden mb-4 border border-outline-variant bg-surface-container-low ${aspect}`}
    >
      <div
        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${image}')` }}
        role="img"
        aria-label={alt}
      />
      {/* hover border overlay */}
      <div className="absolute inset-0 border border-transparent group-hover:border-secondary transition-colors duration-300 pointer-events-none" />
    </div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
          {title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {category}
        </p>
      </div>
      {tag && (
        <span className="inline-block border border-outline px-3 py-1 font-label-caps text-label-caps text-on-surface-variant rounded-none shrink-0">
          {tag}
        </span>
      )}
    </div>
  </article>
);

const PortfolioGrid = () => {
  const [active, setActive] = useState("All Work");

  const filtered =
    active === "All Work"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      {/* Category Filter */}
      <FadeInSection>
        <section
          className="mb-12 border-b border-outline-variant pb-6 flex flex-wrap gap-6 items-center font-label-caps text-label-caps uppercase tracking-wider"
          aria-label="Portfolio categories"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`pb-1 transition-colors ${
                active === cat
                  ? "text-primary border-b border-secondary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </section>
      </FadeInSection>

      {/* Masonry Grid */}
      <FadeInSection>
        <section className="masonry-grid" aria-label="Portfolio projects">
          {filtered.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>
      </FadeInSection>
    </>
  );
};

export default PortfolioGrid;

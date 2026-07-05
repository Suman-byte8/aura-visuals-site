"use client";

import React, { useState } from "react";
import FadeInSection from "../FadeInSection";

const FAQ_ITEMS = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Most branding and UI design projects take between 4 to 8 weeks, depending on complexity and scope. We provide a detailed timeline during the initial discovery phase.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we work with clients globally. Our remote-first process ensures seamless communication and project delivery regardless of time zones.",
  },
  {
    question: "What deliverables are included?",
    answer:
      "Deliverables are custom to each project but typically include source design files (Figma/Adobe), high-resolution assets, a style guide, and ready-to-implement code or prototypes if applicable.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-outline-variant bg-surface-container-lowest">
      <button
        className="w-full px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-surface-container-low transition-colors"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="font-headline-sm text-[18px] text-primary font-semibold text-left">
          {question}
        </span>
        <span
          className="material-symbols-outlined text-on-surface-variant transition-transform duration-300 shrink-0"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_more
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? "500px" : "0px", opacity: open ? 1 : 0 }}
      >
        <p className="font-body-md text-body-md text-on-surface-variant px-6 pt-4 pb-6">
          {answer}
        </p>
      </div>
    </div>
  );
};

const ContactFAQ = () => {
  return (
    <FadeInSection>
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Common inquiries about our process and capabilities.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.question} {...item} />
          ))}
        </div>
      </section>
    </FadeInSection>
  );
};

export default ContactFAQ;

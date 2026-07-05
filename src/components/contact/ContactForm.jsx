"use client";

import React, { useState } from "react";
import FadeInSection from "../FadeInSection";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic goes here
    console.log("Form submitted:", formData);
  };

  return (
    <FadeInSection>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-section-padding">
        {/* Contact Form — 8 cols */}
        <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.04)] relative">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-secondary-container" />

          <h2 className="font-headline-md text-headline-md text-primary mb-8">
            Send a Message
          </h2>

          <form className="space-y-8" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label
                  className="font-label-caps text-label-caps text-on-surface-variant block mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="minimal-input w-full font-body-md text-body-md text-primary"
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  required
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="font-label-caps text-label-caps text-on-surface-variant block mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="minimal-input w-full font-body-md text-body-md text-primary"
                  id="email"
                  name="email"
                  placeholder="jane@example.com"
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label
                className="font-label-caps text-label-caps text-on-surface-variant block mb-2"
                htmlFor="business"
              >
                Business Name (Optional)
              </label>
              <input
                className="minimal-input w-full font-body-md text-body-md text-primary"
                id="business"
                name="business"
                placeholder="Your Company Ltd."
                type="text"
                value={formData.business}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                className="font-label-caps text-label-caps text-on-surface-variant block mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="minimal-input w-full font-body-md text-body-md text-primary resize-none"
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="pt-4">
              <button
                className="inline-flex items-center justify-center font-label-caps text-label-caps bg-primary text-on-primary px-8 py-4 rounded-none hover:opacity-90 transition-opacity w-full md:w-auto"
                type="submit"
              >
                Submit Inquiry
                <span
                  className="material-symbols-outlined ml-2"
                  style={{ fontSize: "16px" }}
                >
                  arrow_forward
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info Sidebar — 4 cols */}
        <div className="lg:col-span-4 flex flex-col gap-gutter">
          <div className="bg-surface-container-lowest border border-outline-variant p-8 shadow-[0_20px_40px_rgba(0,0,0,0.04)] h-full flex flex-col">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 flex-grow">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">
                  mail
                </span>
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-1">
                    Email
                  </h4>
                  <a
                    className="font-body-md text-body-md text-primary hover:text-secondary transition-colors"
                    href="mailto:av.visuals.design@gmail.com"
                  >
                    av.visuals.design@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">
                  location_on
                </span>
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-1">
                    Studio
                  </h4>
                  <p className="font-body-md text-body-md text-primary">
                    Malda, West Bengal — 732103
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-8 pt-8 border-t border-outline-variant">
              <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-4">
                Connect
              </h4>
              <div className="flex gap-4">
                <a
                  aria-label="Instagram"
                  className="w-10 h-10 border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
                  href="https://www.instagram.com/aura.visualsofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined">photo_camera</span>
                </a>
                <a
                  aria-label="Facebook"
                  className="w-10 h-10 border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
                  href="https://www.facebook.com/profile.php?id=61589394205755"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined">group</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default ContactForm;

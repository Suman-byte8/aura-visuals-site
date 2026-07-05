"use client";

import React, { useState } from "react";
import FadeInSection from "../FadeInSection";

/* ── Animated success SVG ── */
const SuccessAnimation = () => (
  <div className="flex flex-col items-center justify-center py-16 gap-6 text-center">
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24"
      aria-hidden="true"
    >
      {/* Circle */}
      <circle
        cx="40"
        cy="40"
        r="36"
        stroke="#000"
        strokeWidth="2"
        fill="none"
        strokeDasharray="226"
        strokeDashoffset="226"
        style={{
          animation: "draw-circle 0.6s ease forwards",
        }}
      />
      {/* Checkmark */}
      <polyline
        points="24,41 35,52 56,30"
        stroke="#febb3c"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeDasharray="50"
        strokeDashoffset="50"
        style={{
          animation: "draw-check 0.4s ease 0.5s forwards",
        }}
      />
    </svg>
    <h3 className="font-headline-sm text-headline-sm text-primary">
      Message Sent!
    </h3>
    <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
    </p>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <FadeInSection>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-section-padding">
        {/* Contact Form — 8 cols */}
        <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.04)] relative overflow-hidden">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-secondary-container" />

          {status === "success" ? (
            <SuccessAnimation />
          ) : (
            <>
              <h2 className="font-headline-md text-headline-md text-primary mb-8">
                Send a Message
              </h2>

              {status === "error" && (
                <div className="mb-6 px-4 py-3 border border-error bg-error-container text-on-error-container font-body-md text-body-md">
                  {errorMsg}
                </div>
              )}

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
                      disabled={status === "loading"}
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
                      disabled={status === "loading"}
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
                    disabled={status === "loading"}
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
                    disabled={status === "loading"}
                  />
                </div>

                <div className="pt-4">
                  <button
                    className="inline-flex items-center justify-center font-label-caps text-label-caps bg-primary text-on-primary px-8 py-4 rounded-none hover:opacity-90 transition-opacity w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        Sending&hellip;
                        <svg
                          className="ml-2 w-4 h-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <span
                          className="material-symbols-outlined ml-2"
                          style={{ fontSize: "16px" }}
                        >
                          arrow_forward
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
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

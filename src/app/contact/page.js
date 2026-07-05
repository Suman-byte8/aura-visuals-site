import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata = {
  title: "Contact — Aura Visuals",
  description:
    "Start a project with us. Fill out the form and our team will get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
    </main>
  );
}

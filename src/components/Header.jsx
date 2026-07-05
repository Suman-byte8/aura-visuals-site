"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const getLinkClass = (href) => {
    const isActive = pathname === href;
    if (isActive) {
      return "text-secondary font-bold border-b border-secondary font-label-caps text-label-caps tracking-widest uppercase hover:bg-surface-container-low transition-all duration-300 py-2";
    }
    return "text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps tracking-widest uppercase hover:bg-surface-container-low py-2";
  };

  const getMobileLinkClass = (href) => {
    const isActive = pathname === href;
    if (isActive) {
      return "text-secondary font-bold font-label-caps text-label-caps tracking-widest uppercase py-2";
    }
    return "text-on-surface-variant hover:text-primary font-label-caps text-label-caps tracking-widest uppercase py-2";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant shadow-sm transition-all duration-300 h-20">
      <div className="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Logo */}
        <Link className="flex items-center gap-4" href="/">
          <img
            alt="Aura Visuals"
            className="h-8 w-8 object-contain"
            src="https://lh3.googleusercontent.com/aida/AP1WRLuMkQ7OWq9gHgFDguDD9iTwPBegPsme-0NYCUUawVn0qIk55tXV_FF-MFbfoX4__t5AqgMnRYnB9fA-4b5VQdCytIZwzSU8i35g8UUAD4ONc6UjB5Gj6ZbQNiT2CAWQhBRxcBfOLBA4JSP6yzw-Z7lokNe7SM9rTURNCjCPYpLgRehhRfwOKHj5HXPKC2spRTA-zr16SQ-N5UoP2AVE8vYWUe-lfWs-UDh8612__dCi92JhDu-0sf6b0PU"
          />
          <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary">
            Aura Visuals
          </span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.name} className={getLinkClass(item.href)} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>
        {/* Trailing Action */}
        <div className="hidden md:block">
          <Link
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase hover:bg-surface-tint transition-colors duration-300"
            href="/contact"
          >
            Get Started
          </Link>
        </div>
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant shadow-md px-margin-mobile py-6 flex flex-col gap-4 z-40">
          {navItems.map((item) => (
            <Link
              key={item.name}
              className={getMobileLinkClass(item.href)}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            className="inline-flex items-center justify-center px-6 py-3 mt-2 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase hover:bg-surface-tint transition-colors duration-300 w-full"
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;

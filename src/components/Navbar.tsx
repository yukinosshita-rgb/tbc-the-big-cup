"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Franchise", href: "#franchise" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-gold">
              <span className="font-serif text-lg font-bold text-brand-gold">
                TBC
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-lg font-semibold text-white">
                The Big Cup
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-brand-gold/80">
                Brewing Bond Beyond Beverages
              </p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium tracking-wide text-white/90 uppercase hover:text-brand-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#franchise"
              className="rounded-full border border-brand-gold px-6 py-2 text-sm font-medium text-brand-gold transition-all hover:bg-brand-gold hover:text-brand-dark"
            >
              Join Us
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark/98 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-white/90 hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#franchise"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full border border-brand-gold px-6 py-2.5 text-center text-sm font-medium text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all"
              >
                Join Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

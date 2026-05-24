"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-drinks.png"
        alt="TBC signature drinks"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark/90" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex h-24 w-24 items-center justify-center rounded-full border-2 border-brand-gold/60">
            <span className="font-serif text-3xl font-bold text-brand-gold">
              TBC
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm tracking-[0.35em] uppercase text-brand-gold mb-6"
        >
          The Big Cup
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Brewing Bond
          <br />
          <span className="text-brand-gold">Beyond Beverages</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting moments of connection since 2013. Every cup tells a story —
          from our signature milk teas to artisan coffee blends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="rounded-full bg-brand-gold px-10 py-4 text-sm font-semibold uppercase tracking-wider text-brand-dark transition-all hover:bg-white hover:shadow-lg"
          >
            Explore Our Menu
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/30 px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-brand-gold hover:text-brand-gold"
          >
            Our Story
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase text-white/40">
            Scroll
          </span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

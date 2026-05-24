"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Featured() {
  return (
    <section className="py-20 bg-brand-brown overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/must-try.png"
              alt="TBC must try flavors"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-brand-gold/80 mb-3">
              Featured
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
              Must-Try
              <br />
              Flavors
            </h2>
            <div className="h-[1px] w-16 bg-brand-gold/40 mx-auto mb-4" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
              From our signature Honey Oats Iced Latte to our refreshing
              seasonal specials — there&apos;s always something new to discover
              at TBC.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/beat-the-heat.png"
              alt="TBC beat the heat drinks"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

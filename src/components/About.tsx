"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-brand-warm-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-brand-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark mb-8 leading-tight">
              From a Cup
              <br />
              to a Community
            </h2>
            <div className="space-y-5 text-brand-dark/70 leading-relaxed text-lg">
              <p>
                What started as The Big Cup Milk-Tea in 2013 has grown into a
                movement. After reopening in 2019 in Quezon City, TBC has
                expanded to over 5 branches — each one a space where
                friendships are forged and stories are shared.
              </p>
              <p>
                We believe that a great drink is more than its ingredients. It's
                the warmth of a welcoming space, the smile of our baristas, and
                the comfort of knowing you belong. That's why we brew bond
                beyond beverages.
              </p>
              <p>
                From our signature Honey Oats Iced Latte to our refreshing
                Strawberry Signature Tea, every recipe is crafted with care — and
                best enjoyed within 2 hours.
              </p>
            </div>
            <div className="mt-10 flex gap-12">
              <div>
                <p className="font-serif text-4xl font-bold text-brand-brown">
                  5+
                </p>
                <p className="text-sm text-brand-dark/50 mt-1">Branches</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold text-brand-brown">
                  2013
                </p>
                <p className="text-sm text-brand-dark/50 mt-1">Established</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold text-brand-brown">
                  4AM
                </p>
                <p className="text-sm text-brand-dark/50 mt-1">Open Until</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/community-banner.png"
                alt="TBC community and moments"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-brown rounded-2xl p-6 shadow-xl">
              <p className="font-serif text-2xl font-bold text-brand-gold">
                &ldquo;Brewing Bond
              </p>
              <p className="font-serif text-2xl font-bold text-white">
                Beyond Beverages&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

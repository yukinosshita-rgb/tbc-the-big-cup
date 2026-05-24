"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Lightbulb,
  Handshake,
  Send,
} from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    icon: TrendingUp,
    title: "Proven Business Model",
    description: "5+ successful branches and growing across Quezon City.",
  },
  {
    icon: Shield,
    title: "Full Training & Support",
    description:
      "Comprehensive training for you and your staff from day one.",
  },
  {
    icon: Lightbulb,
    title: "Marketing Assistance",
    description:
      "Benefit from our established brand presence and social media reach.",
  },
  {
    icon: Handshake,
    title: "Community Network",
    description:
      "Join a family of franchise partners who support each other.",
  },
];

export default function Franchise() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="franchise" className="py-24 lg:py-32 bg-brand-warm-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-brand-gold mb-4">
            Franchise Opportunity
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
            Grow With Us
          </h2>
          <p className="text-brand-dark/60 max-w-2xl mx-auto text-lg">
            Be part of the TBC family. We&apos;re looking for passionate
            partners to bring The Big Cup experience to more communities across
            the Philippines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-brand-dark/5 hover:shadow-lg hover:border-brand-gold/20 transition-all group"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-gold/10 mb-5 group-hover:bg-brand-gold/20 transition-colors">
                <benefit.icon size={24} className="text-brand-brown" />
              </div>
              <h3 className="font-semibold text-brand-dark mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-brand-dark/50 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/beat-the-heat.png"
              alt="TBC signature beverages lineup"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-serif text-2xl font-bold text-white">
                Start your TBC journey today
              </p>
              <p className="text-white/60 mt-2">
                Investment details provided upon inquiry
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">
              Franchise Inquiry
            </h3>
            <p className="text-brand-dark/50 text-sm mb-8">
              Interested in owning a TBC branch? Fill out the form below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl border border-brand-dark/10 bg-white px-5 py-3.5 text-sm text-brand-dark placeholder-brand-dark/30 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-xl border border-brand-dark/10 bg-white px-5 py-3.5 text-sm text-brand-dark placeholder-brand-dark/30 transition-all"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full rounded-xl border border-brand-dark/10 bg-white px-5 py-3.5 text-sm text-brand-dark placeholder-brand-dark/30 transition-all"
                />
                <input
                  type="text"
                  placeholder="Preferred Location"
                  className="w-full rounded-xl border border-brand-dark/10 bg-white px-5 py-3.5 text-sm text-brand-dark placeholder-brand-dark/30 transition-all"
                />
              </div>
              <select
                className="w-full rounded-xl border border-brand-dark/10 bg-white px-5 py-3.5 text-sm text-brand-dark/50 transition-all appearance-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Investment Budget Range
                </option>
                <option>Below ₱500,000</option>
                <option>₱500,000 - ₱1,000,000</option>
                <option>₱1,000,000 - ₱2,000,000</option>
                <option>Above ₱2,000,000</option>
              </select>
              <textarea
                placeholder="Tell us about yourself and why you'd like to franchise TBC..."
                rows={4}
                className="w-full rounded-xl border border-brand-dark/10 bg-white px-5 py-3.5 text-sm text-brand-dark placeholder-brand-dark/30 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-brown py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-brand-dark"
              >
                {submitted ? (
                  "Thank you! We'll reach out soon."
                ) : (
                  <>
                    <Send size={16} />
                    Submit Inquiry
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

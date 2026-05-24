"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, PartyPopper, Send } from "lucide-react";

const eventTypes = [
  {
    icon: Users,
    title: "Team Building",
    description:
      "Host your team gatherings in our cozy space with board games and unlimited drinks packages.",
  },
  {
    icon: PartyPopper,
    title: "Private Events",
    description:
      "Birthday celebrations, debuts, and special occasions — we'll set the mood just right.",
  },
  {
    icon: CalendarDays,
    title: "Corporate Functions",
    description:
      "Professional yet relaxed setting for meetings, workshops, and company socials.",
  },
];

export default function Events() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="events" className="py-24 lg:py-32 bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-brand-gold mb-4">
              Events & Gatherings
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Make It Special
              <br />
              <span className="text-brand-gold">With TBC</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12">
              Whether it's an intimate birthday party or a corporate team
              building, our spaces are designed to create memories. Open until
              4AM — perfect for celebrations that go late.
            </p>

            <div className="space-y-8">
              {eventTypes.map((type, i) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                    <type.icon size={22} className="text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{type.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
              <h3 className="font-serif text-2xl font-bold mb-2">
                Book Your Event
              </h3>
              <p className="text-white/40 text-sm mb-8">
                Fill out the form and we&apos;ll get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-3.5 text-sm text-white placeholder-white/30 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-3.5 text-sm text-white placeholder-white/30 transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-3.5 text-sm text-white placeholder-white/30 transition-all"
                  />
                  <select
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-3.5 text-sm text-white/50 transition-all appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Event Type
                    </option>
                    <option>Team Building</option>
                    <option>Birthday / Celebration</option>
                    <option>Corporate Function</option>
                    <option>Other</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Preferred Date & Time"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-3.5 text-sm text-white placeholder-white/30 transition-all"
                />
                <textarea
                  placeholder="Tell us about your event..."
                  rows={4}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-3.5 text-sm text-white placeholder-white/30 transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-gold py-4 text-sm font-semibold uppercase tracking-wider text-brand-dark transition-all hover:bg-white"
                >
                  {submitted ? (
                    "Thank you! We'll be in touch."
                  ) : (
                    <>
                      <Send size={16} />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

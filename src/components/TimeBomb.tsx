"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Mail, Coffee } from "lucide-react";

export default function TimeBomb() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => setVisible(true);
    const timer = setTimeout(show, 25000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) return;
    const interval = setTimeout(() => setVisible(true), 25000);
    return () => clearTimeout(interval);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVisible(false)}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-lg bg-brand-dark rounded-3xl overflow-hidden shadow-2xl pointer-events-auto">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-brown to-brand-gold" />

              <button
                onClick={() => setVisible(false)}
                className="absolute top-4 right-4 z-10 text-white/40 hover:text-white transition-colors p-1"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="px-8 pt-10 pb-8 text-center">
                <motion.div
                  initial={{ rotate: -10 }}
                  animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/15 mb-6"
                >
                  <Coffee size={28} className="text-brand-gold" />
                </motion.div>

                <h3 className="font-serif text-3xl font-bold text-white mb-3">
                  Interested?
                </h3>
                <ul className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm mx-auto space-y-2 text-left">
                  <li className="flex gap-2"><span className="text-brand-gold">&#10003;</span> Help customers find you on Google &amp; Maps</li>
                  <li className="flex gap-2"><span className="text-brand-gold">&#10003;</span> Automate event bookings &amp; inquiries 24/7</li>
                  <li className="flex gap-2"><span className="text-brand-gold">&#10003;</span> Build trust &amp; look professional to corporate clients</li>
                  <li className="flex gap-2"><span className="text-brand-gold">&#10003;</span> Turn your Facebook page into a full online presence</li>
                </ul>

                <div className="space-y-3">
                  <a
                    href="https://www.facebook.com/kayr4hhh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full rounded-xl bg-[#1877F2] py-4 px-6 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-lg"
                  >
                    <MessageCircle size={18} />
                    Message me on Facebook
                  </a>

                  <a
                    href="mailto:vincenttangaro905@gmail.com"
                    className="flex items-center justify-center gap-3 w-full rounded-xl bg-white/10 border border-white/10 py-4 px-6 text-sm font-semibold text-white transition-all hover:bg-white/20"
                  >
                    <Mail size={18} />
                    vincenttangaro905@gmail.com
                  </a>
                </div>

                <p className="text-white/25 text-xs mt-6">
                  Book a meeting — your competitors already have a website.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

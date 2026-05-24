"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Maria Santos",
    text: "The best milk tea place in QC! Their Okinawa Milk Tea is absolutely divine. The ambiance is perfect for studying or catching up with friends. Staff is super accommodating!",
    rating: 5,
    branch: "Fairlane Branch",
  },
  {
    name: "John Reyes",
    text: "TBC deserves an appraisal, to branch out internationally. Great coffee, professional service, and the board games are a nice touch. We always stay until the wee hours!",
    rating: 5,
    branch: "Commonwealth Branch",
  },
  {
    name: "Angela Cruz",
    text: "My go-to for late-night study sessions. The Honey Oats Iced Latte is a must-try! The fact they're open until 4AM is a blessing for us night owls. Affordable too!",
    rating: 5,
    branch: "Forest Hill Branch",
  },
  {
    name: "Mark Villanueva",
    text: "Had our team building here and everyone loved it! The drinks are consistently good across all branches. The Matcha Frappe and Loaded Fries combo is unbeatable.",
    rating: 4,
    branch: "Fairlane Branch",
  },
  {
    name: "Patricia Lim",
    text: "The atmosphere is so welcoming — feels like home. I come here 3 times a week now. Their Brown Sugar Espresso is addictive. Great place for hanging out with friends.",
    rating: 5,
    branch: "Commonwealth Branch",
  },
  {
    name: "David Tan",
    text: "Discovered TBC through a friend and now I'm hooked. Prices are very reasonable for the quality you get. The staff remembers your usual order — that personal touch matters!",
    rating: 5,
    branch: "Forest Hill Branch",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-brand-gold mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
            What Our Customers Say
          </h2>
          <p className="text-brand-dark/60 max-w-xl mx-auto text-lg">
            Rated 4.5/5 by our community. Here&apos;s why people keep coming
            back.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-brand-dark/5 relative"
            >
              <Quote
                size={32}
                className="text-brand-gold/20 absolute top-6 right-6"
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className={
                      j < review.rating
                        ? "fill-brand-gold text-brand-gold"
                        : "text-brand-dark/15"
                    }
                  />
                ))}
              </div>
              <p className="text-brand-dark/70 leading-relaxed mb-6 text-[15px]">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t border-brand-dark/5 pt-4">
                <p className="font-semibold text-brand-dark">{review.name}</p>
                <p className="text-sm text-brand-dark/40">{review.branch}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = [
  "All",
  "Coffee",
  "Milk Tea",
  "Frappes",
  "Signature",
  "Food",
] as const;

type Category = (typeof categories)[number];

interface MenuItem {
  name: string;
  price: string;
  category: Exclude<Category, "All">;
  description: string;
  badge?: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Honey Oats Iced Latte",
    price: "₱150",
    category: "Coffee",
    description: "Smooth espresso with honey, oats, and fresh milk over ice",
    badge: "Must Try",
  },
  {
    name: "Brown Sugar Espresso",
    price: "₱140",
    category: "Coffee",
    description: "Rich espresso layered with caramelized brown sugar",
    badge: "Must Try",
  },
  {
    name: "Hot Americano",
    price: "₱120",
    category: "Coffee",
    description: "Double-shot espresso with hot water, bold and smooth",
  },
  {
    name: "Sea Salt Latte",
    price: "₱155",
    category: "Coffee",
    description: "Creamy latte topped with a sea salt cream foam",
  },
  {
    name: "White Mocha",
    price: "₱160",
    category: "Coffee",
    description: "Velvety white chocolate blended with espresso and steamed milk",
  },
  {
    name: "Classic Milk Tea",
    price: "₱100",
    category: "Milk Tea",
    description: "Our original blend — bold black tea with creamy milk",
  },
  {
    name: "Okinawa Milk Tea",
    price: "₱120",
    category: "Milk Tea",
    description: "Brown sugar-infused milk tea with a rich, caramel finish",
    badge: "Popular",
  },
  {
    name: "Wintermelon Milk Tea",
    price: "₱110",
    category: "Milk Tea",
    description: "Sweet and refreshing wintermelon with creamy tea base",
  },
  {
    name: "Taro Milk Tea",
    price: "₱120",
    category: "Milk Tea",
    description: "Earthy taro root blended into a creamy, purple delight",
  },
  {
    name: "Matcha Frappe",
    price: "₱165",
    category: "Frappes",
    description: "Premium matcha blended with ice and topped with whipped cream",
    badge: "Best Seller",
  },
  {
    name: "Cookies & Cream Frappe",
    price: "₱160",
    category: "Frappes",
    description: "Crushed cookies blended into a creamy frozen treat",
  },
  {
    name: "Caramel Frappe",
    price: "₱155",
    category: "Frappes",
    description: "Buttery caramel swirled into a frosty blended coffee",
  },
  {
    name: "Strawberry Signature Tea",
    price: "₱130",
    category: "Signature",
    description: "Refreshing strawberry fruit tea with real fruit bits",
    badge: "New",
  },
  {
    name: "Mango Passion Fruit Tea",
    price: "₱135",
    category: "Signature",
    description: "Tropical mango and passion fruit in a chilled tea base",
  },
  {
    name: "Lychee Rose Tea",
    price: "₱140",
    category: "Signature",
    description: "Floral rose tea paired with sweet lychee flavor",
  },
  {
    name: "TBC Loaded Fries",
    price: "₱150",
    category: "Food",
    description: "Crispy fries loaded with cheese sauce, bacon bits, and spring onions",
    badge: "Popular",
  },
  {
    name: "Ham & Cheese Sandwich",
    price: "₱130",
    category: "Food",
    description: "Toasted sandwich with premium ham, melted cheese, and lettuce",
  },
  {
    name: "Chicken Pasta",
    price: "₱165",
    category: "Food",
    description: "Creamy chicken pasta with herbs and parmesan",
  },
];

export default function MenuSection() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <section id="menu" className="py-24 lg:py-32 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-brand-gold mb-4">
            Our Offerings
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
            The Menu
          </h2>
          <p className="text-brand-dark/60 max-w-xl mx-auto text-lg">
            Crafted with care, served with love. For the best taste, consume
            within 2 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                active === cat
                  ? "bg-brand-brown text-white shadow-md"
                  : "bg-white text-brand-dark/70 hover:bg-brand-brown/10 border border-brand-dark/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="relative mb-14">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 -z-10 opacity-5">
            <Image
              src="/images/must-try.png"
              alt=""
              fill
              className="object-contain blur-sm"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-dark/5 hover:border-brand-gold/30"
              >
                {item.badge && (
                  <span className="absolute top-4 right-4 text-xs font-semibold bg-brand-gold/15 text-brand-brown px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-lg font-semibold text-brand-dark group-hover:text-brand-brown transition-colors">
                    {item.name}
                  </h3>
                </div>
                <p className="text-sm text-brand-dark/50 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl font-bold text-brand-brown">
                    {item.price}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-brand-dark/30">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

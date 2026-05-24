import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TBC - The Big Cup | Brewing Bond Beyond Beverages",
  description:
    "TBC - The Big Cup. Premium coffee, milk tea, and signature beverages in Quezon City. Open daily 11AM-4AM. Franchising opportunities available.",
  keywords: [
    "TBC",
    "The Big Cup",
    "coffee shop",
    "milk tea",
    "Quezon City",
    "cafe",
    "franchise",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

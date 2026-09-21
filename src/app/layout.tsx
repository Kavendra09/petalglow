import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PetalGlow by Maahi | Hand-Poured Floral Scented Soy Candles",
  description:
    "Discover handcrafted luxury soy candles infused with delicate botanical essences, dried flower petals, and clean-burning cotton wicks. Bulgarian Rose, French Peony, Lavender, and curated gift boxes.",
  keywords: [
    "scented candles",
    "floral candles",
    "soy wax candles",
    "candle gift set",
    "aromatherapy candles",
    "rose scented candle",
    "PetalGlow by Maahi",
    "luxury home fragrance",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF8F5] text-[#2C221E] antialiased selection:bg-[#E8B4B8]/30 selection:text-[#7A283B]">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}

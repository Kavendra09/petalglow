"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowDown, Flame, ShieldCheck, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CANDLES } from "@/data/candles";

export default function HeroSection() {
  const { setQuickViewProduct, addToCart } = useCart();

  const featuredCandle1 = CANDLES.find((c) => c.id === "mandala-rose-tin") || CANDLES[0];
  const featuredCandle2 = CANDLES.find((c) => c.id === "rose-heart-candle") || CANDLES[1];
  const featuredCandle3 = CANDLES.find((c) => c.id === "couple-embrace-candle") || CANDLES[2];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/60">
      {/* Dynamic Glassmorphic Floral Background (bgc) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Ambient Glass Glow Orbs */}
        <div className="absolute -top-20 left-1/4 w-[480px] h-[480px] bg-gradient-to-br from-[#FCD5CE]/50 via-[#FDE2E4]/40 to-transparent rounded-full blur-3xl petal-drift" />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-gradient-to-bl from-[#FFE5D9]/50 via-[#FAD2E1]/40 to-transparent rounded-full blur-3xl petal-drift-delayed" />
        <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-[#D8E2DC]/40 via-[#F8EDEB]/50 to-transparent rounded-full blur-3xl petal-drift" />

        {/* Floating Glass Petal Elements */}
        <div className="absolute top-24 left-[10%] opacity-30 select-none text-4xl petal-drift">
          🌸
        </div>
        <div className="absolute top-1/2 right-[8%] opacity-35 select-none text-5xl petal-drift-delayed">
          🌺
        </div>
        <div className="absolute bottom-16 left-[22%] opacity-25 select-none text-3xl petal-drift">
          🌹
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Narrative & Call to Action */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Glass Pill Badge with Official Logo Emblem */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill border border-white/80 shadow-[0_4px_20px_rgba(180,80,104,0.08)]">
              <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[#DDA15E]">
                <Image
                  src="/images/logo.jpg"
                  alt="PetalGlow Emblem"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-[#913E52] text-xs font-bold tracking-wider uppercase">
                Handmade Candles • Made with Love
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-[#2C221E]">
              Handcrafted Blooms &{" "}
              <span className="italic font-serif font-light text-[#B25068] relative">
                Radiant Glass Glow
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#DDA15E]/60 to-[#B25068]/60 rounded-full" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#66554F] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Welcome to <strong className="text-[#2C221E]">PetalGlow by Maahi</strong>. Each candle is lovingly hand-sculpted and hand-poured in micro-batches with 100% natural soy wax, real botanical flower carvings, and pure calming aromas.
            </p>

            {/* Quality Glass Highlights */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs font-semibold text-[#5C4D46]">
              <div className="px-3 py-1.5 rounded-xl glass-card flex items-center gap-1.5">
                <span className="text-base">🌸</span>
                <span>Handmade Flower Carvings</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl glass-card flex items-center gap-1.5">
                <Flame size={15} className="text-[#DDA15E]" />
                <span>Clean Soy Flame</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl glass-card flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-[#7B9E87]" />
                <span>100% Non-Toxic</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#candles-collection"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2C221E] text-[#FAF8F5] hover:bg-[#B25068] transition-colors font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                <span>Shop Floral Candles</span>
                <ArrowDown size={16} />
              </a>
              <a
                href="#scent-finder"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full glass-card hover:border-[#B25068] text-[#4A3E39] hover:text-[#B25068] transition-all font-semibold text-sm sm:text-base"
              >
                <Sparkles size={16} className="text-[#DDA15E]" />
                <span>Find Your Scent</span>
              </a>
            </div>

            {/* Social Proof */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-[#7A6B65]">
              <div className="flex text-[#F4A261] text-sm">
                {"★".repeat(5)}
              </div>
              <span>Thank you for supporting our small handmade business 💖</span>
            </div>
          </div>

          {/* Right Visual Display: Glassmorphic Trio Showcase of Real Products */}
          <div className="lg:col-span-6 relative">
            {/* Glass Container Card */}
            <div className="relative rounded-3xl p-4 sm:p-6 glass-panel overflow-hidden shadow-2xl border border-white/80">
              
              {/* Background ambient reflection */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#FCD5CE]/30 rounded-full blur-2xl pointer-events-none" />

              {/* Main Featured Real Candle: Mandala Lotus Tin */}
              <div
                onClick={() => setQuickViewProduct(featuredCandle1)}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer group shadow-md border border-white/70 bg-white"
              >
                <Image
                  src={featuredCandle1.image}
                  alt={featuredCandle1.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Top Glass Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-pill text-[11px] font-bold text-[#7A283B] border border-white shadow">
                  ✨ Handcrafted by Maahi
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#FCD5CE]">
                      Crowned with Pink Rose Flower
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold">
                      {featuredCandle1.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-white/70 line-through mr-1">₹{featuredCandle1.originalPrice}</span>
                    <span className="text-base sm:text-lg font-bold text-[#FFE5D9]">₹{featuredCandle1.price}</span>
                  </div>
                </div>
              </div>

              {/* Two Mini Real Sculptures Cards (Heart & Couple Embrace) */}
              <div className="grid grid-cols-2 gap-3.5 mt-3.5">
                {/* 1. Rose Heart Sculpture */}
                <div
                  onClick={() => setQuickViewProduct(featuredCandle2)}
                  className="p-2.5 rounded-2xl glass-card hover:bg-white transition cursor-pointer flex items-center gap-3 group border border-white/80"
                >
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 shadow-sm border border-white">
                    <Image
                      src={featuredCandle2.image}
                      alt={featuredCandle2.name}
                      fill
                      sizes="80px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#B25068] block">
                      Rose Heart
                    </span>
                    <h4 className="font-serif text-xs font-bold text-[#2C221E] truncate group-hover:text-[#B25068] transition-colors">
                      {featuredCandle2.name}
                    </h4>
                    <span className="text-xs font-bold text-[#2C221E] mt-0.5 block">
                      ₹{featuredCandle2.price}
                    </span>
                  </div>
                </div>

                {/* 2. Couple Embrace Candle */}
                <div
                  onClick={() => setQuickViewProduct(featuredCandle3)}
                  className="p-2.5 rounded-2xl glass-card hover:bg-white transition cursor-pointer flex items-center gap-3 group border border-white/80"
                >
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 shadow-sm border border-white">
                    <Image
                      src={featuredCandle3.image}
                      alt={featuredCandle3.name}
                      fill
                      sizes="80px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#B25068] block">
                      Soulmate Twin
                    </span>
                    <h4 className="font-serif text-xs font-bold text-[#2C221E] truncate group-hover:text-[#B25068] transition-colors">
                      {featuredCandle3.name}
                    </h4>
                    <span className="text-xs font-bold text-[#2C221E] mt-0.5 block">
                      ₹{featuredCandle3.price}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Official Logo Watermark Glass Stamp in Corner */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 p-2 rounded-2xl glass-panel items-center gap-2.5 shadow-xl border border-white/90">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#DDA15E] shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="PetalGlow Brand Seal"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="text-[11px] leading-tight">
                <strong className="block text-[#2C221E]">PetalGlow Authentic</strong>
                <span className="text-[#8C6D65]">@petalglowbymaahi</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

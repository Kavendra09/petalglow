"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CANDLES, CandleProduct } from "@/data/candles";
import { useCart } from "@/context/CartContext";
import { Sparkles, ShoppingBag, ArrowRight } from "lucide-react";

export default function ScentFinder() {
  const { setQuickViewProduct, addToCart } = useCart();

  const [selectedMood, setSelectedMood] = useState<string>("relaxation");
  const [selectedFlower, setSelectedFlower] = useState<string>("rose");

  const moods = [
    { id: "relaxation", label: "Deep Rest & Sleep", emoji: "🌙" },
    { id: "romance", label: "Romantic Floral Sanctuary", emoji: "🌹" },
    { id: "energy", label: "Bright & Refreshing", emoji: "🍊" },
    { id: "gift", label: "Gifting & Celebrations", emoji: "🎁" },
  ];

  const flowers = [
    { id: "rose", label: "Bulgarian Rose", flowerIcon: "🌹" },
    { id: "lavender", label: "French Lavender", flowerIcon: "🪻" },
    { id: "jasmine", label: "Star Jasmine", flowerIcon: "🤍" },
    { id: "peony", label: "Pink Peony", flowerIcon: "🌸" },
  ];

  // Match algorithm
  const getRecommendation = (): CandleProduct => {
    if (selectedMood === "gift") {
      return CANDLES.find((c) => c.id === "petal-glow-botanical-gift-set") || CANDLES[0];
    }
    if (selectedMood === "relaxation" || selectedFlower === "lavender") {
      return CANDLES.find((c) => c.id === "lavender-citrus-candle") || CANDLES[0];
    }
    if (selectedMood === "romance" && selectedFlower === "peony") {
      return CANDLES.find((c) => c.id === "french-peony-candle") || CANDLES[0];
    }
    if (selectedFlower === "jasmine") {
      return CANDLES.find((c) => c.id === "jasmine-white-tea-candle") || CANDLES[0];
    }
    if (selectedMood === "energy") {
      return CANDLES.find((c) => c.id === "neroli-orange-blossom-candle") || CANDLES[0];
    }
    return CANDLES[0];
  };

  const match = getRecommendation();

  return (
    <section
      id="scent-finder"
      className="py-16 sm:py-20 bg-gradient-to-b from-[#FFF9F7] via-[#FAF6F2] to-[#FAF8F5] border-y border-[#EFE5DC] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0ED] border border-[#ECD1CA] text-[#913E52] text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={13} className="text-[#DDA15E]" />
            <span>Interactive Fragrance Quiz</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C221E]">
            Find Your Signature <span className="italic text-[#B25068]">Floral Scent</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#705F58]">
            Answer two quick questions to discover the candle blend hand-crafted for your mood and space.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EDE2D8] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Selectors */}
          <div className="lg:col-span-7 space-y-6">
            {/* Question 1: Mood */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8C6D65] mb-3">
                1. What atmosphere do you want to create?
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {moods.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMood(m.id)}
                    className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                      selectedMood === m.id
                        ? "border-[#B25068] bg-[#FAF0ED] text-[#2C221E] shadow-sm font-semibold"
                        : "border-[#E5DAD4] bg-white text-[#66554F] hover:bg-[#FAF8F5]"
                    }`}
                  >
                    <span className="text-lg">{m.emoji}</span>
                    <span>{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Flower preference */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8C6D65] mb-3">
                2. Which botanical flower note speaks to your soul?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {flowers.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFlower(f.id)}
                    className={`p-3 rounded-xl border text-center text-xs font-medium transition-all flex flex-col items-center gap-1 ${
                      selectedFlower === f.id
                        ? "border-[#B25068] bg-[#FAF0ED] text-[#2C221E] shadow-sm font-semibold"
                        : "border-[#E5DAD4] bg-white text-[#66554F] hover:bg-[#FAF8F5]"
                    }`}
                  >
                    <span className="text-xl">{f.flowerIcon}</span>
                    <span>{f.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Recommendation Card */}
          <div className="lg:col-span-5 bg-[#FAF7F3] rounded-2xl p-5 border border-[#ECE2D8] flex flex-col sm:flex-row lg:flex-col items-center gap-5">
            <div className="relative h-44 w-44 rounded-xl overflow-hidden shadow-md shrink-0 border border-[#EDE2D8]">
              <Image
                src={match.image}
                alt={match.name}
                fill
                className="object-cover"
              />
              <span className="absolute top-2 left-2 bg-[#B25068] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full shadow">
                Your Match
              </span>
            </div>

            <div className="text-center sm:text-left lg:text-center space-y-2 flex-1">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#8C6D65]">
                {match.categoryLabel}
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-semibold text-[#2C221E]">
                {match.name}
              </h4>
              <p className="text-xs text-[#705F58] line-clamp-2">
                {match.tagline}
              </p>
              <div className="text-sm font-bold text-[#2C221E]">
                ₹{match.price}{" "}
                <span className="text-xs text-[#9E8B85] line-through font-normal">
                  ₹{match.originalPrice}
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-2">
                <button
                  onClick={() => addToCart(match, 1)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#2C221E] hover:bg-[#B25068] text-white text-xs font-semibold transition flex items-center justify-center gap-1.5 shadow"
                >
                  <ShoppingBag size={14} />
                  <span>Add Matched Candle to Bag</span>
                </button>
                <button
                  onClick={() => setQuickViewProduct(match)}
                  className="w-full py-2 px-4 rounded-xl bg-white border border-[#DACEC8] hover:border-[#B25068] text-[#2C221E] text-xs font-semibold transition"
                >
                  Explore Scent Profile
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

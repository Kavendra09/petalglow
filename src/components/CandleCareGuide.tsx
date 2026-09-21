"use client";

import React from "react";
import { Scissors, Clock, Sparkles, Wind } from "lucide-react";

export default function CandleCareGuide() {
  const tips = [
    {
      icon: Clock,
      title: "The Initial Memory Burn",
      description:
        "On your first lighting, allow the candle to burn for 2 to 3 hours until the melted wax pool reaches all edges of the jar. This prevents tunneling and ensures an even burn.",
    },
    {
      icon: Scissors,
      title: "Trim Wick to 1/4 Inch",
      description:
        "Before every relight, trim your lead-free cotton wick to approximately 5mm (1/4\"). This ensures a tranquil, soot-free flame and maximizes burn longevity.",
    },
    {
      icon: Sparkles,
      title: "Botanical Petal Safety",
      description:
        "Our dried rose & jasmine flower petals rest naturally on the wax surface. As the wax pool liquefies, the dried botanicals release their gentle essential oils.",
    },
    {
      icon: Wind,
      title: "Gentle Extinguishment",
      description:
        "Use a candle snuffer or gently cover with the wooden lid rather than blowing out. This preserves the delicate floral scent lingering in your room without smoke.",
    },
  ];

  return (
    <section id="candle-care" className="py-16 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B25068]">
            Artisan Rituals & Tips
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C221E]">
            How to Cherish Your <span className="italic text-[#B25068]">Soy Candle</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#705F58]">
            Follow these mindful ritual steps to enjoy up to 50+ hours of pure, clean-burning floral aromatherapy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, idx) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.title}
                className="bg-white rounded-2xl p-6 border border-[#ECE2D8] shadow-sm hover:shadow-md transition space-y-3 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0ED] text-[#B25068] flex items-center justify-center border border-[#F0D8D2]">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#A3928B]">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-serif text-base font-semibold text-[#2C221E]">
                  {tip.title}
                </h3>
                <p className="text-xs text-[#66554F] leading-relaxed flex-1">
                  {tip.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

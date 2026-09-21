"use client";

import React from "react";
import { Star, ShieldCheck, Heart } from "lucide-react";

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Aanya Singhania",
      city: "Mumbai",
      candle: "Bulgarian Rose & Velvet Petals",
      rating: 5,
      date: "Verified Buyer • 2 days ago",
      comment:
        "The scent is heavenly! You can tell it's real Damask rose essential oil and not synthetic perfumed wax. The dried petals on top look so aesthetic on my nightstand. Burning for 3 hours every evening and barely 1/4th used.",
    },
    {
      name: "Rohit & Meera K.",
      city: "Bengaluru",
      candle: "PetalGlow Luxury Botanical Gift Set",
      rating: 5,
      date: "Verified Buyer • 1 week ago",
      comment:
        "Ordered the 4-candle gift box for our anniversary. The presentation with the satin ribbon and gold tins took our breath away. French Peony and Lavender Citrus are our absolute favorites. 10/10 ordering again!",
    },
    {
      name: "Devika Sharma",
      city: "New Delhi",
      candle: "French Lavender & Bergamot Citrus",
      rating: 5,
      date: "Verified Buyer • 2 weeks ago",
      comment:
        "I light this 30 minutes before bedtime while reading. It creates such an authentic calming aura. No black smoke at all because of the pure soy wax. Customer care on WhatsApp was also very prompt and sweet!",
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-[#FAF6F2] border-t border-[#EFE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0ED] text-[#913E52] text-xs font-semibold uppercase tracking-wider border border-[#ECD1CA]">
            <Heart size={13} className="text-[#B25068]" />
            <span>Community Love</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C221E]">
            Whispers from Our <span className="italic text-[#B25068]">Candle Lovers</span>
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1 text-sm text-[#5C4D46]">
            <div className="flex text-[#F4A261]">
              {"★".repeat(5)}
            </div>
            <span className="font-bold text-[#2C221E]">4.9 / 5.0</span>
            <span>across 600+ verified floral candle orders</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="bg-white rounded-2xl p-6 border border-[#EDE2D8] shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#F4A261] text-sm">
                    {"★".repeat(rev.rating)}
                  </div>
                  <span className="text-[10px] text-[#A3928B]">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#F2EAE4] flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-xs text-[#2C221E] flex items-center gap-1">
                    <span>{rev.name}</span>
                    <span className="text-[11px] text-[#8C6D65] font-normal">({rev.city})</span>
                  </h4>
                  <p className="text-[10px] text-[#B25068] font-medium mt-0.5">
                    🌸 Purchased: {rev.candle}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-[#25D366] font-semibold">
                  <ShieldCheck size={14} />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

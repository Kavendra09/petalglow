"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CandleProduct } from "@/data/candles";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Eye, Flame, Check, Sparkles } from "lucide-react";

interface CandleCardProps {
  candle: CandleProduct;
}

export default function CandleCard({ candle }: CandleCardProps) {
  const { addToCart, setQuickViewProduct, setIsCheckoutOpen } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(candle, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleInstantBuy = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(candle, 1);
    setIsCheckoutOpen(true);
  };

  const discountPercent = Math.round(
    ((candle.originalPrice - candle.price) / candle.originalPrice) * 100
  );

  return (
    <div
      onClick={() => setQuickViewProduct(candle)}
      className="group relative bg-white/80 backdrop-blur-md rounded-3xl border border-white/90 overflow-hidden shadow-[0_8px_25px_rgba(180,80,104,0.05)] hover:shadow-[0_20px_45px_rgba(180,80,104,0.14)] transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
    >
      {/* Image Container with Badges & Quick View Overlay */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#FAF5F2]">
        <Image
          src={candle.image}
          alt={candle.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {candle.badge && (
            <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#B25068] text-white shadow-md">
              {candle.badge}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold glass-pill text-[#913E52] border border-white/80 shadow-sm w-fit">
              Save {discountPercent}%
            </span>
          )}
        </div>

        {/* Quick View Button on Image Hover */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setQuickViewProduct(candle);
          }}
          className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/90 backdrop-blur-md text-[#2C221E] hover:text-[#B25068] hover:bg-white shadow-md transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
          title="Quick View Details & Scent Pyramid"
          aria-label="Quick View"
        >
          <Eye size={17} />
        </button>

        {/* Burn Time Badge */}
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1">
          <Flame size={12} className="text-[#F4A261]" />
          <span>{candle.burnTime.split("-")[0].trim()} Burn</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category & Star Rating */}
          <div className="flex items-center justify-between text-xs text-[#8C6D65] mb-1">
            <span className="uppercase font-semibold tracking-wider text-[10px] text-[#B25068]">
              {candle.categoryLabel}
            </span>
            <div className="flex items-center gap-1 font-semibold text-[#2C221E]">
              <span className="text-[#F4A261]">★</span>
              <span>{candle.rating.toFixed(1)}</span>
              <span className="text-[#A3928B] font-normal">({candle.reviewsCount})</span>
            </div>
          </div>

          {/* Candle Title */}
          <h3 className="font-serif text-lg font-semibold text-[#2C221E] group-hover:text-[#B25068] transition-colors line-clamp-1">
            {candle.name}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-[#705F58] line-clamp-2 mt-1 leading-relaxed">
            {candle.tagline}
          </p>

          {/* Fragrance Key Notes Pills */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {candle.notes.heart.slice(0, 2).map((note) => (
              <span
                key={note}
                className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#FAF5F2] text-[#6A5750] border border-[#EFE5DE]"
              >
                🌸 {note}
              </span>
            ))}
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-[#FAF5F2] text-[#8C6D65] border border-[#EFE5DE]">
              +{candle.notes.base[0]}
            </span>
          </div>
        </div>

        {/* Pricing & Action Buttons */}
        <div className="pt-2 border-t border-[#F2EAE4] space-y-2.5">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-[#2C221E]">
                ₹{candle.price}
              </span>
              <span className="text-xs text-[#9E8B85] line-through">
                ₹{candle.originalPrice}
              </span>
            </div>
            <span className="text-[11px] text-[#8C6D65] font-medium">
              {candle.weight}
            </span>
          </div>

          {/* Dual Action: Add to Bag and Buy Now */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAddToCart}
              className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 border ${
                isAdded
                  ? "bg-[#25D366] text-white border-[#25D366]"
                  : "bg-white text-[#2C221E] border-[#DACEC8] hover:border-[#B25068] hover:text-[#B25068] hover:bg-[#FAF5F2]"
              }`}
            >
              {isAdded ? (
                <>
                  <Check size={14} />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={14} />
                  <span>Add to Bag</span>
                </>
              )}
            </button>

            <button
              onClick={handleInstantBuy}
              className="py-2 px-3 rounded-xl text-xs font-semibold bg-[#2C221E] hover:bg-[#B25068] text-white transition-colors flex items-center justify-center gap-1 shadow-sm"
            >
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

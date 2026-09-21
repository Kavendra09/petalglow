"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, ShoppingBag, MessageCircle, Flame, ShieldCheck, Sparkles, Check } from "lucide-react";

export default function ProductModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, setIsCheckoutOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!quickViewProduct) return null;

  const candle = quickViewProduct;

  const handleAdd = () => {
    addToCart(candle, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setQuickViewProduct(null);
    }, 1000);
  };

  const handleDirectOrder = () => {
    addToCart(candle, quantity);
    setQuickViewProduct(null);
    setIsCheckoutOpen(true);
  };

  const discountPercent = Math.round(
    ((candle.originalPrice - candle.price) / candle.originalPrice) * 100
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#EDE2D8] overflow-hidden max-h-[92vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-[#2C221E] hover:bg-[#FAF0ED] hover:text-[#B25068] transition shadow-md"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Left Side: Product Image Showcase */}
        <div className="md:w-1/2 relative bg-[#FAF5F2] min-h-[280px] md:min-h-full">
          <Image
            src={candle.image}
            alt={candle.name}
            fill
            className="object-cover"
            priority
          />
          {candle.badge && (
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#B25068] text-white shadow-md">
              {candle.badge}
            </span>
          )}
        </div>

        {/* Right Side: Detailed Scent Profile & Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[70vh] md:max-h-[90vh] space-y-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#B25068] uppercase tracking-wider mb-1">
              <span>🌸 {candle.categoryLabel}</span>
              <span>•</span>
              <span className="text-[#8C6D65]">{candle.weight}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C221E]">
              {candle.name}
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-[#F4A261] text-sm">
                {"★".repeat(Math.floor(candle.rating))}
              </div>
              <span className="text-xs font-bold text-[#2C221E]">{candle.rating}</span>
              <span className="text-xs text-[#8C6D65]">({candle.reviewsCount} customer reviews)</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-[#2C221E]">₹{candle.price}</span>
            <span className="text-sm text-[#9E8B85] line-through">₹{candle.originalPrice}</span>
            <span className="text-xs font-bold text-[#913E52] bg-[#FAF0ED] border border-[#ECD1CA] px-2 py-0.5 rounded-full">
              Save {discountPercent}%
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#5C4D46] leading-relaxed">
            {candle.description}
          </p>

          {/* Fragrance Pyramid Breakdown */}
          <div className="bg-[#FAF7F3] rounded-2xl p-4 border border-[#ECE2D8] space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6D65] flex items-center gap-1.5">
              <Sparkles size={13} className="text-[#DDA15E]" />
              <span>Fragrance Notes Pyramid</span>
            </h4>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-white rounded-xl p-2 border border-[#EDE4DC]">
                <span className="block text-[10px] text-[#A3928B] uppercase font-semibold">Top Notes</span>
                <span className="font-medium text-[#2C221E] text-[11px] mt-0.5 block">
                  {candle.notes.top.join(", ")}
                </span>
              </div>
              <div className="bg-white rounded-xl p-2 border border-[#E8B4B8]/60 bg-[#FFF9F9]">
                <span className="block text-[10px] text-[#B25068] uppercase font-semibold">Heart Notes</span>
                <span className="font-semibold text-[#5F1A2A] text-[11px] mt-0.5 block">
                  {candle.notes.heart.join(", ")}
                </span>
              </div>
              <div className="bg-white rounded-xl p-2 border border-[#EDE4DC]">
                <span className="block text-[10px] text-[#A3928B] uppercase font-semibold">Base Notes</span>
                <span className="font-medium text-[#2C221E] text-[11px] mt-0.5 block">
                  {candle.notes.base.join(", ")}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-2 gap-2 text-xs text-[#5C4D46]">
            <div className="flex items-center gap-2">
              <Flame size={15} className="text-[#DDA15E]" />
              <span>{candle.burnTime} burn</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-[#7B9E87]" />
              <span>100% Organic Soy Wax</span>
            </div>
          </div>

          {/* Quantity Selector & Action Buttons */}
          <div className="pt-2 border-t border-[#EFE8DF] space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-[#5C4D46]">Quantity:</span>
              <div className="flex items-center border border-[#DACEC8] rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-sm font-semibold hover:bg-[#FAF5F2] text-[#2C221E]"
                >
                  -
                </button>
                <span className="px-3 py-1 text-xs font-bold text-[#2C221E]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-sm font-semibold hover:bg-[#FAF5F2] text-[#2C221E]"
                >
                  +
                </button>
              </div>
              <span className="text-xs text-[#8C6D65]">
                Subtotal: <strong className="text-[#2C221E]">₹{candle.price * quantity}</strong>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleAdd}
                className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 border transition ${
                  isAdded
                    ? "bg-[#25D366] text-white border-[#25D366]"
                    : "bg-white text-[#2C221E] border-[#DACEC8] hover:border-[#B25068] hover:text-[#B25068]"
                }`}
              >
                {isAdded ? (
                  <>
                    <Check size={16} />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDirectOrder}
                className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-[#2C221E] hover:bg-[#B25068] text-white transition flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Order Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

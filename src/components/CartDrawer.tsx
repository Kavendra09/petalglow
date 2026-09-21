"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, ShoppingBag, Trash2, ArrowRight, MessageCircle, Sparkles, Tag, Check } from "lucide-react";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    discount,
    shipping,
    finalTotal,
    couponCode,
    applyCoupon,
    removeCoupon,
    setIsCheckoutOpen,
    giftMessage,
    setGiftMessage,
    generateWhatsAppOrderUrl,
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState("");
  const [couponFeedback, setCouponFeedback] = useState<{ success?: boolean; text?: string } | null>(null);
  const [showGiftInput, setShowGiftInput] = useState(giftMessage.length > 0);

  if (!isCartOpen) return null;

  const freeShippingGoal = 999;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingGoal) * 100));
  const remainingForFree = Math.max(0, freeShippingGoal - subtotal);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon) return;
    const res = applyCoupon(inputCoupon);
    setCouponFeedback({ success: res.success, text: res.message });
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleWhatsAppOrder = () => {
    const url = generateWhatsAppOrderUrl();
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl border-l border-[#EDE2D8] flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#EFE8DF] flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-[#B25068]" />
              <h2 className="font-serif text-xl font-semibold text-[#2C221E]">
                Your Scented Bag
              </h2>
              <span className="text-xs text-[#8C6D65] font-medium">
                ({items.reduce((acc, i) => acc + i.quantity, 0)} items)
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full text-[#66554F] hover:text-[#2C221E] hover:bg-[#F2ECE6] transition"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#FFF8F6] border-b border-[#F5E6E2] p-3.5 px-5">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
              {remainingForFree === 0 ? (
                <span className="text-[#25D366] font-semibold flex items-center gap-1">
                  <span>🎉</span> You unlocked Free Express Shipping!
                </span>
              ) : (
                <span className="text-[#7A283B]">
                  Add <strong>₹{remainingForFree}</strong> more to get <strong>FREE Delivery</strong>
                </span>
              )}
              <span className="text-[#8C6D65] font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 bg-[#F2DDD9] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#DDA15E] to-[#B25068] transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Content: Empty or List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#FAF5F2] flex items-center justify-center text-3xl">
                  🕯️
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#2C221E]">
                  Your bag is empty
                </h3>
                <p className="text-xs text-[#8C6D65] max-w-xs mx-auto">
                  Explore our artisanal hand-poured floral candles and bring the fragrance of fresh blooms to your sanctuary.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#2C221E] text-white text-xs font-semibold hover:bg-[#B25068] transition shadow"
                >
                  Browse Candle Collection
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3.5 p-3 rounded-2xl border border-[#F0E6DE] bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] transition"
                >
                  <div className="relative h-20 w-20 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-[#EDE2D8]">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-serif text-sm font-semibold text-[#2C221E] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <p className="text-[11px] text-[#8C6D65]">
                          {item.product.weight}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-[#B59C96] hover:text-[#B25068] transition p-1"
                        title="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#DACEC8] rounded-lg overflow-hidden bg-white">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2.5 py-0.5 text-xs font-semibold hover:bg-[#FAF5F2] text-[#2C221E]"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-[#2C221E]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2.5 py-0.5 text-xs font-semibold hover:bg-[#FAF5F2] text-[#2C221E]"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-bold text-[#2C221E]">
                          ₹{item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Personalized Gift Message Accordion */}
            {items.length > 0 && (
              <div className="pt-2">
                <button
                  onClick={() => setShowGiftInput(!showGiftInput)}
                  className="text-xs font-semibold text-[#913E52] hover:text-[#5F1A2A] flex items-center gap-1.5 transition"
                >
                  <Sparkles size={14} className="text-[#DDA15E]" />
                  <span>
                    {showGiftInput ? "Hide Gift Note" : "+ Add a Free Floral Gift Card Note"}
                  </span>
                </button>
                {showGiftInput && (
                  <textarea
                    rows={2}
                    value={giftMessage}
                    onChange={(e) => setGiftMessage(e.target.value)}
                    placeholder="Write a sweet message to include on our handwritten floral botanical card..."
                    className="mt-2 w-full text-xs p-3 rounded-xl border border-[#E5DAD4] focus:outline-none focus:border-[#B25068] bg-[#FAF8F5] text-[#2C221E]"
                  />
                )}
              </div>
            )}
          </div>

          {/* Footer & Checkout Area */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#EFE8DF] bg-[#FAF8F5] space-y-4">
              {/* Coupon Code Input */}
              <div>
                {couponCode ? (
                  <div className="flex items-center justify-between bg-[#EAF7EE] text-[#1E7E34] px-3 py-2 rounded-xl text-xs font-medium border border-[#C3E6CB]">
                    <div className="flex items-center gap-1.5">
                      <Tag size={13} />
                      <span>
                        Code <strong>{couponCode}</strong> applied (-₹{discount})
                      </span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-xs underline hover:text-[#155724] font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApply} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag size={14} className="absolute left-3 top-2.5 text-[#A3928B]" />
                      <input
                        type="text"
                        placeholder="Discount code (e.g. PETALGLOW10)"
                        value={inputCoupon}
                        onChange={(e) => setInputCoupon(e.target.value)}
                        className="w-full text-xs pl-8 pr-3 py-2 rounded-xl border border-[#E5DAD4] focus:outline-none focus:border-[#B25068] bg-white uppercase text-[#2C221E]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-white border border-[#DACEC8] hover:border-[#B25068] hover:text-[#B25068] text-xs font-semibold text-[#2C221E] transition shadow-sm"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponFeedback && (
                  <p
                    className={`text-[11px] mt-1 ${
                      couponFeedback.success ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {couponFeedback.text}
                  </p>
                )}
              </div>

              {/* Price Calculation Summary */}
              <div className="space-y-1.5 text-xs text-[#66554F]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#2C221E]">₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#B25068]">
                    <span>Floral Discount</span>
                    <span className="font-semibold">-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-[#2C221E]">
                    {shipping === 0 ? (
                      <span className="text-[#25D366] font-bold uppercase text-[11px]">
                        Free
                      </span>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#2C221E] pt-2 border-t border-[#EDE2D8]">
                  <span>Grand Total</span>
                  <span className="text-base">₹{finalTotal}</span>
                </div>
              </div>

              {/* Dual Ordering Buttons */}
              <div className="space-y-2 pt-1">
                {/* 1. Direct Checkout Button */}
                <button
                  onClick={handleProceedCheckout}
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#2C221E] hover:bg-[#B25068] text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Proceed to Online Checkout</span>
                  <ArrowRight size={16} />
                </button>

                {/* 2. Order via WhatsApp Button */}
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle size={17} />
                  <span>Order via WhatsApp (Instant Confirmation)</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[10px] text-[#8C6D65] pt-1">
                <span>🔒 100% Secure Checkout</span>
                <span>•</span>
                <span>✨ Handcrafted with Care</span>
                <span>•</span>
                <span>🚚 Pan-India Delivery</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart, CustomerOrderDetails } from "@/context/CartContext";
import confetti from "canvas-confetti";
import { X, CheckCircle2, MessageCircle, ShieldCheck, ArrowRight, Sparkles, Truck } from "lucide-react";

export default function CheckoutModal() {
  const {
    items,
    isCheckoutOpen,
    setIsCheckoutOpen,
    subtotal,
    discount,
    shipping,
    finalTotal,
    couponCode,
    clearCart,
    giftMessage,
    generateWhatsAppOrderUrl,
  } = useCart();

  const [form, setForm] = useState<CustomerOrderDetails>({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "COD",
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [placedOrderSummary, setPlacedOrderSummary] = useState<{
    items: typeof items;
    total: number;
    details: CustomerOrderDetails;
    id: string;
  } | null>(null);

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const generatedId = `PG-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setPlacedOrderSummary({
      items: [...items],
      total: finalTotal,
      details: { ...form, giftNote: giftMessage },
      id: generatedId,
    });

    // Fire floral celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D47A88", "#E8B4B8", "#DDA15E", "#BC6C25", "#FFFFFF"],
      });
    } catch {}

    setOrderConfirmed(true);
    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setOrderConfirmed(false);
    setPlacedOrderSummary(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#EDE2D8] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#EFE8DF] flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#DDA15E] shrink-0 bg-white shadow-sm">
              <Image
                src="/images/logo.jpg"
                alt="PetalGlow Logo"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#2C221E]">
                {orderConfirmed ? "Order Confirmed!" : "Complete Your Order"}
              </h2>
              <p className="text-xs text-[#8C6D65]">
                {orderConfirmed
                  ? "Thank you for supporting PetalGlow by Maahi"
                  : "Handcrafted floral candles shipped directly to your door"}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full text-[#66554F] hover:text-[#2C221E] hover:bg-[#F2ECE6] transition"
            aria-label="Close checkout"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto max-h-[75vh]">
          {orderConfirmed && placedOrderSummary ? (
            <div className="text-center py-6 space-y-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto border-2 border-[#DDA15E] shadow-lg bg-white">
                <Image
                  src="/images/logo.jpg"
                  alt="PetalGlow by Maahi"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B25068] bg-[#FAF0ED] px-3 py-1 rounded-full border border-[#ECD1CA]">
                  Order ID: {placedOrderSummary.id}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C221E] mt-3">
                  Your Candles Are Being Prepared!
                </h3>
                <p className="text-xs sm:text-sm text-[#66554F] max-w-md mx-auto mt-2 leading-relaxed">
                  We have received your order. Maahi is carefully packing your hand-poured candles with natural botanicals and fragrant dried petals.
                </p>
              </div>

              {/* Order Invoice Summary Box */}
              <div className="bg-[#FAF7F4] rounded-2xl p-4 sm:p-5 border border-[#ECE2D8] text-left max-w-lg mx-auto space-y-3">
                <div className="flex justify-between items-center text-xs text-[#8C6D65] border-b border-[#EDE4DC] pb-2">
                  <span>Delivery Address:</span>
                  <span className="font-semibold text-[#2C221E] text-right">
                    {placedOrderSummary.details.fullName}, {placedOrderSummary.details.city} ({placedOrderSummary.details.pincode})
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-[#8C6D65] border-b border-[#EDE4DC] pb-2">
                  <span>Payment Method:</span>
                  <span className="font-bold text-[#2C221E]">
                    {placedOrderSummary.details.paymentMethod === "COD"
                      ? "Cash on Delivery"
                      : placedOrderSummary.details.paymentMethod}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold text-[#2C221E] pt-1">
                  <span>Total Amount:</span>
                  <span className="text-base text-[#B25068]">₹{placedOrderSummary.total}</span>
                </div>
              </div>

              {/* Action Buttons on Confirmation */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 max-w-md mx-auto">
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(
                    `Hello Maahi! I just placed order ${placedOrderSummary.id} on the PetalGlow website for ₹${placedOrderSummary.total}. Looking forward to receiving my candles! 🌸`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#25D366] text-white font-semibold text-xs sm:text-sm hover:bg-[#20BA5A] transition shadow"
                >
                  <MessageCircle size={16} />
                  <span>Notify Maahi on WhatsApp</span>
                </a>

                <button
                  onClick={handleClose}
                  className="py-3 px-5 rounded-2xl bg-[#2C221E] text-white font-semibold text-xs sm:text-sm hover:bg-[#B25068] transition"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Order Summary Snapshot */}
              <div className="bg-[#FAF7F3] rounded-2xl p-4 border border-[#ECE2D8]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6D65] mb-2 flex items-center justify-between">
                  <span>Selected Candles ({items.reduce((s, i) => s + i.quantity, 0)})</span>
                  <span className="font-bold text-[#2C221E]">Total: ₹{finalTotal}</span>
                </h4>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-2 bg-white px-2.5 py-1.5 rounded-xl border border-[#EDE4DC] shrink-0 text-xs"
                    >
                      <div className="relative h-7 w-7 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="font-semibold text-[#2C221E]">
                        {item.product.name.split("&")[0].trim()}
                      </span>
                      <span className="text-[#8C6D65]">×{item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Delivery Fields */}
              <div className="space-y-4">
                <h3 className="font-serif text-base font-semibold text-[#2C221E] border-b border-[#F0E6DE] pb-1.5 flex items-center gap-1.5">
                  <Truck size={17} className="text-[#B25068]" />
                  <span>Shipping & Delivery Details</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#5C4D46] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#DACEC8] focus:outline-none focus:border-[#B25068] bg-white text-[#2C221E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5C4D46] mb-1">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#DACEC8] focus:outline-none focus:border-[#B25068] bg-white text-[#2C221E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5C4D46] mb-1">
                    Street Address & Apartment / House No. *
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="House/Flat No., Apartment, Street, Landmark"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#DACEC8] focus:outline-none focus:border-[#B25068] bg-white text-[#2C221E]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#5C4D46] mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai / Delhi / Bengaluru"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#DACEC8] focus:outline-none focus:border-[#B25068] bg-white text-[#2C221E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5C4D46] mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 400001"
                      value={form.pincode}
                      onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#DACEC8] focus:outline-none focus:border-[#B25068] bg-white text-[#2C221E]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-[#5C4D46]">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, paymentMethod: "COD" })}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between transition ${
                      form.paymentMethod === "COD"
                        ? "border-[#B25068] bg-[#FAF0ED] text-[#2C221E]"
                        : "border-[#DACEC8] bg-white text-[#66554F]"
                    }`}
                  >
                    <span className="text-xs font-bold">💵 Cash on Delivery</span>
                    <span className="text-[10px] text-[#8C6D65] mt-1">Pay when candle arrives</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setForm({ ...form, paymentMethod: "UPI" })}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between transition ${
                      form.paymentMethod === "UPI"
                        ? "border-[#B25068] bg-[#FAF0ED] text-[#2C221E]"
                        : "border-[#DACEC8] bg-white text-[#66554F]"
                    }`}
                  >
                    <span className="text-xs font-bold">📱 UPI / QR Scan</span>
                    <span className="text-[10px] text-[#8C6D65] mt-1">GPay, PhonePe, Paytm</span>
                  </button>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#2C221E] hover:bg-[#B25068] text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Confirm Order (₹{finalTotal})</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const url = generateWhatsAppOrderUrl(form);
                    window.open(url, "_blank");
                  }}
                  className="w-full py-2.5 px-4 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#138038] font-semibold text-xs transition flex items-center justify-center gap-2"
                >
                  <MessageCircle size={15} />
                  <span>Send Order to Maahi directly on WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#8C6D65]">
                <ShieldCheck size={14} className="text-[#7B9E87]" />
                <span>Zero-risk ordering • Safe packaging with shockproof cushions</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

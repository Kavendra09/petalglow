"use client";

import React, { useState } from "react";
import { MessageCircle, Heart, Sparkles, Send, Check } from "lucide-react";

import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#261E1B] text-[#FAF5F0] pt-16 pb-12 border-t border-[#3A2F2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#DDA15E] shrink-0 bg-white">
                <Image
                  src="/images/logo.jpg"
                  alt="PetalGlow by Maahi Official Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-wide block leading-none">
                  PetalGlow
                </span>
                <span className="font-serif italic text-xs text-[#DDA15E]">
                  by Maahi
                </span>
              </div>
            </div>
            <p className="text-xs text-[#C7B5AD] leading-relaxed max-w-sm">
              Mindfully hand-poured in micro-batches with 100% organic soy wax, natural botanicals, dried flower petals, and clean braided cotton wicks. Bringing peace and gentle floral warmth into your sanctuary.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#DDA15E]">
              <span>🌿 100% Soy Wax</span>
              <span>•</span>
              <span>🐰 Cruelty-Free</span>
              <span>•</span>
              <span>🇮🇳 Handcrafted</span>
            </div>
          </div>

          {/* Quick Collection Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#C7B5AD]">
              <li>
                <a href="#candles-collection" className="hover:text-white transition">
                  Rose & Peony Jars
                </a>
              </li>
              <li>
                <a href="#candles-collection" className="hover:text-white transition">
                  French Lavender Blends
                </a>
              </li>
              <li>
                <a href="#candles-collection" className="hover:text-white transition">
                  Star Jasmine Grove
                </a>
              </li>
              <li>
                <a href="#candles-collection" className="hover:text-white transition">
                  Luxury Botanical Gift Boxes
                </a>
              </li>
            </ul>
          </div>

          {/* Care & Help */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
              Artisan Care
            </h4>
            <ul className="space-y-2 text-xs text-[#C7B5AD]">
              <li>
                <a href="#candle-care" className="hover:text-white transition">
                  Candle Burn Rituals
                </a>
              </li>
              <li>
                <a href="#scent-finder" className="hover:text-white transition">
                  Floral Scent Quiz
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition">
                  Customer Testimonials
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center gap-1 text-[#25D366]"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp Support</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Floral Newsletter & Direct Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
              Join the Blossom Club
            </h4>
            <p className="text-xs text-[#C7B5AD]">
              Subscribe to get secret invitations to new seasonal floral pours, candle care tips, and exclusive coupon codes.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-[#25D366] bg-white/5 border border-[#25D366]/30 px-3.5 py-2.5 rounded-xl">
                <Check size={16} />
                <span>Welcome to our floral family! Code PETALGLOW10 is saved.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 text-xs px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-[#9E8B85] focus:outline-none focus:border-[#DDA15E]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#B25068] hover:bg-[#8F394E] text-white font-semibold text-xs transition flex items-center justify-center shadow"
                >
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3A2F2B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7B73]">
          <p>© {new Date().getFullYear()} PetalGlow by Maahi. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Handcrafted with</span>
            <Heart size={13} className="text-[#B25068] fill-[#B25068]" />
            <span>for peaceful homes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

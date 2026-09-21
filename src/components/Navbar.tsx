"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Search, Sparkles, MessageCircle, Menu, X } from "lucide-react";

interface NavbarProps {
  onSearchChange?: (query: string) => void;
  searchQuery?: string;
}

export default function Navbar({ onSearchChange, searchQuery = "" }: NavbarProps) {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/70 border-b border-white/60 shadow-[0_4px_25px_0_rgba(180,80,104,0.06)] transition-all duration-200">
      {/* Top Glass Announcement Bar */}
      <div className="bg-gradient-to-r from-[#F7EBE8]/90 via-[#FDF3F2]/95 to-[#F7EBE8]/90 backdrop-blur-md text-[#7A283B] text-xs sm:text-sm py-2 px-4 text-center font-medium border-b border-[#F0DFDC]/80 flex items-center justify-center gap-2">
        <span className="inline-block animate-pulse">🌸</span>
        <span>
          <strong className="font-semibold">Spring Blossom Special:</strong> Code{" "}
          <span className="font-mono bg-white/80 text-[#5F1A2A] px-2 py-0.5 rounded-full text-xs uppercase font-bold tracking-wider border border-[#E8B4B8]/50 shadow-sm">
            PETALGLOW10
          </span>{" "}
          for 10% OFF | Free Shipping above ₹999 | 100% Hand-Poured Soy Wax
        </span>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu trigger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2C221E] hover:text-[#B25068] transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Correct Official Brand Logo */}
          <div className="flex-1 md:flex-initial text-center md:text-left">
            <a href="#" className="inline-flex items-center gap-3 group">
              {/* Circular Logo with Glassmorphic Golden Ring */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#DDA15E]/70 shadow-[0_4px_16px_rgba(221,161,94,0.3)] group-hover:border-[#B25068] transition-all duration-300 transform group-hover:scale-105 shrink-0 bg-white">
                <Image
                  src="/images/logo.jpg"
                  alt="PetalGlow by Maahi Official Logo"
                  fill
                  sizes="60px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#2C221E] group-hover:text-[#B25068] transition-colors leading-none">
                    PetalGlow
                  </span>
                  <span className="font-serif italic font-normal text-sm sm:text-base text-[#B25068] leading-none">
                    by Maahi
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8C6D65] mt-1">
                  Handmade Floral Candles
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links with Glass Pill Effects */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-[#4A3E39]">
            <a
              href="#candles-collection"
              className="hover:text-[#B25068] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B25068] hover:after:w-full after:transition-all"
            >
              Candle Collection
            </a>
            <a
              href="#scent-finder"
              className="hover:text-[#B25068] transition-colors flex items-center gap-1.5 relative py-1"
            >
              <Sparkles size={14} className="text-[#DDA15E]" />
              Scent Finder
            </a>
            <a
              href="#candle-care"
              className="hover:text-[#B25068] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B25068] hover:after:w-full after:transition-all"
            >
              Candle Care
            </a>
            <a
              href="#reviews"
              className="hover:text-[#B25068] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B25068] hover:after:w-full after:transition-all"
            >
              Reviews
            </a>
          </nav>

          {/* Right Action Icons: Search, WhatsApp Chat, Cart */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Glass Search bar */}
            <div className="relative">
              {showSearchInput ? (
                <div className="flex items-center bg-white/90 backdrop-blur-md border border-[#E8B4B8] rounded-full px-3 py-1.5 shadow-sm transition-all duration-200">
                  <Search size={16} className="text-[#8C6D65] mr-2" />
                  <input
                    type="text"
                    placeholder="Search Rose, Heart, Lavender..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                    className="text-xs sm:text-sm bg-transparent focus:outline-none w-36 sm:w-56 text-[#2C221E] placeholder:text-[#9E8B85]"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setShowSearchInput(false);
                      if (onSearchChange) onSearchChange("");
                    }}
                    className="text-xs text-[#8C6D65] hover:text-[#2C221E] ml-1 p-0.5"
                  >
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearchInput(true)}
                  className="p-2 text-[#4A3E39] hover:text-[#B25068] transition rounded-full hover:bg-white/80"
                  title="Search candles"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              )}
            </div>

            {/* Direct WhatsApp Ordering / Help icon */}
            <a
              href="https://wa.me/919876543210?text=Hello%20Maahi!%20I'd%20love%20to%20order%20some%20of%20your%20handcrafted%20floral%20candles%20%F0%9F%8C%B8"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 px-3.5 py-1.5 rounded-full transition shadow-sm"
              title="Chat with Maahi on WhatsApp"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>

            {/* Shopping Bag Trigger with Glass Glow */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-white/80 hover:bg-white text-[#2C221E] hover:text-[#B25068] transition shadow-[0_4px_15px_rgba(0,0,0,0.04)] border border-white/90 flex items-center justify-center backdrop-blur-md"
              aria-label={`View Cart - ${totalItems} items`}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#B25068] text-white text-[11px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/60 bg-white/90 backdrop-blur-xl px-4 pt-3 pb-5 space-y-3">
          <div className="pt-1 pb-2">
            <div className="flex items-center bg-white border border-[#E5DAD4] rounded-lg px-3 py-2">
              <Search size={16} className="text-[#8C6D65] mr-2" />
              <input
                type="text"
                placeholder="Search Rose, Heart, Lavender..."
                value={searchQuery}
                onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                className="text-sm bg-transparent focus:outline-none w-full text-[#2C221E]"
              />
            </div>
          </div>
          <a
            href="#candles-collection"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#4A3E39] hover:text-[#B25068] py-1.5"
          >
            🕯️ Candle Collection
          </a>
          <a
            href="#scent-finder"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#4A3E39] hover:text-[#B25068] py-1.5"
          >
            ✨ Scent Finder Quiz
          </a>
          <a
            href="#candle-care"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#4A3E39] hover:text-[#B25068] py-1.5"
          >
            🌿 Candle Care & Rituals
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#4A3E39] hover:text-[#B25068] py-1.5"
          >
            ⭐ Customer Reviews
          </a>
          <div className="pt-2 border-t border-[#EFE8DF]">
            <a
              href="https://wa.me/919876543210?text=Hello%20Maahi!%20I'd%20love%20to%20order%20some%20candles"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#25D366] text-white font-medium text-sm shadow"
            >
              <MessageCircle size={17} />
              <span>Order via WhatsApp Direct</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

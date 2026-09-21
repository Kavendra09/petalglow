"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CandleCard from "@/components/CandleCard";
import ProductModal from "@/components/ProductModal";
import CartDrawer from "@/components/CartDrawer";
import CheckoutModal from "@/components/CheckoutModal";
import ScentFinder from "@/components/ScentFinder";
import CandleCareGuide from "@/components/CandleCareGuide";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import { CANDLES } from "@/data/candles";
import { Sparkles, SlidersHorizontal, ArrowRight, Flame } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => [
    { id: "all", label: "All Creations", count: CANDLES.length, emoji: "🕯️" },
    { id: "rose", label: "Rose Blooms & Tins", count: CANDLES.filter(c => c.category === "rose").length, emoji: "🌹" },
    { id: "lavender", label: "Lavender Fields", count: CANDLES.filter(c => c.category === "lavender").length, emoji: "🪻" },
    { id: "jasmine", label: "Jasmine Grove", count: CANDLES.filter(c => c.category === "jasmine").length, emoji: "🤍" },
    { id: "giftsets", label: "Sculptures & Sets", count: CANDLES.filter(c => c.category === "giftsets").length, emoji: "🎁" },
  ], []);

  const filteredCandles = useMemo(() => {
    return CANDLES.filter((candle) => {
      const matchesCategory =
        selectedCategory === "all" || candle.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        candle.name.toLowerCase().includes(q) ||
        candle.tagline.toLowerCase().includes(q) ||
        candle.description.toLowerCase().includes(q) ||
        candle.notes.top.some((n) => n.toLowerCase().includes(q)) ||
        candle.notes.heart.some((n) => n.toLowerCase().includes(q)) ||
        candle.notes.base.some((n) => n.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // featured default order
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F2] text-[#2C221E] relative selection:bg-[#E8B4B8]/40 selection:text-[#5F1A2A]">
      {/* Ambient Glassmorphic Floral Background Blobs (bgc) */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[20%] -left-32 w-96 h-96 bg-[#FCD5CE]/30 rounded-full blur-[100px] petal-drift" />
        <div className="absolute top-[45%] -right-32 w-[420px] h-[420px] bg-[#FDE2E4]/40 rounded-full blur-[120px] petal-drift-delayed" />
        <div className="absolute top-[75%] left-1/3 w-[500px] h-[500px] bg-[#FFE5D9]/30 rounded-full blur-[120px] petal-drift" />
      </div>

      {/* Navigation */}
      <Navbar onSearchChange={setSearchQuery} searchQuery={searchQuery} />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Candles Collection Section */}
        <section
          id="candles-collection"
          className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0ED] text-[#913E52] text-xs font-semibold uppercase tracking-wider border border-[#ECD1CA]">
              <Flame size={13} className="text-[#DDA15E]" />
              <span>Hand-Poured Soy Wax Jars & Gift Sets</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C221E]">
              Our Floral <span className="italic text-[#B25068]">Candle Collection</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#705F58]">
              Infused with natural botanical flower oils and adorned with real dried blossoms. Designed for long, clean, aromatherapy burns.
            </p>
          </div>

          {/* Category Filter Pills & Sort Bar */}
          <div className="space-y-4 mb-8">
            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 border ${
                    selectedCategory === cat.id
                      ? "bg-[#2C221E] text-white border-[#2C221E] shadow-sm"
                      : "bg-white text-[#66554F] border-[#E5DAD4] hover:border-[#B25068] hover:text-[#B25068]"
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      selectedCategory === cat.id
                        ? "bg-white/20 text-white"
                        : "bg-[#FAF5F2] text-[#8C6D65]"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Filter Metadata & Sort Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-[#7A6B65] border-t border-[#F0EAE1]">
              <div className="flex items-center gap-2">
                <span>
                  Showing <strong>{filteredCandles.length}</strong> candle creations
                </span>
                {searchQuery && (
                  <span className="bg-[#FAF0ED] text-[#913E52] px-2 py-0.5 rounded-full text-[11px] font-semibold border border-[#ECD1CA]">
                    Keyword: "{searchQuery}"
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <SlidersHorizontal size={14} className="text-[#8C6D65]" />
                <span className="text-[11px] uppercase tracking-wider font-semibold">
                  Sort By:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-[#DACEC8] text-[#2C221E] text-xs rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-[#B25068] cursor-pointer"
                >
                  <option value="featured">Featured & Curated</option>
                  <option value="rating">Top Rated (Highest Reviews)</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredCandles.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#EDE2D8] p-8 max-w-md mx-auto space-y-4">
              <div className="text-4xl">🌸</div>
              <h3 className="font-serif text-xl font-semibold text-[#2C221E]">
                No matching floral candles found
              </h3>
              <p className="text-xs text-[#8C6D65]">
                Try adjusting your search query or pick another botanical category above.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-5 py-2 rounded-full bg-[#2C221E] text-white text-xs font-semibold hover:bg-[#B25068] transition"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {filteredCandles.map((candle) => (
                <CandleCard key={candle.id} candle={candle} />
              ))}
            </div>
          )}
        </section>

        {/* Scent Finder Quiz Section */}
        <ScentFinder />

        {/* Candle Care Rituals Guide */}
        <CandleCareGuide />

        {/* Customer Reviews */}
        <CustomerReviews />

        {/* Instagram & Community Banner */}
        <section className="py-14 bg-gradient-to-r from-[#FAF3F0] via-[#FFF8F6] to-[#FAF3F0] border-t border-[#EFE5DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B25068] uppercase tracking-wider">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@petalglowbymaahi on Instagram</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C221E]">
              Tag Us in Your Cozy Candle Evenings
            </h3>
            <p className="text-xs sm:text-sm text-[#705F58] max-w-lg mx-auto">
              Share your candle unboxing, glowing setup, or bedtime rituals with #PetalGlowMoments for a chance to receive our secret monthly gift box.
            </p>
            <div className="pt-2">
              <a
                href="https://bryanandcandy.com/collections/candles"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#E0D0C8] hover:border-[#B25068] hover:text-[#B25068] text-xs font-semibold text-[#2C221E] transition shadow-sm"
              >
                <span>Follow & Tag @petalglowbymaahi</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ProductModal />
      <CartDrawer />
      <CheckoutModal />
    </div>
  );
}

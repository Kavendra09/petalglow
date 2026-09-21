export interface FragranceNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface CandleProduct {
  id: string;
  name: string;
  tagline: string;
  category: "rose" | "lavender" | "jasmine" | "citrus" | "giftsets" | "sculptural";
  categoryLabel: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: "Handmade Original" | "Bestseller" | "New Arrival" | "Gift Favorite" | "Limited Edition" | "Save 30%";
  weight: string;
  burnTime: string;
  waxType: string;
  wickType: string;
  description: string;
  mood: string;
  aromatherapyBenefits: string[];
  notes: FragranceNotes;
  inStock: boolean;
  isSet?: boolean;
}

export const CANDLES: CandleProduct[] = [
  {
    id: "mandala-rose-tin",
    name: "Mandala Lotus Rose Tin Candle",
    tagline: "Hand-poured soy candle adorned with hand-carved pink rose flower & green leaf",
    category: "rose",
    categoryLabel: "Artisan Tin",
    price: 399,
    originalPrice: 549,
    rating: 5.0,
    reviewsCount: 184,
    image: "/images/mandala-rose-tin.jpg",
    badge: "Handmade Original",
    weight: "120g / 4.2 oz",
    burnTime: "30 - 35 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wickType: "Natural Lead-Free Cotton Wick",
    description:
      "A PetalGlow signature masterpiece. Hand-poured into an intricate jewel-toned mandala peacock pattern tin. Crowned with a hand-carved miniature pink Damask rose and botanical leaf wax sculpture. When lit, it casts a warm enchanting aura with notes of sweet wild rose and creamy vanilla.",
    mood: "Comforting, Sweet & Uplifting",
    aromatherapyBenefits: [
      "Signature hand-sculpted botanical rose topper",
      "Compact tin container perfect for travel or bedside sanctuary",
      "Infused with therapeutic essential oils for natural calm",
    ],
    notes: {
      top: ["Morning Rose Dew", "Lychee Blossom", "Pink Pepper"],
      heart: ["Damask Rose Bloom", "Peony Petals", "Lotus Flower"],
      base: ["Creamy Vanilla", "Blonde Woods", "White Musk"],
    },
    inStock: true,
  },
  {
    id: "rose-heart-candle",
    name: "Sculpted Rose Bloom Heart Candle",
    tagline: "Hand-carved crimson heart blossoming with dozens of miniature roses",
    category: "rose",
    categoryLabel: "Sculptural",
    price: 449,
    originalPrice: 649,
    rating: 5.0,
    reviewsCount: 156,
    image: "/images/rose-heart-candle.jpg",
    badge: "Bestseller",
    weight: "135g / 4.8 oz",
    burnTime: "25 - 30 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wickType: "Pure Braided Cotton Wick",
    description:
      "An extraordinary sculptural statement piece made with love. Each candle features a full heart silhouette intricately textured with dozens of individual blooming red rosebuds. Comes nestled inside a pristine ivory keepsake gift box with a display window. The ultimate romantic gift.",
    mood: "Passionate, Romantic & Celebratory",
    aromatherapyBenefits: [
      "Romantic centerpiece for dates, anniversaries & weddings",
      "Fills the room with rich crimson velvet rose fragrance",
      "Zero-drip soy formulation that burns cleanly and evenly",
    ],
    notes: {
      top: ["Red Velvet Rose", "Ripe Plum", "Cassis"],
      heart: ["Crimson Rose Petals", "French Peony", "Clove Bud"],
      base: ["Warm Amber", "Patchouli", "Sensual Musk"],
    },
    inStock: true,
  },
  {
    id: "couple-embrace-candle",
    name: "Soulmate Embrace Sculpture Candle",
    tagline: "Minimalist artistic couple silhouette hand-crafted in creamy botanical soy wax",
    category: "giftsets",
    categoryLabel: "Sculptural",
    price: 499,
    originalPrice: 699,
    rating: 4.9,
    reviewsCount: 129,
    image: "/images/couple-embrace-candle.jpg",
    badge: "New Arrival",
    weight: "150g / 5.3 oz",
    burnTime: "30 - 35 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wickType: "Dual Cotton Wicks",
    description:
      "An artistic sculptural tribute to unconditional love and togetherness. Hand-poured by Maahi in pure creamy soy wax, depicting two embracing silhouettes with gentle organic curves. Dual cotton wicks produce a twin candle flame that radiates comforting warmth and tranquil lavender-vanilla aromas.",
    mood: "Loving, Serene & Intimate",
    aromatherapyBenefits: [
      "Dual wicks create an ethereal ambient candlelight glow",
      "Stunning art piece on dressing tables, consoles & nightstands",
      "Soothing lavender and cashmere vanilla promote restful harmony",
    ],
    notes: {
      top: ["French Lavender", "Italian Bergamot"],
      heart: ["White Cotton Blossom", "Cashmere Suede", "Lily"],
      base: ["Bourbon Vanilla", "Sandalwood", "Soft Amber"],
    },
    inStock: true,
  },
  {
    id: "bulgarian-rose-candle",
    name: "Bulgarian Rose & Velvet Petals",
    tagline: "Damask rose nectar, morning dew, and gentle sandalwood warmth",
    category: "rose",
    categoryLabel: "Rose & Peony",
    price: 649,
    originalPrice: 899,
    rating: 4.9,
    reviewsCount: 142,
    image: "/images/bulgarian-rose.jpg",
    badge: "Bestseller",
    weight: "255g / 9 oz",
    burnTime: "48 - 52 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wickType: "Natural Lead-Free Cotton Wick",
    description:
      "Hand-poured with pure Damask rose absolute harvested at dawn. Infused with delicate real dried pink rose petals and subtle white musk, this candle fills your room with the timeless elegance of a sun-drenched flower garden.",
    mood: "Romantic, Uplifting & Calming",
    aromatherapyBenefits: [
      "Naturally eases emotional stress and tension",
      "Evokes gentle feelings of comfort and self-love",
      "Creates an inviting, luxurious sanctuary at home",
    ],
    notes: {
      top: ["Morning Dew", "Pink Peppercorn", "Bergamot Zest"],
      heart: ["Bulgarian Damask Rose", "Lush Peony Petals", "Geranium"],
      base: ["Creamy Sandalwood", "White Musk", "Soft Amber"],
    },
    inStock: true,
  },
  {
    id: "lavender-citrus-candle",
    name: "French Lavender & Bergamot Citrus",
    tagline: "Serene Provençal lavender harmonized with sun-kissed citrus blossom",
    category: "lavender",
    categoryLabel: "Lavender Fields",
    price: 599,
    originalPrice: 849,
    rating: 4.8,
    reviewsCount: 98,
    image: "/images/lavender-citrus.jpg",
    badge: "Bestseller",
    weight: "226g / 8 oz",
    burnTime: "45 - 50 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wickType: "Clean-burning Braided Cotton",
    description:
      "A soothing botanical balance of French wild lavender essential oil blended with vibrant Italian bergamot and dried chamomile buds. Poured into a minimalist ceramic vessel designed to unwind mind and body.",
    mood: "Restful Sleep & Deep Serenity",
    aromatherapyBenefits: [
      "Promotes deep, tranquil sleep and bedtime unwinding",
      "Clears nervous tension and mental fatigue",
      "Refreshes indoor air with uplifting citrus undertones",
    ],
    notes: {
      top: ["Italian Bergamot", "Mandarin Zest", "Eucalyptus Leaf"],
      heart: ["French Lavender", "Blue Sage", "Dried Chamomile"],
      base: ["Cedarwood", "Cashmere Wood", "Light Vanilla"],
    },
    inStock: true,
  },
  {
    id: "jasmine-white-tea-candle",
    name: "Jasmine Blossoms & White Tea",
    tagline: "Night-blooming star jasmine layered with crisp silver needle white tea",
    category: "jasmine",
    categoryLabel: "Jasmine Grove",
    price: 649,
    originalPrice: 899,
    rating: 4.9,
    reviewsCount: 114,
    image: "/images/jasmine-tea.jpg",
    badge: "New Arrival",
    weight: "226g / 8 oz",
    burnTime: "45 - 50 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wickType: "Natural Cotton Wick",
    description:
      "Crafted in a ribbed fluted glass tumbler that casts warm textured shadows when lit. Combines pure sambac jasmine petals with delicate white tea leaves and a whisper of green bamboo.",
    mood: "Meditative, Harmonious & Sophisticated",
    aromatherapyBenefits: [
      "Improves mental clarity and focus",
      "Dispels negative energy and refreshes your aura",
      "Infuses your living space with spa-like serenity",
    ],
    notes: {
      top: ["White Tea Leaves", "Lemon Blossom", "Waterlily"],
      heart: ["Sambac Jasmine", "Mogra Petals", "Green Bamboo"],
      base: ["Blonde Woods", "Tonka Bean", "Velvet Musk"],
    },
    inStock: true,
  },
  {
    id: "french-peony-candle",
    name: "French Peony & Cashmere Bloom",
    tagline: "Ruffled pink peonies, velvety gardenia, and soft powdery blush notes",
    category: "rose",
    categoryLabel: "Rose & Peony",
    price: 699,
    originalPrice: 949,
    rating: 5.0,
    reviewsCount: 86,
    image: "/images/french-peony.jpg",
    badge: "Limited Edition",
    weight: "226g / 8 oz",
    burnTime: "45 - 50 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wickType: "Natural Cotton Wick",
    description:
      "Enclosed in an aesthetic matte blush pink container. Poured with botanical peony essence and studded with dried floral botanicals. Exudes the fresh, romantic aura of a spring morning in Paris.",
    mood: "Indulgent, Joyful & Romantic",
    aromatherapyBenefits: [
      "Elevates daily mood and relieves anxious feelings",
      "Adds a lavish, welcoming ambience to intimate spaces",
      "Gentle floral notes that never overpower the room",
    ],
    notes: {
      top: ["Crisp Red Apple", "Sweet Clementine"],
      heart: ["Blooming Pink Peony", "White Jasmine", "Rosewater"],
      base: ["Cashmere Suede", "Powdery Amber", "Vanilla Pod"],
    },
    inStock: true,
  },
  {
    id: "petal-glow-botanical-gift-set",
    name: "PetalGlow Luxury Botanical Gift Set (Set of 4)",
    tagline: "4 signature floral candles nestled in royal navy & gold gift box with satin ribbon",
    category: "giftsets",
    categoryLabel: "Luxury Gift Sets",
    price: 1499,
    originalPrice: 2199,
    rating: 5.0,
    reviewsCount: 203,
    image: "/images/gift-set.jpg",
    badge: "Gift Favorite",
    weight: "4 x 60g / 8.5 oz Total",
    burnTime: "4 x 22 Hours",
    waxType: "100% Pure Organic Soy Wax",
    wickType: "Lead-free Cotton Wicks",
    description:
      "The ultimate floral indulgence. Includes four hand-poured gold tin candles: Bulgarian Rose, French Peony, Lavender Bergamot, and Star Jasmine. Cradled in crinkled kraft paper with dried rosebuds, crowned with an ivory satin ribbon and a personalized floral gift card.",
    mood: "Celebratory, Luxurious & Unforgettable",
    aromatherapyBenefits: [
      "Full spectrum of therapeutic floral aromas",
      "Ready-to-gift presentation with zero extra wrapping needed",
      "Includes complimentary handwritten floral message card",
    ],
    notes: {
      top: ["Rose Dew", "Sweet Peony", "Bergamot", "White Tea"],
      heart: ["Damask Rose", "Sambac Jasmine", "French Lavender", "Gardenia"],
      base: ["Creamy Sandalwood", "Velvet Musk", "Amber Resin"],
    },
    inStock: true,
    isSet: true,
  },
];

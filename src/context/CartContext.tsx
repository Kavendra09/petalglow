"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CandleProduct } from "@/data/candles";

export interface CartItem {
  product: CandleProduct;
  quantity: number;
}

export interface CustomerOrderDetails {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  paymentMethod: "COD" | "UPI" | "CARD";
  giftNote?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: CandleProduct, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  discount: number;
  shipping: number;
  finalTotal: number;
  couponCode: string;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  quickViewProduct: CandleProduct | null;
  setQuickViewProduct: (product: CandleProduct | null) => void;
  giftMessage: string;
  setGiftMessage: (msg: string) => void;
  generateWhatsAppOrderUrl: (details?: Partial<CustomerOrderDetails>) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 999;
const STANDARD_SHIPPING_FEE = 99;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [couponCode, setCouponCode] = useState<string>("");
  const [couponDiscountRate, setCouponDiscountRate] = useState<number>(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<CandleProduct | null>(null);
  const [giftMessage, setGiftMessage] = useState<string>("");

  // Hydrate cart from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("petalglow_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
      const savedCoupon = localStorage.getItem("petalglow_coupon");
      if (savedCoupon === "PETALGLOW10") {
        setCouponCode("PETALGLOW10");
        setCouponDiscountRate(0.1);
      }
    } catch {
      // LocalStorage fallback
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("petalglow_cart", JSON.stringify(items));
    } catch {
      // LocalStorage fallback
    }
  }, [items]);

  const addToCart = (product: CandleProduct, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    localStorage.removeItem("petalglow_cart");
  };

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === "PETALGLOW10" || clean === "MAAHI10") {
      setCouponCode(clean);
      setCouponDiscountRate(0.1);
      try {
        localStorage.setItem("petalglow_coupon", clean);
      } catch {}
      return { success: true, message: "10% Spring Floral Discount applied!" };
    }
    return { success: false, message: "Invalid coupon. Use code PETALGLOW10" };
  };

  const removeCoupon = () => {
    setCouponCode("");
    setCouponDiscountRate(0);
    try {
      localStorage.removeItem("petalglow_coupon");
    } catch {}
  };

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );
  const discount = Math.round(subtotal * couponDiscountRate);
  const shipping =
    subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD
      ? 0
      : STANDARD_SHIPPING_FEE;
  const finalTotal = subtotal - discount + shipping;

  const generateWhatsAppOrderUrl = (details?: Partial<CustomerOrderDetails>) => {
    const phone = "919876543210"; // Official business WhatsApp number for orders
    let message = `🌸 *New Order Request - PetalGlow by Maahi* 🌸\n\n`;
    message += `Hello Maahi! I would like to order the following floral candles:\n\n`;

    items.forEach((item, idx) => {
      message += `${idx + 1}. *${item.product.name}*\n`;
      message += `   • Qty: ${item.quantity}\n`;
      message += `   • Price: ₹${item.product.price} each (Total: ₹${item.product.price * item.quantity})\n`;
    });

    message += `\n─────────────────────\n`;
    message += `*Subtotal:* ₹${subtotal}\n`;
    if (discount > 0) {
      message += `*Discount (${couponCode}):* -₹${discount}\n`;
    }
    message += `*Shipping:* ${shipping === 0 ? "FREE" : `₹${shipping}`}\n`;
    message += `*Grand Total:* ₹${finalTotal}\n`;

    if (details?.fullName) {
      message += `\n*Customer Details:*\n`;
      message += `Name: ${details.fullName}\n`;
      if (details.phone) message += `Phone: ${details.phone}\n`;
      if (details.address)
        message += `Address: ${details.address}, ${details.city || ""} - ${details.pincode || ""}\n`;
      if (details.paymentMethod)
        message += `Payment Preference: ${details.paymentMethod}\n`;
    }

    if (giftMessage) {
      message += `\n🎁 *Gift Card Note:* "${giftMessage}"\n`;
    }

    message += `\nPlease confirm availability and payment details. Thank you! ✨`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        discount,
        shipping,
        finalTotal,
        couponCode,
        applyCoupon,
        removeCoupon,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        quickViewProduct,
        setQuickViewProduct,
        giftMessage,
        setGiftMessage,
        generateWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

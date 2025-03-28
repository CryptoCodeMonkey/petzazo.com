"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CartItem, Cart } from "@/lib/types"

interface CartStore {
  cart: Cart
  addItem: (item: CartItem) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  calculateTotals: () => void
}

const TAX_RATE = 0.07 // 7% tax rate
const FREE_SHIPPING_THRESHOLD = 50 // Free shipping for orders over $50
const SHIPPING_COST = 5.99 // Standard shipping cost

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: {
        items: [],
        subtotal: 0,
        tax: 0,
        shipping: 0,
        total: 0,
      },

      addItem: (item: CartItem) => {
        const { cart } = get()
        const existingItemIndex = cart.items.findIndex((i) => i.productId === item.productId)

        if (existingItemIndex >= 0) {
          // Item already exists, update quantity
          const updatedItems = [...cart.items]
          updatedItems[existingItemIndex].quantity += item.quantity

          set({ cart: { ...cart, items: updatedItems } })
        } else {
          // Add new item
          set({ cart: { ...cart, items: [...cart.items, item] } })
        }

        get().calculateTotals()
      },

      removeItem: (productId: string) => {
        const { cart } = get()
        const updatedItems = cart.items.filter((item) => item.productId !== productId)

        set({ cart: { ...cart, items: updatedItems } })
        get().calculateTotals()
      },

      updateQuantity: (productId: string, quantity: number) => {
        const { cart } = get()
        const updatedItems = cart.items.map((item) =>
          item.productId === productId ? { ...item, quantity: Math.max(1, quantity) } : item,
        )

        set({ cart: { ...cart, items: updatedItems } })
        get().calculateTotals()
      },

      clearCart: () => {
        set({
          cart: {
            items: [],
            subtotal: 0,
            tax: 0,
            shipping: 0,
            total: 0,
          },
        })
      },

      calculateTotals: () => {
        const { cart } = get()

        // Calculate subtotal
        const subtotal = cart.items.reduce((total, item) => {
          const price = item.salePrice || item.price
          return total + price * item.quantity
        }, 0)

        // Calculate tax
        const tax = subtotal * TAX_RATE

        // Calculate shipping
        const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST

        // Calculate total
        const total = subtotal + tax + shipping

        set({
          cart: {
            ...cart,
            subtotal,
            tax,
            shipping,
            total,
          },
        })
      },
    }),
    {
      name: "cart-storage",
    },
  ),
)


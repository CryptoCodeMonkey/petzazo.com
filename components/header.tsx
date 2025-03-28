"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ChevronDown } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"
import { CartDrawer } from "@/components/cart-drawer"
import { siteConfig } from "@/lib/config"

// Category data
const dogItems = [
  { name: "Food & Treats", href: "/dog/food-treats" },
  { name: "Toys", href: "/dog/toys" },
  { name: "Beds & Furniture", href: "/dog/beds-furniture" },
  { name: "Collars & Leashes", href: "/dog/collars-leashes" },
  { name: "Clothing & Accessories", href: "/dog/clothing-accessories" },
]

const catItems = [
  { name: "Food & Treats", href: "/cat/food-treats" },
  { name: "Toys", href: "/cat/toys" },
  { name: "Beds & Furniture", href: "/cat/beds-furniture" },
  { name: "Litter & Accessories", href: "/cat/litter-accessories" },
  { name: "Grooming", href: "/cat/grooming" },
]

const smallAnimalItems = [
  { name: "Food & Treats", href: "/small-animal/food-treats" },
  { name: "Cages & Habitats", href: "/small-animal/cages-habitats" },
  { name: "Bedding", href: "/small-animal/bedding" },
  { name: "Toys", href: "/small-animal/toys" },
]

const humanItems = [
  { name: "Apparel", href: "/human/apparel" },
  { name: "Accessories", href: "/human/accessories" },
  { name: "Home Goods", href: "/human/home-goods" },
]

const shelterItems = [
  { name: "Dog Items", href: "/shelter-wish-list/dog-items" },
  { name: "Cat Items", href: "/shelter-wish-list/cat-items" },
  { name: "Small Animal Items", href: "/shelter-wish-list/small-animal-items" },
]

const whsItems = [
  { name: `About ${siteConfig.organizationShort}`, href: "/whs-home/about" },
  { name: "Adoption", href: "/whs-home/adoption" },
  { name: "Donate", href: "/whs-home/donate" },
  { name: "Volunteer", href: "/whs-home/volunteer" },
]

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All categories")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log(`Searching for "${searchQuery}" in category "${selectedCategory}"`)
  }

  return (
    <>
      {/* Header */}
      <header className="bg-purple-600 text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <MobileMenu />
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt={siteConfig.name} width={180} height={60} className="h-12 w-auto" />
            </Link>
          </div>

          <div className="hidden md:block flex-1 max-w-xl mx-4">
            <form onSubmit={handleSearch} className="relative flex items-center">
              <input
                type="text"
                placeholder="Search for product"
                className="w-full py-2 px-4 rounded-l-md text-black focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div
                className="bg-white text-gray-700 border-l px-3 py-2 rounded-r-md flex items-center cursor-pointer"
                onClick={() => {
                  // Toggle dropdown for categories
                }}
              >
                <span className="mr-2">{selectedCategory}</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <button type="submit" className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-500">
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/account" className="text-sm font-medium hover:underline hidden sm:block">
              MY ACCOUNT
            </Link>
            <CartDrawer />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 pb-3">
          <form onSubmit={handleSearch} className="relative flex items-center">
            <input
              type="text"
              placeholder="Search for product"
              className="w-full py-2 px-4 rounded-md text-black focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b shadow-sm hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-start space-x-6 overflow-x-auto">
            <li className="relative group py-4">
              <Link href="/dog" className="flex items-center text-gray-800 font-medium hover:text-purple-600">
                DOG
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute left-0 top-full z-10 w-48 bg-white shadow-lg rounded-b-md py-2 animate-in fade-in hidden group-hover:block">
                {dogItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>
            <li className="relative group py-4">
              <Link href="/cat" className="flex items-center text-gray-800 font-medium hover:text-purple-600">
                CAT
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute left-0 top-full z-10 w-48 bg-white shadow-lg rounded-b-md py-2 animate-in fade-in hidden group-hover:block">
                {catItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>
            <li className="relative group py-4">
              <Link href="/small-animal" className="flex items-center text-gray-800 font-medium hover:text-purple-600">
                SMALL ANIMAL
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute left-0 top-full z-10 w-48 bg-white shadow-lg rounded-b-md py-2 animate-in fade-in hidden group-hover:block">
                {smallAnimalItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>
            <li className="relative group py-4">
              <Link href="/human" className="flex items-center text-gray-800 font-medium hover:text-purple-600">
                HUMAN
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute left-0 top-full z-10 w-48 bg-white shadow-lg rounded-b-md py-2 animate-in fade-in hidden group-hover:block">
                {humanItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>
            <li className="relative group py-4">
              <Link
                href="/shelter-wish-list"
                className="flex items-center text-gray-800 font-medium hover:text-purple-600"
              >
                SHELTER WISH LIST
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute left-0 top-full z-10 w-48 bg-white shadow-lg rounded-b-md py-2 animate-in fade-in hidden group-hover:block">
                {shelterItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>
            <li className="relative group py-4">
              <Link href="/whs-home" className="flex items-center text-gray-800 font-medium hover:text-purple-600">
                {siteConfig.organizationShort} HOME
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute left-0 top-full z-10 w-48 bg-white shadow-lg rounded-b-md py-2 animate-in fade-in hidden group-hover:block">
                {whsItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>
            <li className="relative group py-4">
              <Link href="/gift-cards" className="text-gray-800 font-medium hover:text-purple-600">
                GIFT CARDS
              </Link>
            </li>
            <li className="relative group py-4">
              <Link href="/loyalty" className="text-gray-800 font-medium hover:text-purple-600">
                LOYALTY
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}


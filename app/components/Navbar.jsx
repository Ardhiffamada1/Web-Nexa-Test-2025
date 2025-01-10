import { useState } from "react";
import Link from "next/link";
import {
  ShoppingCartIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="flex-shrink-0">
            <Link
              href="/"
              className="text-black font-bold text-xl border border-2 border-black p-1"
            >
              CeritaKita
            </Link>
          </h1>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 hover:text-black focus:outline-none"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-gray-800 hover:text-black hover:underline"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-800 hover:text-black hover:underline"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-black hover:underline"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-black hover:underline"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/account">
              <UserCircleIcon className="w-6 h-6 text-gray-800 hover:text-black" />
            </Link>
            <Link href="/cart">
              <div className="relative">
                <ShoppingCartIcon className="w-6 h-6 text-gray-800 hover:text-black" />
                <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center z-10 -translate-y-2 translate-x-1/2"></span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-6 px-6 space-y-6">
          <div className="space-y-4">
            <Link
              href="/"
              className="text-gray-800 hover:text-black hover:underline block"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-800 hover:text-black hover:underline block"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-black hover:underline block"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-black hover:underline block"
            >
              Contact
            </Link>
          </div>

          <div className="space-y-4">
            <Link
              href="/account"
              className="flex items-center space-x-2 text-gray-800 hover:text-black"
            >
              <UserCircleIcon className="w-6 h-6" />
              <span>Account</span>
            </Link>
            <Link
              href="/cart"
              className="flex items-center space-x-2 text-gray-800 hover:text-black"
            >
              <div className="relative">
                <ShoppingCartIcon className="w-6 h-6" />
                <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center z-10 -translate-y-2 translate-x-1/2"></span>
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href) => pathname === href;

  return (
    <>
      {/* Desktop Navigation - Top Fixed */}
      <nav className="bg-yellow-800 backdrop-blur-sm border-b border-[#e0e0e0] sticky top-0 z-50 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="relative w-[400px] h-[70px]">
                  <Image
                    src="/images/logo.png"
                    alt="Manila's Ihawan Logo"
                    width={500}
                    height={70}
                    className="object-contain w-full h-auto"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="flex items-center justify-end flex-grow mx-8">
              <div className="flex space-x-8">
                <Link
                  href="/"
                  className={`text-white hover:text-yellow-100 transition-colors duration-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-100 ${
                    isActive('/') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  } after:transition-all after:duration-200`}
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className={`text-white hover:text-yellow-100 transition-colors duration-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-100 ${
                    isActive('/products') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  } after:transition-all after:duration-200`}
                >
                  Products
                </Link>
                <Link
                  href="/partners"
                  className={`text-white hover:text-yellow-100 transition-colors duration-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-100 ${
                    isActive('/partners') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  } after:transition-all after:duration-200`}
                >
                  Partners
                </Link>
                <Link
                  href="/about"
                  className={`text-white hover:text-yellow-100 transition-colors duration-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-100 ${
                    isActive('/about') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  } after:transition-all after:duration-200`}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={`text-white hover:text-yellow-100 transition-colors duration-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-100 ${
                    isActive('/contact') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  } after:transition-all after:duration-200`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Top Bar with Logo */}
      <nav className="bg-yellow-800 backdrop-blur-sm border-b border-[#e0e0e0] sticky top-0 z-40 md:hidden">
        <div className="px-4 py-2">
          <div className="flex items-center justify-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="relative w-[300px] h-[50px]">
                  <Image
                    src="/images/logo.png"
                    alt="Manila's Ihawan Logo"
                    width={250}
                    height={50}
                    className="object-contain w-full h-auto"
                    priority
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-yellow-800 shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              <Link
                href="/"
                className={`block text-white hover:bg-yellow-700 px-4 py-2 rounded-lg transition-colors duration-200 font-medium ${
                  isActive('/') ? 'bg-yellow-700' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={`block text-white hover:bg-yellow-700 px-4 py-2 rounded-lg transition-colors duration-200 font-medium ${
                  isActive('/products') ? 'bg-yellow-700' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/partners"
                className={`block text-white hover:bg-yellow-700 px-4 py-2 rounded-lg transition-colors duration-200 font-medium ${
                  isActive('/partners') ? 'bg-yellow-700' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Partners
              </Link>
              <Link
                href="/about"
                className={`block text-white hover:bg-yellow-700 px-4 py-2 rounded-lg transition-colors duration-200 font-medium ${
                  isActive('/about') ? 'bg-yellow-700' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`block text-white hover:bg-yellow-700 px-4 py-2 rounded-lg transition-colors duration-200 font-medium ${
                  isActive('/contact') ? 'bg-yellow-700' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom-Left Mobile Navigation */}
      <nav className="fixed bottom-4 left-4 z-50 md:hidden">
        <div className="bg-yellow-800 rounded-full shadow-lg p-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-yellow-100 focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <nav className="bg-yellow-800 backdrop-blur-sm border-b border-[#e0e0e0] sticky top-0 z-50">
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

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-end flex-grow mx-8">
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
                href="/partners2"
                className={`text-white hover:text-yellow-100 transition-colors duration-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-100 ${
                  isActive('/partners2') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                } after:transition-all after:duration-200`}
              >
                Partners2
              </Link>
              <Link
                href="/partners3"
                className={`text-white hover:text-yellow-100 transition-colors duration-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-100 ${
                  isActive('/partners3') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                } after:transition-all after:duration-200`}
              >
                Partners3
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-100 transition-colors duration-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className={`block text-white hover:text-yellow-100 transition-colors duration-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-100 ${
              isActive('/') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
            } after:transition-all after:duration-200`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`block text-white hover:text-yellow-100 transition-colors duration-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-100 ${
              isActive('/products') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
            } after:transition-all after:duration-200`}
          >
            Products
          </Link>
          <Link
            href="/partners"
            className={`block text-white hover:text-yellow-100 transition-colors duration-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-100 ${
              isActive('/partners') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
            } after:transition-all after:duration-200`}
          >
            Partners
          </Link>
          <Link
            href="/about"
            className={`block text-white hover:text-yellow-100 transition-colors duration-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-100 ${
              isActive('/about') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
            } after:transition-all after:duration-200`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`block text-white hover:text-yellow-100 transition-colors duration-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-100 ${
              isActive('/contact') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
            } after:transition-all after:duration-200`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

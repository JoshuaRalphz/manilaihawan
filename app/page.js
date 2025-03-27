"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Shrikhand, Kaushan_Script, Jomhuria } from 'next/font/google';

const shrikhand = Shrikhand({ 
  weight: '400',
  subsets: ['latin'],
});

const kaushan = Kaushan_Script({ 
  weight: '400',
  subsets: ['latin'],
});

const johmuria = Jomhuria({ 
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/images/home/m1.jpg",
    "/images/home/m2.jpg",
    "/images/home/m3.jpg",
    "/images/lumpia.jpg",
    "/images/tap.jpg",
    "/images/tc1.jpg",
    "/images/products/tocino-recipe.jpg",
    "/images/products/soppi.jpg",
    "/images/products/tapa.jpg",
    "/images/products/siopao.jpg",
    "/images/products/shanghai.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`min-h-screen bg-gradient-to-b from-[#fff3e0] to-[#fff9e8] ${kaushan.className}`}>
      <style jsx>{`
        body {
          background: linear-gradient(to bottom, #fff3e0, #fff9e8);
        }
      `}</style>
      <main className={`container mx-auto px-4 py-6 sm:px-6 sm:py-8 md:py-12 max-w-6xl ${kaushan.className}`}>
        {/* Hero Section - Adjusted for better mobile display */}
        <div className="relative h-[50vh] sm:h-[50vh] md:h-[60vh] rounded-xl overflow-hidden mb-8 md:mb-16">
          {/* Carousel */}
          <div className="relative h-full">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={src}
                  alt="Manila's Ihawan"
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Overlay Content - Better spacing for mobile */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
            <div className="w-[200px] sm:w-[300px] md:w-[500px] lg:w-[600px] max-w-[90%] mb-4 sm:mb-6 md:mb-8">
              <Image
                src="/images/logo.png"
                alt="Manila's Ihawan Logo"
                width={1200}
                height={480}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            
            <h1 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-6 ${kaushan.className}`}>
              Authentic Filipino Flavors
            </h1>
            <p className={`text-base sm:text-lg md:text-2xl text-white/90 max-w-2xl mb-3 md:mb-8 px-2 font-agbalumo`}>
              Authentic Filipino flavors crafted with love since 1989. Experience the best Longanisa, Tocino, and more!
            </p>
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 font-agbalumo`}>
              <a
                className="rounded-lg bg-[var(--primary)] text-white px-4 py-2 sm:px-6 md:px-8 md:py-3 text-xs sm:text-sm md:text-base font-medium hover:bg-[#b71c1c] transition-colors duration-300 transform hover:scale-105"
                href="/products"
              >
                Explore Our Products
              </a>
              <a
                className="rounded-lg border-2 border-white text-white px-4 py-2 sm:px-6 md:px-8 md:py-3 text-xs sm:text-sm md:text-base font-medium hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-colors duration-300"
                href="/about"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>

        {/* Products Section - Improved grid for mobile */}
        <section className="mb-8 sm:mb-12 md:mb-20">
          <h2 className={`text-xl sm:text-2xl md:text-4xl font-bold text-[#2c2416] mb-6 sm:mb-8 md:mb-12 text-center ${kaushan.className}`}>
            Our Signature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {/* Product Card 1 */}
            <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${kaushan.className}`}>
              <div className="relative h-40 sm:h-48 md:h-64">
                <Image
                  src="/images/longa.jpg"
                  alt="Longanisa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold text-[#d32f2f] mb-1 sm:mb-2 md:mb-4 ${kaushan.className}`}>
                  Longanisa
                  <span className={`block text-xs sm:text-sm font-normal text-[#4a4235] mt-1 font-agbalumo`}>
                    Filipino - Style Sausage
                  </span>
                </h3>
                <p className={`text-xs sm:text-sm md:text-base text-[#4a4235] font-agbalumo`}>
                  Savory, sweet, and packed with flavor, our longanisa is perfect for breakfast, lunch, or dinner.
                </p>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${kaushan.className}`}>
              <div className="relative h-40 sm:h-48 md:h-64">
                <Image
                  src="/images/products/tocino-recipe.jpg"
                  alt="Tocino"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold text-[#d32f2f] mb-1 sm:mb-2 md:mb-4 ${kaushan.className}`}>
                  Tocino
                  <span className={`block text-xs sm:text-sm font-normal text-[#4a4235] mt-1 font-agbalumo`}>
                    Sweet & Savory Marinated Meat
                  </span>
                </h3>
                <p className={`text-xs sm:text-sm md:text-base text-[#4a4235] font-agbalumo`}>
                  Perfectly marinated for a mouthwatering experience!
                </p>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${kaushan.className}`}>
              <div className="relative h-40 sm:h-48 md:h-64">
                <Image
                  src="/images/products/soppi.jpg"
                  alt="Siopao"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold text-[#d32f2f] mb-1 sm:mb-2 md:mb-4 ${kaushan.className}`}>
                  Siopao
                  <span className={`block text-xs sm:text-sm font-normal text-[#4a4235] mt-1 font-agbalumo`}>
                    Soft & Fluffy Steamed Buns
                  </span>
                </h3>
                <p className={`text-xs sm:text-sm md:text-base text-[#4a4235] font-agbalumo `}>
                  A comforting blend of sweet, salty, and meaty flavors in every bite.
                </p>
              </div>
            </div>

            {/* Side by Side Cards - Adjusted to stack on mobile */}
            <div className="col-span-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                {/* Lumpia Card */}
                <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${kaushan.className}`}>
                  <div className="relative h-40 sm:h-48 md:h-64">
                    <Image
                      src="/images/lumpia.jpg"
                      alt="Lumpia Shanghai"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 sm:p-4 md:p-6">
                    <h3 className={`text-lg sm:text-xl md:text-2xl font-bold text-[#d32f2f] mb-1 sm:mb-2 md:mb-4 ${kaushan.className}`}>
                      Lumpia Shanghai
                      <span className={`block text-xs sm:text-sm font-normal text-[#4a4235] mt-1 font-agbalumo`}>
                        Crispy & Flavorful Spring Rolls
                      </span>
                    </h3>
                    <p className={`text-xs sm:text-sm md:text-base text-[#4a4235] font-agbalumo`}>
                      Golden, crispy, and packed with savory goodness!
                    </p>
                  </div>
                </div>

                {/* Beef Tapa Card */}
                <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${kaushan.className}`}>
                  <div className="relative h-40 sm:h-48 md:h-64">
                    <Image
                      src="/images/tap.jpg"
                      alt="Beef Tapa"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 sm:p-4 md:p-6">
                    <h3 className={`text-lg sm:text-xl md:text-2xl font-bold text-[#d32f2f] mb-1 sm:mb-2 md:mb-4 ${kaushan.className}`}>
                      Beef Tapa
                      <span className={`block text-xs sm:text-sm font-normal text-[#4a4235] mt-1 font-agbalumo`}>
                        Marinated Beef Slices
                      </span>
                    </h3>
                    <p className={`text-xs sm:text-sm md:text-base text-[#4a4235] font-agbalumo`}>
                      A Filipino breakfast staple, marinated with bold flavors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Improved padding for mobile */}
        <section className={`bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 md:mb-20 ${kaushan.className}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-xl sm:text-2xl md:text-4xl font-bold text-[#2c2416] mb-3 sm:mb-4 md:mb-6 ${kaushan.className}`}>
              Family Recipes, Perfected Over Generations
            </h2>
            <p className={`text-sm sm:text-base md:text-lg text-[#4a4235] mb-4 md:mb-6 px-2 font-agbalumo`}>
              Since 1989, we've been dedicated to bringing you the authentic taste of Filipino cuisine. 
              Our products are made with no artificial colors, flavors, or fillers - just pure, natural goodness.
            </p>
            <a
              href="/about"
              className={`inline-block rounded-lg bg-[#d32f2f] text-white px-4 py-2 sm:px-6 md:px-8 md:py-3 text-xs sm:text-sm md:text-base font-medium hover:bg-[#b71c1c] transition-colors font-agbalumo`}
            >
              Learn More About Us
            </a>
          </div>
        </section>
      </main>
      
      {/* Add some padding at the bottom for the fixed mobile nav */}
      <div className="h-16 md:h-0"></div>
    </div>
  );
}
"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";

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
    <div className="min-h-screen bg-gradient-to-b from-[#fff3e0] to-[#fff9e8]">
      <style jsx>{`
        body {
          background: linear-gradient(to bottom, #fff3e0, #fff9e8);
        }
      `}</style>
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="relative h-[30vh] md:h-[50vh] lg:h-[60vh] max-h-[700px] rounded-xl overflow-hidden mb-8 md:mb-16">
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

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4 md:p-8">
            <div className="w-[300px] md:w-[600px] max-w-[90%] mb-8">
              <Image
                src="/images/logo.png"
                alt="Manila's Ihawan Logo"
                width={1200}
                height={480}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Authentic Filipino Flavors
            </h1>
            <p className="text-sm md:text-lg text-white/90 max-w-2xl mb-4 md:mb-8">
              Authentic Filipino flavors crafted with love since 1989. Experience the best Longanisa, Tocino, and more!
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <a
                className="rounded-lg bg-[var(--primary)] text-white px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium hover:bg-[#b71c1c] transition-colors duration-300 transform hover:scale-105"
                href="/products"
              >
                Explore Our Products
              </a>
              <a
                className="rounded-lg border-2 border-white text-white px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-colors duration-300"
                href="/about"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-[#2c2416] mb-8 md:mb-12 text-center">
            Our Signature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">


            {/* Product Cards */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 md:h-64">
                <Image
                  src="/images/longa.jpg"
                  alt="Longanisa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#d32f2f] mb-2 md:mb-4">
                  Longanisa
                  <span className="block text-sm font-normal text-[#4a4235] mt-1">
                    Filipino - Style Sausage
                  </span>
                </h3>
                <p className="text-sm md:text-base text-[#4a4235]">
                  Savory, sweet, and packed with flavor, our longanisa is perfect for breakfast, lunch, or dinner.
                </p>
              </div>
            </div>


                        {/* Product Cards */}
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 md:h-64">
                <Image
                  src="/images/products/tocino-recipe.jpg"
                  alt="Longanisa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#d32f2f] mb-2 md:mb-4">
                Tocino
                  <span className="block text-sm font-normal text-[#4a4235] mt-1">
                  Sweet & Savory Marinated Meat
                  </span>
                </h3>
                <p className="text-sm md:text-base text-[#4a4235]">
                Perfectly marinated for a mouthwatering experience!
                </p>
              </div>
            </div>

                        {/* Product Cards */}
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 md:h-64">
                <Image
                  src="/images/products/soppi.jpg"
                  alt="Longanisa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#d32f2f] mb-2 md:mb-4">
                Siopao
                  <span className="block text-sm font-normal text-[#4a4235] mt-1">
                  Soft & Fluffy Steamed Buns
                  </span>
                </h3>
                <p className="text-sm md:text-base text-[#4a4235]">
                A comforting blend of sweet, salty, and meaty flavors in every bite.
                </p>
              </div>
            </div>

            {/* Side by Side Cards */}
            <div className="col-span-full flex justify-center gap-4 md:gap-8">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 md:h-64">
                  <Image
                    src="/images/lumpia.jpg"
                    alt="Lumpia Shanghai"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[#d32f2f] mb-2 md:mb-4">Lumpia Shanghai</h3>
                  <span className="block text-sm font-normal text-[#4a4235] mt-1">
                    Crispy & Flavorful Spring Rolls
                  </span>
                  <p className="text-sm md:text-base text-[#4a4235]">
                    Golden, crispy, and packed with savory goodness!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 md:h-64">
                  <Image
                    src="/images/tap.jpg"
                    alt="Beef Tapa"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[#d32f2f] mb-2 md:mb-4">Beef Tapa</h3>
                  <p className="text-sm md:text-base text-[#4a4235]">
                    A Filipino breakfast staple, marinated with bold flavors.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* About Section */}
        <section className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-8 mb-12 md:mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-[#2c2416] mb-4 md:mb-6">
              Family Recipes, Perfected Over Generations
            </h2>
            <p className="text-base md:text-lg text-[#4a4235] mb-4 md:mb-6">
              Since 1989, we've been dedicated to bringing you the authentic taste of Filipino cuisine. 
              Our products are made with no artificial colors, flavors, or fillers - just pure, natural goodness.
            </p>
            <a
              href="/about"
              className="inline-block rounded-lg bg-[#d32f2f] text-white px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium hover:bg-[#b71c1c] transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}

"use client"

import React, { useState } from 'react';
import Image from "next/image";

export default function Partners() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const partners = [
    {
      name: "Filipino Grocery Market",
      category: "retailer",
      location: "San Francisco, CA",
      image: "https://logo.clearbit.com/philippinefoodmarket.com",
      description: "A premier Filipino grocery store carrying our complete product line since 2005."
    },
    {
      name: "Pacific Asian Market",
      category: "retailer",
      location: "Los Angeles, CA",
      image: "https://logo.clearbit.com/filstop.com",
      description: "Southern California's largest Asian supermarket featuring Manila's Ihawan products."
    },
    {
      name: "Manila Bay Restaurant",
      category: "restaurant",
      location: "Seattle, WA",
      image: "https://logo.clearbit.com/99ranch.com",
      description: "Award-winning Filipino restaurant using our authentic ingredients in their signature dishes."
    },
    {
      name: "Asian Fusion Catering",
      category: "caterer",
      location: "Chicago, IL",
      image: "https://logo.clearbit.com/islandpacificmarket.com",
      description: "Professional catering service specializing in Filipino-inspired cuisine for events of all sizes."
    },
    {
      name: "FilAmMart",
      category: "retailer",
      location: "New York, NY",
      image: "/images/products/soppi.jpg",
      description: "East coast's favorite Filipino grocery store carrying Manila's Ihawan since 2010."
    },
    {
      name: "Pinoy Bistro",
      category: "restaurant",
      location: "Houston, TX",
      image: "/images/lumpia.jpg",
      description: "Modern Filipino restaurant showcasing our premium meats in their innovative dishes."
    }
  ];

  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff3e0] to-[#fff9e8]">
      <style jsx>{`
        body {
          background: linear-gradient(to bottom, #fff3e0, #fff9e8);
        }
      `}</style>
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="relative h-[30vh] md:h-[40vh] rounded-xl overflow-hidden mb-8 md:mb-16">
          <div className="absolute inset-0">
            <Image
              src="/images/tc1.jpg"
              alt="Our Partners"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Our Partners
            </h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              Meet the retailers, restaurants, and caterers who proudly feature Manila's Ihawan products
            </p>
          </div>
        </div>

                {/* Introduction Section */}
                <section className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-8 mb-12 md:mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-[#2c2416] mb-4 md:mb-6">
              Trusted Partnerships
            </h2>
            <p className="text-base md:text-lg text-[#4a4235] mb-4 md:mb-6">
              Since 1989, Manila's Ihawan has been working with premium retailers and distributors to ensure our authentic Filipino products are available to customers across North America. We partner with businesses who share our commitment to quality and cultural authenticity.
            </p>
            <p className="text-base md:text-lg text-[#4a4235]">
              Find our products at these fine establishments or <a href="/contact" className="text-[#d32f2f] hover:underline">contact us</a> to become a partner.
            </p>
          </div>
        </section>

        {/* Partner Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-12">
          <button 
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
              activeCategory === 'all' 
                ? 'bg-[#d32f2f] text-white' 
                : 'bg-white/70 text-[#4a4235] hover:bg-[#d32f2f]/10'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All Partners
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
              activeCategory === 'retailer' 
                ? 'bg-[#d32f2f] text-white' 
                : 'bg-white/70 text-[#4a4235] hover:bg-[#d32f2f]/10'
            }`}
            onClick={() => setActiveCategory('retailer')}
          >
            Retailers
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
              activeCategory === 'restaurant' 
                ? 'bg-[#d32f2f] text-white' 
                : 'bg-white/70 text-[#4a4235] hover:bg-[#d32f2f]/10'
            }`}
            onClick={() => setActiveCategory('restaurant')}
          >
            Restaurants
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
              activeCategory === 'caterer' 
                ? 'bg-[#d32f2f] text-white' 
                : 'bg-white/70 text-[#4a4235] hover:bg-[#d32f2f]/10'
            }`}
            onClick={() => setActiveCategory('caterer')}
          >
            Caterers
          </button>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {filteredPartners.map((partner, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              <div className="relative h-48 md:h-56">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-[#d32f2f] text-white text-xs px-2 py-1 rounded uppercase">
                  {partner.category}
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#d32f2f] mb-1">
                  {partner.name}
                </h3>
                <p className="text-sm text-[#4a4235] mb-3">
                  <span className="inline-block mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  {partner.location}
                </p>
                <p className="text-sm md:text-base text-[#4a4235]">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

                {/* Call to Action */}
                <section className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2c2416] mb-4">
            Ready to Join the Manila's Ihawan Family?
          </h2>
          <p className="text-[#4a4235] max-w-2xl mx-auto mb-6">
            Take the first step toward bringing authentic Filipino flavors to your customers.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-[#d32f2f] text-white px-6 py-3 text-base font-medium hover:bg-[#b71c1c] transition-colors"
            >
              Apply Now
            </a>
            <a
              href="/wholesale"
              className="rounded-lg border-2 border-[#d32f2f] text-[#d32f2f] px-6 py-3 text-base font-medium hover:bg-[#d32f2f]/10 transition-colors"
            >
              Wholesale Info
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
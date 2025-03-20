"use client"

import React from 'react';
import Image from "next/image";

export default function Partners() {
  const partners = [
    {
      name: "H Mart",
      image: "/images/logo/1.png"
    },
    {
      name: "Island Pacific Supermarket",
      image: "/images/logo/2.png"
    },
    {
      name: "99 Ranch Market",
      image: "/images/logo/3.jpg"
    },
    {
      name: "FilStop Filipino Store",
      image: "/images/logo/4.jpg"
    },
    {
      name: "Philippine Food Market",
      image: "/images/logo/5.jpg"
    },
    {
      name: "Oriental Mart",
      image: "/images/logo/6.jpg"
    },
    {
      name: "Filipino Grocers Alliance",
      image: "/images/logo/7.jpg"
    },
    {
      name: "Asian Food Distributors",
      image: "/images/logo/8.jpg"
    },
    {
      name: "Manila Mart",
      image: "/images/logo/9.jpg"
    },
    {
      name: "Pacific Asian Foods",
      image: "/images/logo/10.jpg"
    },
    {
      name: "Filipino Flavors",
      image: "/images/logo/11.jpg"
    },
    {
      name: "FilStop Filipino Store",
      image: "/images/logo/12.jpg"
    },
    {
      name: "Oriental Mart",
      image: "/images/logo/14.png"
    },
    {
      name: "Filipino Grocers Alliance",
      image: "/images/logo/15.png"
    },
    {
      name: "Asian Food Distributors",
      image: "/images/logo/16.png"
    },
    {
      name: "Manila Mart",
      image: "/images/logo/17.png"
    },
    {
      name: "Pacific Asian Foods",
      image: "/images/logo/18.png"
    },
    {
      name: "Filipino Flavors",
      image: "/images/logo/19.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff3e0] to-[#fff9e8]">
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
        <section className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 mb-8 md:mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl font-bold text-[#2c2416] mb-4">
              Where to Find Manila's Ihawan Products
            </h2>
            <p className="text-base text-[#4a4235]">
              Since 1989, we've partnered with these fine establishments to bring our authentic Filipino products to customers across North America.
            </p>
          </div>
        </section>

        <h2 className="text-2xl md:text-4xl font-bold text-[#2c2416] mb-8 text-center">
           Retails
          </h2>

        {/* Partners Logo Grid */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300 p-4 flex items-center justify-center">
                <div className="relative h-24 md:h-32 w-full">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="object-contain"
                    unoptimized={true}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <h2 className="text-2xl md:text-4xl font-bold text-[#2c2416] mb-8 text-center">
           Food Services
          </h2>

        {/* Partners Logo Grid */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300 p-4 flex items-center justify-center">
                <div className="relative h-24 md:h-32 w-full">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="object-contain"
                    unoptimized={true}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

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
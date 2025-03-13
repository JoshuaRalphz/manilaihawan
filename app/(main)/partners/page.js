"use client"

import React from 'react';
import Image from "next/image";

export default function Partners() {
  // Partner data - you can replace with your actual partners
  const partners = [
    {
      name: "Seafood City Supermarket",
      logo: "https://logo.clearbit.com/seafoodcity.com",
      description: "Supporting Filipino grocery stores across North America since 1985.",
      type: "Retail Partner"
    },
    {
      name: "Island Pacific Supermarket",
      logo: "https://logo.clearbit.com/islandpacificmarket.com",
      description: "Premium distributor of Asian food products to restaurants and retailers.",
      type: "Retail Partner"
    },
    {
      name: "99 Ranch Market",
      logo: "https://logo.clearbit.com/99ranch.com",
      description: "Annual celebration of Filipino culinary traditions and cultural heritage.",
      type: "Retail Partner"
    },
    {
      name: "FilStop Filipino Store",
      logo: "https://logo.clearbit.com/filstop.com",
      description: "International marketplace featuring authentic ingredients from around the world.",
      type: "Retail Partner"
    },
    {
      name: "Philippine Food Market",
      logo: "https://logo.clearbit.com/philippinefoodmarket.com",
      description: "Promoting Asian cuisine and food products throughout North America.",
      type: "Retail Partner"
    },
    {
      name: "Oriental Mart",
      logo: "https://logo.clearbit.com/orientalmart.com",
      description: "Supporting local communities through food education and outreach programs.",
      type: "Retail Partner"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff3e0] to-[#fff9e8]">
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="relative h-[30vh] md:h-[40vh] rounded-xl overflow-hidden mb-8 md:mb-16">
          <div className="absolute inset-0">
            <Image
              src="/images/tc1.jpg" // Already using an existing image
              alt="Our Partners"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Partners
            </h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              Building relationships that bring authentic Filipino flavors to more tables around the world.
            </p>
          </div>
        </div>


        {/* Partner Showcase Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#2c2416] mb-8 text-center">
            Our Valued Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="relative h-40 bg-gray-50 flex items-center justify-center p-6">
                  <div className="relative h-full w-full">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-[#f8e8d4] text-[#d32f2f] rounded-full mb-2">
                    {partner.type}
                  </span>
                  <h3 className="text-xl font-bold text-[#2c2416] mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-[#4a4235]">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

                {/* Become a Partner Section */}
                <section className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-12 md:mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2c2416] mb-4">
                  Become a Partner
                </h2>
                <p className="text-base text-[#4a4235] mb-6">
                  Join our growing network of retailers, restaurants, and caterers featuring Manila's Ihawan products. We offer flexible wholesale pricing, marketing support, and dedicated customer service.
                </p>
                <ul className="space-y-2 mb-6 text-[#4a4235]">
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-[#d32f2f] mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Competitive wholesale pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-[#d32f2f] mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Marketing and promotional support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-[#d32f2f] mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Reliable delivery and order fulfillment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-[#d32f2f] mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Dedicated account management</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="inline-block rounded-lg bg-[#d32f2f] text-white px-6 py-3 text-base font-medium hover:bg-[#b71c1c] transition-colors"
                >
                  Contact Us to Partner
                </a>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/tapa.jpg"
                    alt="Partnership"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

   
        {/* FAQ Section */}
        <section className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2c2416] mb-8 text-center">
            Partnership FAQs
          </h2>
          <div className="bg-white rounded-xl shadow-lg divide-y">
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#2c2416] mb-2">
                What types of partnerships do you offer?
              </h3>
              <p className="text-[#4a4235]">
                We offer partnerships for distributors, retailers, restaurants, caterers, and community organizations. Each partnership is tailored to meet the specific needs of your business.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#2c2416] mb-2">
                Is there a minimum order requirement?
              </h3>
              <p className="text-[#4a4235]">
                Yes, we have minimum order quantities that vary based on partnership type and location. Contact our team for specific details relevant to your business.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#2c2416] mb-2">
                Do you provide marketing support for partners?
              </h3>
              <p className="text-[#4a4235]">
                Absolutely! We offer marketing materials, product training, and collaborative promotional opportunities to help boost sales and customer engagement.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#2c2416] mb-2">
                What is your delivery area?
              </h3>
              <p className="text-[#4a4235]">
                We currently service partners throughout North America, with plans to expand to international markets. Special arrangements can be made for locations outside our standard delivery zones.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Modal } from 'antd'; // Using Ant Design Modal as requested
// import 'antd/dist/reset.css'; // Uncomment if styles look broken, though usually handled globally in Next.js
import { Shrikhand, Kaushan_Script, Jomhuria, Poppins } from 'next/font/google';

// --- Font Configurations ---
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

const poppins = Poppins({
  weight: '400', 
  subsets: ['latin'], 
});

// --- Data Structure (From Reference File) ---
const products = [
  {
    title: "Longanisa",
    image: "/images/longa.jpg", // Adjusted to match your File 1 logic, or use "/images/home/m2.jpg"
    description: "Filipino - Style Sausage - Savory, sweet, and packed with flavor, our longanisa is perfect for breakfast, lunch, or dinner.",
    items: [
      { 
        name: "Sweet Longanisa", 
        image: "/images/products/longanisa/1.png",
        description: "A deliciously sweet pork sausage with a perfect balance of savory and garlicky notes. A family favorite!"
      },
      { 
        name: "Hot Longanisa", 
        image: "/images/products/longanisa/2.png",
        description: "For those who love a little spice, this longanisa has just the right amount of heat combined with savory goodness."
      },
      { 
        name: "Vigan Pork Longanisa", 
        image: "/images/products/longanisa/3.png",
        description: "A bold and distinct flavor with a garlicky, sour, and savory profile. A must-try for garlic lovers!"
      },
      { 
        name: "Chorizo de Cebu", 
        image: "/images/products/longanisa/7.jpg", // This is the path you were struggling with
        description: "Sweet, garlicky, and boldly savory. A true Cebu style classic with balanced sweetness and aromatic garlic.",
        isNew: true
      }
    ]
  },
  {
    title: "Tocino",
    image: "/images/products/tocino-recipe.jpg",
    description: "Sweet & Savory Marinated Meat - Perfectly marinated for a mouthwatering experience!",
    items: [
      { 
        name: "Pork Tocino", 
        image: "/images/products/tocino/1.png",
        description: "The classic sweet and savory Filipino favorite, marinated to perfection."
      },
      { 
        name: "Chicken Tocino", 
        image: "/images/products/tocino/2.png",
        description: "A deliciously sweet and savory chicken alternative to the traditional tocino."
      }
    ]
  },
  {
    title: "Siopao",
    image: "/images/products/soppi.jpg",
    description: "Soft & Fluffy Steamed Buns - A comforting blend of sweet, salty, and meaty flavors.",
    items: [
      { 
        name: "Pork Asado Siopao", 
        image: "/images/products/siopao/1.png",
        description: "A Filipino classic filled with juicy, savory-sweet pork."
      },
      { 
        name: "Chicken Asado Siopao", 
        image: "/images/products/siopao/2.png",
        description: "A flavorful chicken alternative with a perfect balance of sweet and savory."
      },
    ]
  },
  {
    title: "Lumpia Shanghai",
    image: "/images/lumpia.jpg",
    description: "Crispy & Flavorful Spring Rolls - Golden, crispy, and packed with savory goodness!",
    items: [
      { 
        name: "Pork Lumpia Shanghai", 
        image: "/images/products/shanghai/1.png",
        description: "A meaty and garlicky filling wrapped in a crispy golden shell."
      },
      { 
        name: "Chicken Lumpia Shanghai", 
        image: "/images/products/shanghai/2.png",
        description: "A lighter yet equally flavorful version of the classic lumpia."
      }
    ]
  },
  {
    title: "Beef Tapa",
    image: "/images/tap.jpg",
    description: "A Filipino breakfast staple, marinated with bold flavors.",
    items: [
      { 
        name: "Beef Tapa", 
        image: "/images/products/tapa/1.png",
        description: "Our take on this classic dish, featuring a delicious combination of garlic and soy sauce."
      }
    ]
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // --- Modal State ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // Carousel Images
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

  // Logic to open modal
  const handleOpenModal = (image, item) => {
    setSelectedImage(image);
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedItem(null);
  };

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
        
        {/* --- Hero Section --- */}
        <div className="relative h-[50vh] sm:h-[50vh] md:h-[60vh] rounded-xl overflow-hidden mb-8 md:mb-16">
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
            <p className={`text-base sm:text-lg md:text-2xl text-white/90 max-w-2xl mb-3 md:mb-8 px-2 ${poppins.className}`}>
              Authentic Filipino flavors crafted with love since 1989. Experience the best Longanisa, Tocino, and more!
            </p>
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 ${poppins.className}`}>
              <a
                className="rounded-lg bg-[var(--primary)] text-white px-4 py-2 sm:px-6 md:px-8 md:py-3 text-xs sm:text-sm md:text-base font-medium hover:bg-[#b71c1c] transition-colors duration-300 transform hover:scale-105"
                href="#products"
              >
                Explore Our Products
              </a>
            </div>
          </div>
        </div>

        {/* --- Spotlight Section (Chorizo) --- */}
        <section className="mb-8 sm:mb-12 md:mb-16">
          <div className="relative bg-gradient-to-r from-[#d32f2f] to-[#b71c1c] rounded-2xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 sm:p-8 md:p-10">
              <div className="relative w-full md:w-80 h-56 md:h-64 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="/images/products/chor2.jpg"
                  alt="Chorizo De Cebu - New!"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 right-3 bg-amber-400 text-[#2c2416] px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-md">
                  New
                </span>
              </div>
              <div className="text-center md:text-left text-white flex-1">
                <p className={`text-amber-300 text-sm sm:text-base font-medium uppercase tracking-wider mb-1 ${poppins.className}`}>
                  Just arrived
                </p>
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 ${kaushan.className}`}>
                  Chorizo De Cebu
                </h2>
                <p className={`text-white/95 text-sm sm:text-base md:text-lg mb-4 md:mb-6 max-w-xl ${poppins.className}`}>
                Sweet, garlicky, and boldly savory. Made with premium pork and natural spices for a rich, juicy bite.
                </p>
                <button
                  onClick={() => handleOpenModal("/images/products/longanisa/7.jpg", { 
                    name: "Chorizo De Cebu", 
                    description: "Sweet, garlicky, and boldly savory. A true Cebu style classic with balanced sweetness, aromatic garlic, and deep savory flavor in every link." 
                  })}
                  className={`inline-block rounded-lg bg-white text-[#d32f2f] px-5 py-2.5 sm:px-6 md:px-8 md:py-3 text-sm md:text-base font-semibold hover:bg-amber-50 transition-colors duration-300 ${poppins.className}`}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- Products Section (Mapped from Data) --- */}
        <section id="products" className="mb-8 sm:mb-12 md:mb-20">
          <h2 className={`text-xl sm:text-2xl md:text-4xl font-bold text-[#2c2416] mb-6 sm:mb-8 md:mb-12 text-center ${kaushan.className}`}>
            Our Signature Products
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {products.map((product, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer ${kaushan.className}`}
                // If there are sub-items, we open the first one by default or handle logic differently
                // For simplicity here, we open the main product image
                onClick={() => handleOpenModal(product.image, { name: product.title, description: product.description })}
              >
                <div className="relative h-40 sm:h-48 md:h-64">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold text-[#d32f2f] mb-1 sm:mb-2 md:mb-4 ${kaushan.className}`}>
                    {product.title}
                  </h3>
                  <p className={`text-xs sm:text-sm md:text-base text-[#4a4235] ${poppins.className}`}>
                    {product.description}
                  </p>
                  
                  {/* Optional: Show sub-items as small chips or let user click card to see them in a more complex modal. 
                      For now, adhering to the visual request of the popup style. */}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- About Section --- */}
        <section className={`bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 md:mb-20 ${kaushan.className}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-xl sm:text-2xl md:text-4xl font-bold text-[#2c2416] mb-3 sm:mb-4 md:mb-6 ${kaushan.className}`}>
              Family Recipes, Perfected Over Generations
            </h2>
            <p className={`text-sm sm:text-base md:text-lg text-[#4a4235] mb-4 md:mb-6 px-2 ${poppins.className}`}>
              Since 1989, we've been dedicated to bringing you the authentic taste of Filipino cuisine.
            </p>
          </div>
        </section>

      </main>

      {/* --- Ant Design Modal (The "Pop Up Look" you wanted) --- */}
      <Modal
        open={isModalOpen}
        onCancel={handleModalClose}
        footer={null}
        width="90vw"
        centered
        closeIcon={
          <div className="p-1 sm:p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        }
        styles={{
          body: { padding: 0 }
        }}
      >
        {selectedImage && (
          <div className={`relative ${poppins.className}`}>
            <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] relative">
              <Image
                src={selectedImage}
                alt="Product Preview"
                fill
                className="object-contain"
              />
            </div>
            {selectedItem && (
              <div className="bg-black/75 p-3 sm:p-5 text-white absolute bottom-0 left-0 right-0">
                <h3 className={`font-bold text-lg sm:text-xl mb-2 ${kaushan.className}`}>
                  {selectedItem.name}
                </h3>
                <p className="text-sm sm:text-base text-white/95 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            )}
          </div>
        )}
      </Modal>

      <div className="h-16 md:h-0"></div>
    </div>
  );
}
"use client"

import React, { useState } from 'react';
import Image from "next/image";
import { Card, List, Tooltip, Modal } from 'antd';
import 'antd/dist/reset.css';
import { Kaushan_Script } from 'next/font/google';

const { Meta } = Card;

const kaushan = Kaushan_Script({
  subsets: ['latin'],
  weight: '400',
});

const products = [
  {
    title: "Longanisa",
    image: "/images/home/m2.jpg",
    description: "Filipino - Style Sausage - Savory, sweet, and packed with flavor, our longanisa is perfect for breakfast, lunch, or dinner.",
    items: [
      { 
        name: "Sweet Longanisa", 
        image: "/images/products/longanisa/l1.jpg",
        description: "A deliciously sweet pork sausage with a perfect balance of savory and garlicky notes. A family favorite for its irresistible sweetness!"
      },
      { 
        name: "Hot Longanisa", 
        image: "/images/products/longanisa/l2.jpg",
        description: "For those who love a little spice, this longanisa has just the right amount of heat combined with savory goodness. Loved for its bold kick and rich flavor!"
      },
      { 
        name: "Vigan Pork Longanisa", 
        image: "/images/products/longanisa/vganlong.jpg",
        description: "A bold and distinct flavor with a garlicky, sour, and savory profile. A must-try for garlic lovers!"
      },
      { 
        name: "Pork Adobo Longanisa", 
        image: "/images/products/longanisa/l3.jpg",
        description: "A unique twist on the classic Adobo flavor, featuring rich garlic, soy sauce, and vinegar notes."
      },
      { 
        name: "Chicken Longanisa", 
        image: "/images/products/longanisa/l4.jpg",
        description: "The sweetness of chicken paired with a savory and garlicky finish."
      },
      { 
        name: "Chicken Adobo Longanisa", 
        image: "/images/products/longanisa/chkn adobo.jpg",
        description: "A chicken version of the Adobo-inspired longanisa, highlighting garlic, soy sauce, and vinegar."
      }
    ]
  },
  {
    title: "Tocino",
    image: "/images/home/m3.jpg",
    description: "Sweet & Savory Marinated Meat - Perfectly marinated for a mouthwatering experience!",
    items: [
      { 
        name: "Pork Tocino", 
        image: "/images/products/tocino/p1.jpg",
        description: "The classic sweet and savory Filipino favorite, marinated to perfection. A breakfast staple everyone craves!"
      },
      { 
        name: "Chicken Tocino", 
        image: "/images/products/tocino/chicken tocino.jpg",
        description: "A deliciously sweet and savory chicken alternative to the traditional tocino. A lighter option that doesn't compromise on flavor!"
      }
    ]
  },
  {
    title: "Beef Tapa",
    image: "/images/products/tapa.jpg",
    description: "A Filipino breakfast staple, marinated with bold flavors.",
    items: [
      { 
        name: "Beef Tapa", 
        image: "/images/products/tapa/t1.jpg",
        description: "Our take on this classic dish, featuring a delicious combination of garlic and soy sauce. A go-to for those who love rich, umami flavors!"
      }
    ]
  },
  {
    title: "Siopao",
    image: "/images/products/siopao.jpg",
    description: "Soft & Fluffy Steamed Buns - A comforting blend of sweet, salty, and meaty flavors in every bite.",
    items: [
      { 
        name: "Pork Asado Siopao", 
        image: "/images/products/siopao/sopa2.jpg",
        description: "A Filipino classic filled with juicy, savory-sweet pork. A best-seller for its melt-in-your-mouth goodness!"
      },
      { 
        name: "Chicken Asado Siopao", 
        image: "/images/products/siopao/sopa.jpg",
        description: "A flavorful chicken alternative with a perfect balance of sweet and savory. A fluffy, flavorful delight that's always in demand!"
      },
      { name: "Deluxe Pork Bola Bola Siopao", image: "/images/0.png" },
      { name: "Deluxe Chicken Bola Bola Siopao", image: "/images/0.png" }
    ]
  },
  {
    title: "Lumpia Shanghai",
    image: "/images/products/shanghai.jpg",
    description: "Crispy & Flavorful Spring Rolls - Golden, crispy, and packed with savory goodness!",
    items: [
      { 
        name: "Pork Lumpia Shanghai", 
        image: "/images/products/shanghai/IMG_1321.jpg",
        description: "A meaty and garlicky filling wrapped in a crispy golden shell. Perfectly crunchy and always a hit at gatherings!"
      },
      { 
        name: "Chicken Lumpia Shanghai", 
        image: "/images/products/shanghai/IMG_1322.jpg",
        description: "A lighter yet equally flavorful version of the classic lumpia, packed with delicious chicken filling."
      }
    ]
  }
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleImageClick = (image, item = null) => {
    setSelectedImage(image);
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff3e0] to-[#fff9e8]">
      <style jsx>{`
        body {
          background: linear-gradient(to bottom, #fff3e0, #fff9e8);
        }
      `}</style>
      <main className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Hero Section - Improved mobile responsiveness */}
        <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] max-h-[700px] rounded-xl overflow-hidden mb-8 md:mb-12">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/images/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Overlay Content - Better responsive text sizing and spacing */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
            <div className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px] max-w-[90%] mb-4 sm:mb-6 md:mb-8">
              <Image
                src="/images/logo.png"
                alt="Manila's Ihawan Logo"
                width={1200}
                height={480}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 ${kaushan.className}`}>
              Authentic Flavors of Manila
            </h1>
            <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mb-4 md:mb-6 px-2 font-agbalumo`}>
              Authentic Filipino flavors since 1989. Enjoy our signature Longanisa, Tocino, and more!
            </p>
            <div className="flex flex-row gap-3 sm:gap-4 md:gap-6 justify-center font-agbalumo">
              <a
                className="rounded-lg bg-[var(--primary)] text-white px-4 py-2 sm:px-6 md:px-8 md:py-3 text-xs sm:text-sm md:text-base font-medium hover:bg-[#b71c1c] transition-colors duration-300 transform hover:scale-105"
                href="/products"
              >
                Browse Our Selection
              </a>
              <a
                className="rounded-lg border-2 border-white text-white px-4 py-2 sm:px-6 md:px-8 md:py-3 text-xs sm:text-sm md:text-base font-medium hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-colors duration-300"
                href="/about"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Products Section - Improved grid for different screen sizes */}
        <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c2416] mb-2 sm:mb-4 ${kaushan.className}`}>
              Our Premium Products
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#4a4235] max-w-2xl mx-auto px-2 font-agbalumo">
              Explore our wide range of authentic Filipino products, made with traditional recipes and the finest ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                hoverable
                className="!border-none !shadow-lg hover:!shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover rounded-t-xl"
                    style={{ objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <Meta
                  title={
                    <h2 className={`text-xl sm:text-2xl font-bold text-[#d32f2f] pt-3 sm:pt-4 ${kaushan.className}`}>
                      {product.title}
                    </h2>
                  }
                  description={
                    <div>
                      <p className="text-xs sm:text-sm text-[#4a4235] px-2 sm:px-4 mt-1 sm:mt-2 mb-2 sm:mb-4 leading-relaxed font-agbalumo">
                        {product.description}
                      </p>
                      <List
                        dataSource={product.items}
                        className="mb-4 sm:mb-6"
                        renderItem={(item, idx) => (
                          <div
                            onClick={() => handleImageClick(item.image, item)}
                            className="cursor-pointer group relative"
                          >
                            <List.Item 
                              className="!px-2 sm:!px-4 !py-2 sm:!py-3 !m-0 hover:bg-[#fff3e0] rounded-lg transition-all duration-200 transform hover:scale-[1.02] font-agbalumo"
                            >
                              <div className="flex items-center space-x-2 sm:space-x-3">
                                <span className="w-2 h-2 bg-[#d32f2f] rounded-full"></span>
                                <span className="text-[#4a4235] text-xs sm:text-sm">
                                  {item.name}
                                </span>
                              </div>
                            </List.Item>
                            {/* Tooltip */}
                            <div className="absolute -top-5 right-2 bg-[#d32f2f] text-white px-3 py-1.5 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Click to see
                            </div>
                          </div>
                        )}
                      />
                    </div>
                  }
                />
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Responsive Modal */}
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
          <div className="relative">
            <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] relative">
              <Image
                src={selectedImage}
                alt="Full size preview"
                fill
                className="object-contain"
              />
            </div>
            {selectedItem && selectedItem.description && (
              <div className="bg-black/75 p-3 sm:p-4 text-white text-xs sm:text-sm">
                <h3 className="font-bold mb-1">{selectedItem.name}</h3>
                <p>{selectedItem.description}</p>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
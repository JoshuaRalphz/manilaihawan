"use client"

import { Card, List, Tooltip, Image, ConfigProvider } from 'antd';
import 'antd/dist/reset.css'; // Import Antd styles
import { useState } from 'react';

const { Meta } = Card;

const products = [
  {
    title: "Longanisa",
    image: "/images/home/m2.jpg",
    items: [
      { name: "Sweet Longanisa", image: "/images/products/longanisa/l1.jpg" },
      { name: "Hot Longanisa", image: "/images/products/longanisa/l2.jpg" },
      { name: "Pork Adobo Longanisa", image: "/images/products/longanisa/l3.jpg" },
      { name: "Chicken Longanisa", image: "/images/products/longanisa/l4.jpg" },
      { name: "Chicken Adobo Longanisa", image: "/images/0.png" },
      { name: "Vigan Pork Longanisa", image: "/images/0.png" }
    ]
  },
  {
    title: "Tocino",
    image: "/images/home/m3.jpg",
    items: [
      { name: "Pork Tocino", image: "/images/products/tocino/p1.jpg" },
      { name: "Chicken Tocino", image: "/images/0.png" }
    ]
  },
  {
    title: "Tapa",
    image: "/images/products/tapa.jpg",
    items: [
      { name: "Beef Tapa", image: "/images/products/tapa/t1.jpg" }
    ]
  },
  {
    title: "Siopao",
    image: "/images/products/siopao.jpg",
    items: [
      { name: "Pork Asado Siopao", image: "/images/products/siopao/sp1.jpg" },
      { name: "Chicken Asado Siopao", image: "/images/products/siopao/sp2.jpg" },
      { name: "Deluxe Pork Bola Bola Siopao", image: "/images/0.png" },
      { name: "Deluxe Chicken Bola Bola Siopao", image: "/images/0.png" }
    ]
  },
  {
    title: "Shanghai",
    image: "/images/products/shanghai.jpg",
    items: [
      { name: "Pork Lumpia Shanghai", image: "/images/products/shanghai/sh1.jpg" },
      { name: "Chicken Lumpia Shanghai", image: "/images/0.png" }
    ]
  }
];

export default function Products() {
  const [previewImage, setPreviewImage] = useState(null);

  const handleItemClick = (item) => {
    if (item.image) {
      setPreviewImage(item.image);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#d32f2f',
          borderRadius: 12,
          colorBgContainer: '#ffffff',
          colorText: '#4a4235',
        },
      }}
    >
      <div className="min-h-screen bg-gradient-to-b from-[#f8f4e3] to-[#fff9e8] pt-0 top-0">
        {/* Fixed Hero Section */}
        <div className="relative h-[400px] mb-12 overflow-hidden">
          <div className="absolute inset-0 flex">
            <div className="relative w-1/2 h-full">
              <Image
                src="/images/home/m3.jpg"
                alt="Delicious Filipino Food 1"
                fill="true"
                className="object-cover"
              />
            </div>
            <div className="relative w-1/2 h-full">
              <Image
                src="/images/products/tapa.jpg"
                alt="Delicious Filipino Food 2"
                fill="true"
                className="object-cover"
              />
            </div>
            <div className="relative w-1/2 h-full">
              <Image
                src="/images/home/m3.jpg"
                alt="Delicious Filipino Food 1"
                fill="true"
                className="object-cover"
              />
            </div>
            
          </div>
          

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Taste the Flavors of <span className="text-[#d32f2f]">Manila</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Authentic Filipino flavors crafted with love since 1989
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-12">
            <div className="w-[400px] md:w-[700px] max-w-[95%] flex justify-center">
              <Image
                src="/images/logo.png"
                alt="Manila's Ihawan Logo"
                width={10800}
                height={200}
                className="object-contain"
                priority
              />
            </div>
          </div>

        {/* Products Section */}
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2c2416] mb-4">
              Our Premium Products
            </h2>
            <p className="text-lg text-[#4a4235] max-w-2xl mx-auto">
              Explore our wide range of authentic Filipino products, made with traditional recipes and the finest ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                hoverable
                className="!border-none !shadow-lg hover:!shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill="true"
                    className="object-cover rounded-t-xl"
                    style={{ objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <Meta
                  title={
                    <h2 className="text-2xl font-bold text-[#d32f2f] mb-4">
                      {product.title}
                    </h2>
                  }
                  description={
                    <List
                      dataSource={product.items}
                      className="mb-6"
                      renderItem={(item, idx) => (
                        <Tooltip
                          title={item.image ? (
                            <div className="w-[400px] h-[400px] relative shadow-xl">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={400}
                                height={400}
                                className="object-cover w-full h-full rounded-lg"
                              />
                            </div>
                          ) : null}
                          placement="right"
                          overlayClassName="!max-w-none !p-0"
                          color="white"
                        >
                          <div
                            onClick={() => handleItemClick(item)}
                            className="cursor-pointer"
                          >
                            <List.Item 
                              className="!px-4 !py-3 !m-0 hover:bg-white rounded-lg transition-all duration-200 transform hover:scale-105"
                            >
                              <div className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-[#d32f2f] rounded-full"></span>
                                <span className="text-[#4a4235]">
                                  {item.name}
                                </span>
                              </div>
                            </List.Item>
                          </div>
                        </Tooltip>
                      )}
                    />
                  }
                />
                <button className="w-full bg-[#d32f2f] text-white px-6 py-3 rounded-lg hover:bg-[#b71c1c] transition-colors duration-200 mt-4">
                  Order Now
                </button>
              </Card>
            ))}
          </div>
        </div>

        {/* Image Preview Modal */}
        {previewImage && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setPreviewImage(null)}
          >
            <div className="relative w-full max-w-2xl h-auto">
              <Image
                src={previewImage}
                alt="Preview"
                width={800}
                height={800}
                className="object-cover w-full h-full rounded-lg"
              />
              <button 
                className="absolute -top-8 -right-8 text-white hover:text-[#d32f2f] transition-colors duration-200"
                onClick={() => setPreviewImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </ConfigProvider>
  );
} 
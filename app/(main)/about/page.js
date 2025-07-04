export default function About() {
  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-12 lg:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto bg-gradient-to-b from-[#f8f4e3] to-[#fff9e8]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-[#1a1a1a]">About Manila's Ihawan</h1>
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-lg border border-[#e0e0e0]">
        <p className="text-base sm:text-lg mb-4 sm:mb-6 text-[#444444] leading-relaxed">
          Since 1989, <span className="font-semibold">Manila's Ihawan</span> has been proudly crafting authentic Filipino dishes using only the finest ingredients. Known for our signature Longanisa and Tocino, we ensure that all our products uphold the same commitment to quality—made with fresh, high-grade meats and free from artificial colors, flavors, and fillers.
        </p>
        <p className="text-base sm:text-lg mb-4 sm:mb-6 text-[#444444] leading-relaxed">
        Our story began when Amelita G. Laserna emigrated from the Philippines to the United States in 1980 with a passion for sharing the comforting flavors of Filipino cuisine. She opened a small restaurant in Jersey City, NJ, which quickly became a beloved community favorite. Over the years, our family-run business has grown into a trusted name in the Filipino food industry, now led by Amelita’s children, who continue to honor her dedication to authenticity and excellence.
        </p>
        <p className="text-base sm:text-lg mb-4 sm:mb-6 text-[#444444] leading-relaxed">
        Today, Manila’s Ihawan is not just a household name but also a leading manufacturer and distributor of Filipino food products, bringing the rich flavors of the Philippines to tables across the United States, all while staying true to our heritage.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#1a1a1a]">Our Philosophy</h2>
        <p className="text-lg mb-6 text-[#444444] leading-relaxed">
          At Manila's Ihawan, we believe in preserving the integrity of traditional Filipino flavors. Our products are crafted without fillers, extenders, or artificial colorings, ensuring that every bite delivers authentic taste and nutritional value. We maintain strict quality control measures throughout our production process to guarantee food safety and consistency.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#1a1a1a]">Our Commitment</h2>
        <div className="text-lg mb-6 text-[#444444] leading-relaxed">
          We are dedicated to:
          <ul className="list-disc pl-6 mt-2 space-y-2 text-[#444444]">
            <li>Using only the finest, natural ingredients</li>
            <li>Preserving traditional Filipino recipes</li>
            <li>Maintaining the highest food safety standards</li>
            <li>Providing exceptional customer service</li>
            <li>Supporting sustainable business practices</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
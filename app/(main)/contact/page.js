import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 font-[family-name:var(--font-geist-sans)] max-w-6xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-5 sm:p-8 md:p-10 lg:p-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c2416] mb-4 sm:mb-6 md:mb-8 text-center">
          Contact Manila's Ihawan
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div className="bg-[#f8f4e3] p-4 sm:p-5 md:p-6 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-2 sm:mb-3 md:mb-4">Contact Details</h2>
              <p className="text-base sm:text-lg text-[#4a4235] mb-2 sm:mb-3 md:mb-4">
                <span className="font-medium">Phone:</span> <a href="tel:+19736972240" className="hover:text-[#d32f2f]">(973) 697-2240</a><br />
                <span className="font-medium">Fax:</span> (973) 697-2249
              </p>
              <p className="text-base sm:text-lg text-[#4a4235]">
                <span className="font-medium">Email:</span> <a 
                  href="mailto:info@manilasihawan.com" 
                  className="text-[#d32f2f] hover:underline"
                >
                  info@manilasihawan.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f8f4e3] p-4 sm:p-5 md:p-6 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-3 sm:mb-4 md:mb-6">Send Us a Message</h2>
            <form className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#e0e0e0] focus:ring-2 focus:ring-[#d32f2f] focus:border-[#d32f2f] outline-none text-sm sm:text-base"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#e0e0e0] focus:ring-2 focus:ring-[#d32f2f] focus:border-[#d32f2f] outline-none text-sm sm:text-base"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#e0e0e0] focus:ring-2 focus:ring-[#d32f2f] focus:border-[#d32f2f] outline-none text-sm sm:text-base"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#e0e0e0] focus:ring-2 focus:ring-[#d32f2f] focus:border-[#d32f2f] outline-none text-sm sm:text-base"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#d32f2f] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#b71c1c] transition-colors duration-200 font-medium text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
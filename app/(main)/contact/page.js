import { Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 font-[family-name:var(--font-geist-sans)] max-w-6xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-5 sm:p-8 md:p-10 lg:p-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-[#2c2416] mb-4">
            Contact Manila's Ihawan
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#4a4235] max-w-4xl mx-auto">
            We're here to help! Whether you have questions about our products, need catering information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-[#f8f4e3] p-6 sm:p-8 rounded-xl shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-4">Contact Details</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-[#d32f2f]" />
                  <div>
                    <p className="text-sm sm:text-base text-[#4a4235] font-medium">Phone:</p>
                    <a href="tel:+19736972240" className="text-base sm:text-lg text-[#2c2416] hover:text-[#d32f2f] transition-colors">
                      (973) 697-2240
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-[#d32f2f]" />
                  <div>
                    <p className="text-sm sm:text-base text-[#4a4235] font-medium">Fax:</p>
                    <p className="text-base sm:text-lg text-[#2c2416]">(973) 697-2249</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1 text-[#d32f2f]" />
                  <div>
                    <p className="text-sm sm:text-base text-[#4a4235] font-medium">Email:</p>
                    <a 
                      href="mailto:info@manilasihawan.com" 
                      className="text-base sm:text-lg text-[#2c2416] hover:text-[#d32f2f] transition-colors"
                    >
                      info@manilasihawan.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f8f4e3] p-6 sm:p-8 rounded-xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] focus:ring-2 focus:ring-[#d32f2f] focus:border-[#d32f2f] outline-none text-sm sm:text-base transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] focus:ring-2 focus:ring-[#d32f2f] focus:border-[#d32f2f] outline-none text-sm sm:text-base transition-all"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] focus:ring-2 focus:ring-[#d32f2f] focus:border-[#d32f2f] outline-none text-sm sm:text-base transition-all"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] focus:ring-2 focus:ring-[#d32f2f] focus:border-[#d32f2f] outline-none text-sm sm:text-base transition-all"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#d32f2f] text-white px-6 py-3 rounded-lg hover:bg-[#b71c1c] transition-colors duration-200 font-medium text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
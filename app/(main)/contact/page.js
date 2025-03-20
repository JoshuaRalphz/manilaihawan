import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-6xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 sm:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2c2416] mb-8 text-center">
          Contact Manila's Ihawan
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-[#f8f4e3] p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-[#d32f2f] mb-4">Our Location</h2>
              <p className="text-lg text-[#4a4235]">
                5 Wegmann Way<br />
                Oak Ridge, NJ 07438
              </p>
            </div>

            <div className="bg-[#f8f4e3] p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-[#d32f2f] mb-4">Contact Details</h2>
              <p className="text-lg text-[#4a4235] mb-4">
                <span className="font-medium">Phone:</span> (973) 697-2240<br />
                <span className="font-medium">Fax:</span> (973) 697-2249
              </p>
              <p className="text-lg text-[#4a4235]">
                <span className="font-medium">Email:</span> <a 
                  href="mailto:info@manilasihawan.com" 
                  className="text-[#d32f2f] hover:underline"
                >
                  info@manilasihawan.com
                </a>
              </p>
            </div>

            <div className="bg-[#f8f4e3] p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-[#d32f2f] mb-4">Business Hours</h2>
              <p className="text-lg text-[#4a4235]">
                Monday - Friday: 8:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 3:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f8f4e3] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#d32f2f] mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] focus:ring-2 focus:ring-[#d32f2f] focus:border-[#d32f2f] outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] focus:ring-2 focus:ring-[#d32f2f] focus:border-[#d32f2f] outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] focus:ring-2 focus:ring-[#d32f2f] focus:border-[#d32f2f] outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] focus:ring-2 focus:ring-[#d32f2f] focus:border-[#d32f2f] outline-none text-sm md:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#d32f2f] text-white px-6 py-3 rounded-lg hover:bg-[#b71c1c] transition-colors duration-200 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.234567890123!2d-74.12345678901234!3d40.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzE1LjYiTiA3NMKwMDcnMjEuNyJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
} 
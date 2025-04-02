'use client'; // This directive makes the component a Client Component

import { Send } from 'lucide-react';

export default function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-3 py-2 rounded-lg border border-[#e0e0e0] focus:ring-2 focus:ring-[#d32f2f] focus:border-[#d32f2f] outline-none text-xs sm:text-sm transition-all"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-3 py-2 rounded-lg border border-[#e0e0e0] focus:ring-2 focus:ring-[#d32f2f] focus:border-[#d32f2f] outline-none text-xs sm:text-sm transition-all"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full px-3 py-2 rounded-lg border border-[#e0e0e0] focus:ring-2 focus:ring-[#d32f2f] focus:border-[#d32f2f] outline-none text-xs sm:text-sm transition-all"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full px-3 py-2 rounded-lg border border-[#e0e0e0] focus:ring-2 focus:ring-[#d32f2f] focus:border-[#d32f2f] outline-none text-xs sm:text-sm transition-all"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-[#d32f2f] text-white px-4 py-2 rounded-lg hover:bg-[#b71c1c] transition-colors duration-200 font-medium text-xs sm:text-sm flex items-center justify-center gap-1"
      >
        <Send className="w-4 h-4" />
        Send Message
      </button>
    </form>
  );
} 
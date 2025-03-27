import { Inter, Roboto_Mono } from "next/font/google";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Poppins } from 'next/font/google';
import { Kaushan_Script } from "next/font/google";
import { Shrikhand } from "next/font/google";

// Configure Jost font with additional options
const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  weight: ['400', '500', '600', '700'], // Add specific weights you need
  display: 'swap', // Better font loading behavior
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

// Configure Kaushan Script font
const kaushanScript = Kaushan_Script({
  subsets: ['latin'],
  weight: '400', // Kaushan Script only has one weight
  variable: '--font-kaushan-script',
});

// Configure Shrikhand font
const shrikhand = Shrikhand({
  subsets: ['latin'],
  weight: '400', // Shrikhand only has one weight
  variable: '--font-shrikhand',
});

export const metadata = {
  title: "Manila's Ihawan",
  description: "Authentic Filipino flavors since 1989",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable} ${poppins.variable} ${kaushanScript.variable} ${shrikhand.variable}`}>
      <body className="font-sans antialiased bg-gradient-to-b from-[#fff3e0] to-[#fff9e8]">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

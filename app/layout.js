import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Define your Google Fonts using built-in next/font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata = {
  title: "Manila's Ihawan",
  description: "Authentic Filipino flavors since 1989",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased bg-gradient-to-b from-[#fff3e0] to-[#fff9e8]`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

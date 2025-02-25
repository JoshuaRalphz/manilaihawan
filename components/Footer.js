export default function Footer() {
  return (
    <footer className="mt-20 py-8 bg-yellow-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm text-white/80">
              Since 1989, we've been dedicated to bringing you the authentic taste of Filipino cuisine.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-white/80 hover:text-yellow-800 transition-colors">Home</a></li>
              <li><a href="/products" className="text-sm text-white/80 hover:text-yellow-800 transition-colors">Products</a></li>
              <li><a href="/about" className="text-sm text-white/80 hover:text-yellow-800 transition-colors">About</a></li>
              <li><a href="/contact" className="text-sm text-white/80 hover:text-yellow-800 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="text-sm text-white/80 space-y-2">
              <p>5 Wegmann Way, Oak Ridge, NJ 07438</p>
              <p>Phone: (973) 697-2240</p>
              <p>Email: info@manilasihawan.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Manila's Ihawan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 
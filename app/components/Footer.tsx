// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-black rounded-t-2xl text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <img src="https://res.cloudinary.com/duezzgkri/image/upload/v1751784778/logo_cjqpyt.png" alt="" className="w-40 invert mb-8" />
          <p className="mt-2 text-sm">
            3rd-generation plumber, trusted for expert domestic plumbing solutions.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/#services" className="hover:text-white transition">Services</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Email: <a href="mailto:aceplumbingsolutions@gmail.com" className="hover:text-white transition">aceplumbingsolutions@gmail.com</a></li>
            <li>Phone: <a href="tel:+447376048596" className="hover:text-white transition">+44 7376 048 596</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 py-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Ace Plumbing Solutions Ltd. All rights reserved.<br/>
        Made With ♡ By Chell Technology Solutions
      </div>
    </footer>
  );
}

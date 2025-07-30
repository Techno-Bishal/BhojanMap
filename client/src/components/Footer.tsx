import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="text-xl font-bold text-lime-400">
          BhojanMap
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <Link to="/" className="hover:text-lime-400 transition">Home</Link>
          <Link to="/" className="hover:text-lime-400 transition">About Us</Link>
          <Link to="/" className="hover:text-lime-400 transition">Menu</Link>
          <Link to="/contact" className="hover:text-lime-400 transition">Contact</Link>
          <Link to="/" className="hover:text-lime-400 transition">Privacy Policy</Link>
          <Link to="/" className="hover:text-lime-400 transition">Terms of Service</Link>
        </nav>

        {/* Social Media */}
        <div className="flex gap-5 text-gray-400">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <Twitter size={20} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <Instagram size={20} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-8">
        &copy; 2025 BhojanMap. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

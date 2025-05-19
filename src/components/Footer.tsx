
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-kraft-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/9fdee2ea-d6f1-4091-85d0-a294840bcf6b.png"
                alt="Box of Wishes Logo"
                className="h-12 w-12 mr-3 rounded-full bg-white p-1"
              />
              <span className="text-xl font-semibold">Box of Wishes</span>
            </div>
            <p className="text-gray-300 mb-4">
              Premium packaging solutions crafted with love and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/box_of_wishes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pastel-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-pastel-pink transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@boxofwishes.com"
                className="text-white hover:text-pastel-pink transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/custom-orders" className="text-gray-300 hover:text-white transition-colors">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/cake-boxes" className="text-gray-300 hover:text-white transition-colors">
                  Cake Boxes
                </Link>
              </li>
              <li>
                <Link to="/category/brownie-boxes" className="text-gray-300 hover:text-white transition-colors">
                  Brownie Boxes
                </Link>
              </li>
              <li>
                <Link to="/category/cupcake-holders" className="text-gray-300 hover:text-white transition-colors">
                  Cupcake Holders
                </Link>
              </li>
              <li>
                <Link to="/category/festive-custom" className="text-gray-300 hover:text-white transition-colors">
                  Festive & Custom Orders
                </Link>
              </li>
              <li>
                <Link to="/category/ribbons" className="text-gray-300 hover:text-white transition-colors">
                  Ribbons & Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Packaging Street, 
                  <br />
                  Bakers Lane, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors">
                  +91 9876 543210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <a href="mailto:info@boxofwishes.com" className="text-gray-300 hover:text-white transition-colors">
                  info@boxofwishes.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Box of Wishes. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/9fa1b668-2fe3-4846-873a-46bc77e11e5e.png" 
              alt="Box of Wishes Logo" 
              className="h-16 w-auto mr-2"
            />
            <span className="text-2xl font-semibold text-festive-red hidden md:block">Box of Wishes</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-festive-red transition-colors">Home</Link>
          <div className="group relative">
            <span className="text-gray-700 hover:text-festive-red transition-colors cursor-pointer">Shop by Category</span>
            <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md py-2 hidden group-hover:block">
              <Link to="/category/cake-boxes" className="block px-4 py-2 hover:bg-pastel-mint/20">Cake Boxes</Link>
              <Link to="/category/brownie-boxes" className="block px-4 py-2 hover:bg-pastel-mint/20">Brownie Boxes</Link>
              <Link to="/category/cupcake-holders" className="block px-4 py-2 hover:bg-pastel-mint/20">Cupcake Holders</Link>
              <Link to="/category/festive-custom" className="block px-4 py-2 hover:bg-pastel-mint/20">Festive & Custom Orders</Link>
              <Link to="/category/ribbons" className="block px-4 py-2 hover:bg-pastel-mint/20">Ribbons & Accessories</Link>
            </div>
          </div>
          <Link to="/custom-orders" className="text-gray-700 hover:text-festive-red transition-colors">Custom Orders</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-festive-red transition-colors">Gallery</Link>
          <Link to="/about" className="text-gray-700 hover:text-festive-red transition-colors">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-festive-red transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://www.instagram.com/box_of_wishes/" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5 text-festive-red hover:text-festive-red/80 transition-colors" />
          </a>
          <Button className="bg-festive-red hover:bg-festive-red/90 text-white rounded-full">
            Request a Quote
          </Button>
        </div>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X className="h-6 w-6 text-festive-red" /> : <Menu className="h-6 w-6 text-festive-red" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-inner">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 py-2" onClick={toggleMenu}>Home</Link>
            <div className="py-2">
              <span className="text-gray-700 font-medium">Shop by Category</span>
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link to="/category/cake-boxes" className="text-gray-600 py-1" onClick={toggleMenu}>Cake Boxes</Link>
                <Link to="/category/brownie-boxes" className="text-gray-600 py-1" onClick={toggleMenu}>Brownie Boxes</Link>
                <Link to="/category/cupcake-holders" className="text-gray-600 py-1" onClick={toggleMenu}>Cupcake Holders</Link>
                <Link to="/category/festive-custom" className="text-gray-600 py-1" onClick={toggleMenu}>Festive & Custom Orders</Link>
                <Link to="/category/ribbons" className="text-gray-600 py-1" onClick={toggleMenu}>Ribbons & Accessories</Link>
              </div>
            </div>
            <Link to="/custom-orders" className="text-gray-700 py-2" onClick={toggleMenu}>Custom Orders</Link>
            <Link to="/gallery" className="text-gray-700 py-2" onClick={toggleMenu}>Gallery</Link>
            <Link to="/about" className="text-gray-700 py-2" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" className="text-gray-700 py-2" onClick={toggleMenu}>Contact</Link>
            
            <div className="pt-4 flex items-center justify-between">
              <a href="https://www.instagram.com/box_of_wishes/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-festive-red">
                <Instagram className="h-5 w-5" />
                <span>@box_of_wishes</span>
              </a>
              <Button className="bg-festive-red hover:bg-festive-red/90 text-white">
                Request a Quote
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

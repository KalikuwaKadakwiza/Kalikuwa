import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">TM</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">TAAS MEAT</h1>
              <p className="text-sm text-gray-600">Restaurant & Sausage Parlour</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:0979573822"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">0979573822</span>
            </a>
            <Link
              to="/order"
              className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors flex items-center space-x-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Order Now</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:0979573822"
                  className="flex items-center space-x-2 px-3 py-2 text-green-600"
                >
                  <Phone className="w-4 h-4" />
                  <span>0979573822</span>
                </a>
                <Link
                  to="/order"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-2 px-3 py-2 mt-2 bg-orange-600 text-white rounded-md"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Order Now</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
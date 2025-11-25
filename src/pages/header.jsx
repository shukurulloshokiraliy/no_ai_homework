import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/images/logo.svg';
import Instagram from '../assets/images/instagram.svg';
import Facebook from '../assets/images/fasebook.svg';
import cart from '../assets/images/cart.svg';
import like from '../assets/images/like.svg';
import search from '../assets/images/search.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'ALL PRODUCTS', href: '#products' },
    { name: 'ABOUT SEEDRA', href: '#about' },
    { name: 'OUR BLOG', href: '#blog' },
    { name: 'CONTACTS', href: '#contacts' }
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src={Logo} alt="SEEDRA" className="h-8 md:h-10" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Icons */}
            <div className="flex items-center space-x-3 mr-2">
              <a href="#instagram" className="text-gray-400 hover:text-gray-600 transition-colors">
                <img src={Instagram} alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="#facebook" className="text-gray-400 hover:text-gray-600 transition-colors">
                <img src={Facebook} alt="Facebook" className="w-5 h-5" />
              </a>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 pl-3 pr-10 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <img src={search} alt="Search" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
            </div>

            {/* Wishlist & Cart */}
            <a href="#wishlist" className="hover:opacity-80 transition-opacity">
              <img src={like} alt="Wishlist" className="w-6 h-6" />
            </a>
            <a href="#cart" className="hover:opacity-80 transition-opacity">
              <img src={cart} alt="Cart" className="w-6 h-6" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-700 hover:text-green-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            {/* Mobile Search */}
            <div className="mt-4 relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-3 pr-10 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <img src={search} alt="Search" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
            </div>

            {/* Mobile Actions */}
            <div className="mt-4 flex items-center space-x-6">
              <a href="#instagram" className="hover:opacity-80 transition-opacity">
                <img src={Instagram} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#facebook" className="hover:opacity-80 transition-opacity">
                <img src={Facebook} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#wishlist" className="hover:opacity-80 transition-opacity">
                <img src={like} alt="Wishlist" className="w-6 h-6" />
              </a>
              <a href="#cart" className="hover:opacity-80 transition-opacity">
                <img src={cart} alt="Cart" className="w-6 h-6" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
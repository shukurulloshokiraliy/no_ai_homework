import React from 'react';
import Logo from '../assets/images/Logo.svg';
import green_facebook from '../assets/images/green_facebook.svg';
import green_instagram from '../assets/images/green_instagram.svg';

const Footer = () => {
  const navigationLinks = [
    { name: 'ALL PRODUCTS', href: '#products' },
    { name: 'ABOUT SEEDRA', href: '#about' },
    { name: 'OUR BLOG', href: '#blog' }
  ];

  const legalLinks = [
    { name: 'Terms&Conditions', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' }
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left Section: Navigation Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {navigationLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-gray-700 hover:text-green-600 transition-colors font-medium whitespace-nowrap"
                >
                  {link.name}
                </a>
                {index < navigationLinks.length - 1 && (
                  <span className="hidden md:inline text-gray-300">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Center Section: Logo */}
          <div className="flex justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <a href="/" className="flex items-center">
              <img src={Logo} alt="SEEDRA" className="h-8" />
            </a>
          </div>

          {/* Right Section: Legal Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-end">
            {legalLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="hidden md:inline text-gray-300">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Section: Social Icons & Copyright */}
        <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="#instagram" 
              className="hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <img src={green_instagram} alt="Instagram" className="w- h-6" />
            </a>
            <a 
              href="#facebook" 
              className="hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <img src={green_facebook} alt="Facebook" className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
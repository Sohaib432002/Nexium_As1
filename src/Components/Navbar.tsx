
"use client";
import React, { useState, useEffect } from 'react';
import { Quote,X,Menu} from 'lucide-react';


const  Navbar=()=> {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

    return (
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Quote className="mr-2 text-blue-600" size={24} />
              <span className="text-2xl font-bold text-blue-900">QuoteApp</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-blue-700 hover:text-blue-900 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('quotes')}
                className="text-blue-700 hover:text-blue-900 transition-colors"
              >
                Quotes
              </button>
              <button 
                onClick={() => scrollToSection('favorites')}
                className="text-blue-700 hover:text-blue-900 transition-colors"
              >
                Favorites
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-blue-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="block w-full text-left px-3 py-2 text-blue-700 hover:text-blue-900"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('quotes')}
                  className="block w-full text-left px-3 py-2 text-blue-700 hover:text-blue-900"
                >
                  Quotes
                </button>
                <button 
                  onClick={() => scrollToSection('favorites')}
                  className="block w-full text-left px-3 py-2 text-blue-700 hover:text-blue-900"
                >
                  Favorites
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    )
}

export default Navbar
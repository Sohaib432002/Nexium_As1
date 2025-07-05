"use client";
import React,{ useState } from 'react'
import { Quote } from 'lucide-react';



function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      const scrollToSection = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
    return (


        <section id="hero" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-40 h-40 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl">
            <Quote size={80} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            Daily <span className="text-blue-600">Inspiration</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-700 mb-8 leading-relaxed">
            Discover wisdom, motivation, and inspiration through timeless quotes
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Get inspired every day with our collection of powerful quotes from great minds throughout history. 
            Find the motivation you need to achieve your dreams!
          </p>
          <button 
            onClick={() => scrollToSection('quotes')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Quotes
          </button>
        </div>
      </section>

    )
}

export default Header
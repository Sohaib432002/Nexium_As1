"use client";


"use client";

import React, { useState, useEffect } from 'react';
import { Quote, RefreshCw, Heart, Share2, Copy, BookOpen, Star, Lightbulb, Coffee } from 'lucide-react';

const quotes = [
    {
        id: 1,
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        category: "motivation"
    },
    {
        id: 2,
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
        category: "innovation"
    },
    {
        id: 3,
        text: "Life is what happens to you while you're busy making other plans.",
        author: "John Lennon",
        category: "life"
    },
    {
        id: 4,
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        category: "dreams"
    },
    {
        id: 5,
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        category: "success"
    },
    {
        id: 6,
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
        category: "motivation"
    },
    {
        id: 7,
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein",
        category: "opportunity"
    },
    {
        id: 8,
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle",
        category: "inspiration"
    }
];

const categories = [
    { id: 'all', name: 'All Quotes', icon: BookOpen },
    { id: 'motivation', name: 'Motivation', icon: Star },
    { id: 'innovation', name: 'Innovation', icon: Lightbulb },
    { id: 'life', name: 'Life', icon: Coffee },
    { id: 'success', name: 'Success', icon: Star }
];

type QuoteType = {
    id: number;
    text: string;
    author: string;
    category: string;
};

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [currentQuote, setCurrentQuote] = useState<QuoteType | null>(null);
    const [favoriteQuotes, setFavoriteQuotes] = useState<QuoteType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Pehla quote set karna on component mount
    useEffect(() => {
        generateRandomQuote();
    }, [selectedCategory]);

    const generateRandomQuote = () => {
        setIsLoading(true);
        setTimeout(() => {
            const filteredQuotes = selectedCategory === 'all'
                ? quotes
                : quotes.filter(quote => quote.category === selectedCategory);

            const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
            setCurrentQuote(filteredQuotes[randomIndex]);
            setIsLoading(false);
        }, 500);
    };

    const toggleFavorite = (quote:any) => {
        setFavoriteQuotes((prevFavorites:any) => {
            const isFavorite = prevFavorites.some((fav: { id: any; })=> fav.id === quote.id);
            if (isFavorite) {
                return prevFavorites.filter((fav: { id: any; }) => fav.id !== quote.id);
            } else {
                return [...prevFavorites, quote];
            }
        });
    };

    const copyQuote = (quote: any) => {
            const text = `"${quote.text}" - ${quote.author}`;
            navigator.clipboard.writeText(text);
            alert('Quote copied to clipboard!');
        };

    const shareQuote = (quote: any) => {
        const text = `"${quote.text}" - ${quote.author}`;
        if (navigator.share) {
            navigator.share({
                title: 'Inspiring Quote',
                text,
            });
        } else {
            copyQuote(quote);
        }
    };

    const isFavorite = (quote: any) => favoriteQuotes.some(fav => fav.id === quote.id);

    return (
        <section id="quotes" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Quote Generator</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                        Generate inspiring quotes to brighten your day and fuel your motivation
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.id
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white text-blue-700 hover:bg-blue-50 shadow-md'
                                    }`}
                            >
                                <IconComponent size={16} className="mr-2" />
                                {category.name}
                            </button>
                        );
                    })}
                </div>

                <div className="max-w-4xl mx-auto mb-12">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center transform hover:scale-105 transition-all duration-300">
                        {isLoading ? (
                            <div className="flex items-center justify-center py-12">
                                <RefreshCw className="animate-spin text-blue-600 mr-3" size={32} />
                                <span className="text-blue-700 text-lg">Loading inspiration...</span>
                            </div>
                        ) : currentQuote ? (
                            <>
                                <Quote className="text-blue-600 mx-auto mb-6" size={48} />
                                <blockquote className="text-2xl md:text-3xl font-light text-gray-800 mb-8 leading-relaxed">
                                    "{currentQuote.text}"
                                </blockquote>
                                <cite className="text-xl text-blue-700 font-medium">
                                    — {currentQuote.author}
                                </cite>
                                <div className="flex justify-center items-center mt-8 space-x-4">
                                    <button
                                        onClick={() => toggleFavorite(currentQuote)}
                                        className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${isFavorite(currentQuote)
                                            ? 'bg-red-100 text-red-600 hover:bg-red-200'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        <Heart
                                            size={20}
                                            className={`mr-2 ${isFavorite(currentQuote) ? 'fill-current' : ''}`}
                                        />
                                        {isFavorite(currentQuote) ? 'Favorited' : 'Add to Favorites'}
                                    </button>
                                    <button
                                        onClick={() => copyQuote(currentQuote)}
                                        className="flex items-center px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300"
                                    >
                                        <Copy size={20} className="mr-2" />
                                        Copy
                                    </button>
                                    <button
                                        onClick={() => shareQuote(currentQuote)}
                                        className="flex items-center px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300"
                                    >
                                        <Share2 size={20} className="mr-2" />
                                        Share
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="py-12">
                                <Quote className="text-blue-600 mx-auto mb-6" size={48} />
                                <p className="text-gray-500 text-lg">Click the button below to generate your first quote!</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={generateRandomQuote}
                        disabled={isLoading}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center mx-auto"
                    >
                        <RefreshCw className={`mr-3 ${isLoading ? 'animate-spin' : ''}`} size={24} />
                        {isLoading ? 'Generating...' : 'Generate New Quote'}
                    </button>
                </div>

                {/* Quote Stats */}
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
                        <div className="text-4xl font-bold text-blue-600 mb-2">{quotes.length}</div>
                        <div className="text-gray-600">Total Quotes</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
                        <div className="text-4xl font-bold text-blue-600 mb-2">{favoriteQuotes.length}</div>
                        <div className="text-gray-600">Favorites</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
                        <div className="text-4xl font-bold text-blue-600 mb-2">{categories.length - 1}</div>
                        <div className="text-gray-600">Categories</div>
                    </div>
                </div>
            </div>

            <section id="favorites" className="py-20 px-4 bg-white mt-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-blue-900 mb-4">Your Favorites</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-blue-700">
                            Your collection of inspiring quotes that touched your heart
                        </p>
                    </div>

                    {favoriteQuotes.length === 0 ? (
                        <div className="text-center py-12">
                            <Heart className="text-gray-400 mx-auto mb-4" size={64} />
                            <p className="text-gray-500 text-lg">No favorites yet. Start adding quotes you love!</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {favoriteQuotes.map((quote) => (
                                <div key={quote.id} className="bg-blue-50 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                                    <Quote className="text-blue-600 mb-4" size={24} />
                                    <blockquote className="text-gray-800 mb-4 text-lg leading-relaxed">
                                        "{quote.text}"
                                    </blockquote>
                                    <cite className="text-blue-700 font-medium">— {quote.author}</cite>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">
                                            {quote.category}
                                        </span>
                                        <button
                                            onClick={() => toggleFavorite(quote)}
                                            className="text-red-500 hover:text-red-600 transition-colors"
                                        >
                                            <Heart size={20} className="fill-current" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </section>
    );
};

export default App;

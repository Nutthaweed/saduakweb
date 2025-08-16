'use client';

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrollY(scrollTop);
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Problem', href: '#' },
        { name: 'Solution', href: '#' },
        { name: 'UVP', href: '#' },
        { name: 'SDG', href: '#' },
        { name: 'Business Model', href: '#' },
        { name: 'Technology', href: '#' },
        { name: 'Team', href: '#' }
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
                isScrolled 
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
                    : 'bg-transparent'
            }`}
            style={{
                transform: `translateY(${Math.min(scrollY * 0.1, 20)}px)`,
                opacity: isScrolled ? 1 : 0.95
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <button 
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            onClick={() => scrollToSection('#top')}
                        >
                            SADUAK
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`font-medium transition-all duration-300 hover:text-blue-600 relative group ${
                                        isScrolled 
                                            ? 'text-gray-800 hover:text-blue-600' 
                                            : 'text-gray-700 hover:text-blue-600'
                                    }`}
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Parallax background effect */}
            <div 
                className={`absolute inset-0 -z-10 transition-all duration-700 ${
                    isScrolled ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                }`}
                style={{
                    background: `linear-gradient(135deg, 
                        rgba(59, 130, 246, ${0.05 - scrollY * 0.0001}) 0%, 
                        rgba(147, 51, 234, ${0.05 - scrollY * 0.0001}) 100%)`,
                    transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0001})`
                }}
            />
            
            {/* Additional parallax layer */}
            <div 
                className={`absolute inset-0 -z-20 transition-all duration-1000 ${
                    isScrolled ? 'opacity-0' : 'opacity-100'
                }`}
                style={{
                    background: `radial-gradient(circle at 20% 50%, 
                        rgba(59, 130, 246, ${0.03 - scrollY * 0.00005}) 0%, 
                        transparent 50%)`,
                    transform: `translateY(${scrollY * 0.3}px)`
                }}
            />
        </nav>
    );
};

export default Navbar;


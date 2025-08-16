import React from 'react';
import Navbar from '../components/Navbar';

const Introduction: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            
            {/* Top anchor for navigation */}
            <div id="top" />
            
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                SADUAK
                            </h1>
                            <div className="space-y-2">
                                <h2 className="text-2xl lg:text-3xl font-bold text-blue-600">
                                    Local Tasty
                                </h2>
                                <h2 className="text-2xl lg:text-3xl font-bold text-blue-600">
                                    Fast Delivery
                                </h2>
                                <h2 className="text-2xl lg:text-3xl font-bold text-blue-600">
                                    Guaranteed Reliable
                                </h2>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                                We're building more than a delivery app — we're creating a trusted food ecosystem for students, employees, and local vendors. Born from real problems on campus, our mission is simple: make food access easier, safer, and fairer for everyone. This is for the people — not profit alone.
                            </p>
                        </div>
                        
                        {/* Right Content - Two Phone Mockups */}
                        <div className="relative flex justify-center lg:justify-end -right-60">
                        <div className="relative">
                                {/* Background Phone - Food Delivery App */}
                                <div className="w-[500px] h-[750px] bg-white rounded-3xl shadow-2xl">
                                    <div className="h-full bg-white rounded-2xl overflow-hidden">
                                        <img 
                                            src="/customer_page-removebg-preview.png" 
                                            alt="Food Delivery App Interface" 
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    </div>
                                            </div>
                                            
                                {/* Foreground Phone - Saduak Logo */}
                                <div className="absolute -left-25 top-10 w-[500px] h-[750px] rounded-3xl shadow-2xl z-10">
                                    <div className="h-full rounded-3xl overflow-hidden">
                                        <img 
                                            src="/Phone_Saduak-removebg-preview.png" 
                                            alt="Saduak Logo Screen" 
                                            className="w-full h-full object-cover rounded-3xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Introduction;
import React from 'react';
import Navbar from '../../components/pages/Navbar';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Top anchor for navigation */}
      <div id="top" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900">
                SADUAK
              </h1>
              <div className="space-y-4">
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
            
            {/* Right Content - Phone Mockups */}
            <div className="relative">
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Left Phone */}
                  <div className="absolute -left-8 top-8 w-64 h-96 bg-blue-600 rounded-3xl shadow-2xl transform rotate-12">
                    <div className="flex flex-col items-center justify-center h-full text-white">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">saduak</h3>
                      <p className="text-sm opacity-80">อาหารดี มีคุณภาพ</p>
                    </div>
                  </div>
                  
                  {/* Right Phone */}
                  <div className="w-64 h-96 bg-white rounded-3xl shadow-2xl border-8 border-gray-800">
                    <div className="h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-2xl p-4">
                      {/* Burger Image */}
                      <div className="w-full h-32 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-2xl">🍔</span>
                      </div>
                      
                      {/* Category Icons */}
                      <div className="flex space-x-4 mb-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <span className="text-lg">☕</span>
                        </div>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <span className="text-lg">🍕</span>
                        </div>
                      </div>
                      
                      {/* Food Cards */}
                      <div className="space-y-2">
                        <div className="bg-red-500 rounded-lg p-2 text-white text-sm">
                          🍔 Burger
                        </div>
                        <div className="bg-green-500 rounded-lg p-2 text-white text-sm">
                          🍚 กระเพรา by...
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="absolute bottom-4 right-4 text-white text-sm">
                        ⭐ 4.9
                      </div>
                    </div>
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

export default Home;
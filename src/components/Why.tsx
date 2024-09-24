import React from 'react';
import { TrendingUp, Leaf, Globe } from 'lucide-react'; // Use any suitable icon library

const WhyInvest = () => {
  return (
    <section className="bg-black py-12 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
            Why Invest with Us?
          </h2>
        </div>

        {/* Grid Layout for Key Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* High-Yield Opportunities */}
          <div className="flex flex-col items-center text-center p-6 bg-[#0f1e0d] rounded-lg shadow-lg hover:scale-105 transform transition">
            <TrendingUp className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">High-Yield Opportunities</h3>
            <p className="text-gray-400 mt-2">Maximize your returns with top-performing commodities and financial assets.</p>
          </div>

          {/* Impact Investing */}
          <div className="flex flex-col items-center text-center p-6 bg-[#0f1e0d] rounded-lg shadow-lg hover:scale-105 transform transition">
            <Leaf className="w-16 h-16 text-blue-500 mb-4" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Impact Investing</h3>
            <p className="text-gray-400 mt-2">Make a difference while investing by supporting global food security initiatives.</p>
          </div>

          {/* Global Reach and Local Impact */}
          <div className="flex flex-col items-center text-center p-6 bg-[#0f1e0d] rounded-lg shadow-lg hover:scale-105 transform transition">
            <Globe className="w-16 h-16 text-yellow-500 mb-4" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Global Reach, Local Impact</h3>
            <p className="text-gray-400 mt-2">Leverage our global network to make a local impact in emerging markets.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;

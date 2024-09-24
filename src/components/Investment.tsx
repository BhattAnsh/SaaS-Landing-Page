import React from 'react';
import { TrendingUp, Leaf, Globe, Coins, DollarSign } from 'lucide-react'; // Import all needed icons

const InvestmentSection = () => {
  return (
    <section className="bg-gray-800 py-12 px-6 min-h-screen flex flex-row">
      <div className="max-w-7xl mx-auto w-full">
        {/* Combined Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
            Why Invest with Us?
          </h2>
          <p className="mt-4 text-gray-300 text-lg sm:text-xl lg:text-2xl">
            Discover the advantages and explore our current investment opportunities.
          </p>
        </div>

        {/* Grid Layout for Key Points and Investment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* High-Yield Opportunities */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg hover:scale-105 transform transition">
            <TrendingUp className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">High-Yield Opportunities</h3>
            <p className="text-gray-300 mt-2">Maximize your returns with top-performing commodities and financial assets.</p>
          </div>

          {/* Impact Investing */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg hover:scale-105 transform transition">
            <Leaf className="w-16 h-16 text-blue-500 mb-4" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Impact Investing</h3>
            <p className="text-gray-300 mt-2">Make a difference while investing by supporting global food security initiatives.</p>
          </div>

          {/* Global Reach and Local Impact */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg hover:scale-105 transform transition">
            <Globe className="w-16 h-16 text-yellow-500 mb-4" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Global Reach, Local Impact</h3>
            <p className="text-gray-300 mt-2">Leverage our global network to make a local impact in emerging markets.</p>
          </div>
        </div>

        {/* Investment Opportunities Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
            Current Investment Opportunities
          </h2>
          <p className="mt-4 text-gray-300 text-lg sm:text-xl lg:text-2xl">
            Explore the investment opportunities designed to offer high returns and impact.
          </p>
        </div>

        {/* Grid Layout for Investment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cooking Oil Bond */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg hover:scale-105 transform transition">
            <Coins className="w-16 h-16 text-yellow-500 mb-4" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Cooking Oil Bond</h3>
            <p className="text-gray-300 mt-2">Term: 12 months with a call option at 6 months.</p>
            <p className="text-gray-300 mt-2">Interest Rate: <strong>31% annually</strong> (2.6% monthly).</p>
            <p className="text-gray-300 mt-2">Minimum Investment: <strong>$10,000</strong>.</p>
          </div>

          {/* Rice Trade Bond */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg hover:scale-105 transform transition">
            <TrendingUp className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Rice Trade Bond</h3>
            <p className="text-gray-300 mt-2">Term: 6-12 months.</p>
            <p className="text-gray-300 mt-2">Interest Rate: <strong>25% annually</strong>, paid semi-annually.</p>
            <p className="text-gray-300 mt-2">Minimum Investment: <strong>$5,000</strong>.</p>
          </div>

          {/* Custom Bond Offering */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg hover:scale-105 transform transition">
            <DollarSign className="w-16 h-16 text-blue-500 mb-4" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Custom Investment Opportunities</h3>
            <p className="text-gray-300 mt-2">Tailored solutions for high-net-worth investors seeking custom strategies.</p>
            <p className="text-gray-300 mt-2">Flexible terms and rates.</p>
            <p className="text-gray-300 mt-2">Minimum Investment: Contact us.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;

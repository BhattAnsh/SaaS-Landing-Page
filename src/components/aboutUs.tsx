"use client";
import React from 'react';
import BitcoinSvg from '../assets/images/Bitcoin.svg'; // Import as React component

const AboutUs = () => {
  return (
    <section className="flex flex-row justify-evenly bg-black py-12 px-6">
      <div className="w-[50%] text-white">
        {/* Section Header */}
        <div className="text-start mb-10">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white">
            About Us
          </h2>
          <p className="mt-4 text-gray-300 text-lg sm:text-xl lg:text-2xl">
            Discover who we are and what we stand for at DJYTL Capital.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-xl lg:text-xl font-semibold text-white mb-4">
            Our Mission
          </h3>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed">
            At DJYTL Capital, we are committed to driving financial success while promoting global food security. We specialize in innovative financing solutions that allow our investors to access profitable opportunities in essential commodities markets, making a meaningful impact on communities around the world.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-xl lg:text-xl font-semibold text-white mb-4">
            Our Core Values
          </h3>
          <ul className="text-gray-400 text-base sm:text-lg lg:text-xl space-y-4 leading-relaxed">
            <li><strong>Integrity:</strong> We uphold the highest ethical standards in everything we do.</li>
            <li><strong>Unity:</strong> Our success is built on strong collaboration and partnerships.</li>
            <li><strong>Transparency:</strong> We are open and honest, ensuring full visibility into our operations and your investments.</li>
            <li><strong>Excellence:</strong> We strive for perfection in every service we provide, ensuring outstanding results for our investors.</li>
          </ul>
        </div>

        {/* Who We Are Section */}
        <div>
          <h3 className="text-xl sm:text-xl lg:text-xl font-semibold text-white mb-4">
            Who We Are
          </h3>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed">
            DJYTL Capital is a private investment firm with a focus on raising capital for global commodities trading, particularly within the Global South. Our investors gain access to high-yield opportunities in essential goods such as rice and cooking oil—commodities vital to the prosperity and stability of developing nations. With our unique blend of financial expertise and a commitment to global food security, we empower individuals and institutions to make profitable, responsible investments that also contribute to the welfare of communities around the world.
          </p>
        </div>
      </div>
      
      {/* SVG Image Section */}
      <div className="flex items-center justify-center">
        <BitcoinSvg className="w-[600px] h-[600px]" /> {/* Render as a component */}
      </div>
    </section>
  );
};

export default AboutUs;

"use client"
import React, { useState, useEffect } from 'react';
import LogoImage from '../assets/icons/logo.png';
import MenuIcon from '../assets/icons/menu.svg';
import Image from 'next/image';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'} z-50`}>
      <div className="container mx-auto px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <Image src={LogoImage} alt='logo' width={100} height={50} />
          </div>
          <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
            <Image src={MenuIcon} alt="menu" width={24} height={24} />
          </div>
          <nav className='text-white gap-6 items-center hidden sm:flex'>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>About</a>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Features</a>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Updates</a>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Help</a>
            <a href="#" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Customers</a>
            <button className='bg-white py-2 px-4 rounded-lg text-black'>Get for free</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

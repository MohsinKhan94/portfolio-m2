'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="fixed w-full top-0 z-50 body-font bg-[#1C1C1E] text-[#E0FFFF] shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center bg-[#1C1C1E] text-[#E0FFFF] mb-4 md:mb-0">
            <Link href='/'>
              <span className="ml-3 text-xl hover:text-[#39FF14] hover:cursor-pointer">Mohsin Khan</span>
            </Link>
          </a>
          <div className="md:hidden">
            {/* Hamburger Icon */}
            <button onClick={toggleMenu} className="text-[#E0FFFF] focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <nav className={`md:ml-auto flex flex-wrap items-center text-base bg-[#1C1C1E] text-[#E0FFFF] justify-center ${isOpen ? 'block' : 'hidden'} md:block`}>
            <Link href='/' className="mr-5 hover:text-[#39FF14]">Home</Link>
            <Link href='/about' className="mr-5 hover:text-[#39FF14]">About</Link>
            <Link href='/contact' className="mr-5 hover:text-[#39FF14]">Contact</Link>
          </nav>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col items-center bg-[#1C1C1E] md:hidden">
            <Link href='/' className="p-2 hover:text-[#39FF14]">Home</Link>
            <Link href='/about' className="p-2 hover:text-[#39FF14]">About</Link>
            <Link href='/contact' className="p-2 hover:text-[#39FF14]">Contact</Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;

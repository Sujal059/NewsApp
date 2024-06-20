import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <h1 className="font-bold text-xl">Top News</h1>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex space-x-4">
        <a href="/" className="block text-white hover:text-gray-400">Home</a>
        <a href="https://my-portfolio-zeta-pearl-81.vercel.app/" className="block text-white hover:text-gray-400">About</a>   
        <a href="/contact" className="block text-white hover:text-gray-400">Contact</a>
      </nav>


      {/* Menu Icon (Mobile) */}
      <button className="md:hidden focus:outline-none bg-[#1f2937]" onClick={toggleMenu}>
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Navigation Links (Mobile) */}
      <nav className={`md:hidden absolute top-full left-0 bg-gray-800 w-full p-4 ${isOpen ? 'block' : 'hidden'}`}>
        <a href="/" className="block text-white p-2 hover:text-gray-400">Home</a>
        <a href="https://my-portfolio-zeta-pearl-81.vercel.app/" className="block text-white p-2 hover:text-gray-400">About</a>
        <a href="/contact" className="block text-white p-2 hover:text-gray-400">Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;

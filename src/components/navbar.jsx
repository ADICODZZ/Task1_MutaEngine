import React from 'react';
import code from '../assets/image (2).png';

const Navbar = () => (
    <header className="flex justify-between items-center p-4">
      <div className="text-white text-2xl font-bold">MUTA</div>
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="text-gray-300 hover:text-white">Overview</a>
        <a href="/about" className="text-gray-300 hover:text-white">About</a>
        <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
        <a href="#" className="text-gray-300 hover:text-white">Solutions</a>
      </nav>
      <div className="space-x-2">
        <button className="px-4 py-2 text-white bg-transparent border border-white rounded-full">Login</button>
        <button className="px-4 py-2 text-black bg-cyan-400 rounded-full">Sign up</button>
      </div>
    </header>
  );

  export default Navbar;
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-between items-center">
        {/* Brand Name on the left */}
        <div className="text-2xl font-bold hidden md:inline">Girr</div>
        
        {/* Navigation Links in the center */}
        <div className="space-x-7 flex-grow hidden md:flex justify-center">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#skills" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
        </div>
        
        {/* Social Icons on the right */}
        <div className="flex space-x-4 hidden md:flex">
          <a
            href="https://github.com/Girtianda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transform transition-transform duration-300 hover:scale-105"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

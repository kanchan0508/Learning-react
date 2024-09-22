import React from 'react';

const Header = () => {
  return (
    <header className="bg-white sticky top-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">MyBrand</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-gray-800">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-800">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
        <div className="space-x-4">
          <button className="text-gray-600">Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

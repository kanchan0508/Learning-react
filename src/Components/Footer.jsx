import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 MyBrand. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#facebook" className="hover:text-gray-400">Facebook</a>
          <a href="#twitter" className="hover:text-gray-400">Twitter</a>
          <a href="#linkedin" className="hover:text-gray-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

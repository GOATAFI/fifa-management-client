import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-3">
  <div className="container mx-auto flex flex-wrap">
    <div className="w-full md:w-1/3 lg:w-1/4 px-4">
      <h3 className="text-lg font-semibold mb-2">About Us</h3>
      <p className="mb-4">FIFA Management is a platform dedicated to football enthusiasts who want to stay updated with the latest news, scores, and statistics from the world of football.</p>
    </div>
    <div className="w-full md:w-1/3 lg:w-1/4 px-4">
      <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
      <ul className="list-none">
        <li className="mb-2"><a href="#">Home</a></li>
        <li className="mb-2"><a href="#">Players</a></li>
        <li className="mb-2"><a href="#">Teams</a></li>
        <li className="mb-2"><a href="#">Leagues</a></li>
      </ul>
    </div>
    <div className="w-full md:w-1/3 lg:w-1/4 px-4">
      <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
      <p className="mb-4">Email: contact@fifamonke.com</p>
      <p className="mb-4">Phone: +880123456789</p>
      <p className="mb-4">Address: Trees and Football Fields</p>
    </div>
    <div className="w-full md:w-1/3 lg:w-1/4 px-4">
      <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
      <ul className="list-none">
        <li className="mb-2"><a href="#">Facebook</a></li>
        <li className="mb-2"><a href="#">Twitter</a></li>
        <li className="mb-2"><a href="#">Instagram</a></li>
        <li className="mb-2"><a href="#">YouTube</a></li>
      </ul>
    </div>
  </div>
  <div className="container mx-auto mt-8">
    <div className="flex flex-wrap justify-between items-center">
      <div className="w-full md:w-auto text-center md:text-left">
        <p className="text-sm">&copy; 2023 FIFA Management. All rights reserved.</p>
      </div>
      <div className="w-full md:w-auto text-center md:text-right">
        <p className="text-sm">Built with <span className="text-red-500">&#9829;</span> by Team Monke</p>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;

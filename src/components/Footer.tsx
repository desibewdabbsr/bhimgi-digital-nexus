
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-bhimgi-blue text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">BHIMGI INFO SOLUTIONS</h2>
            <p className="text-gray-300 mb-4">
              Leading provider of software development, IT services, consulting, 
              and electronic products.
            </p>
            <p className="text-gray-300">
              Bhadrak, Odisha, India
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white">Products</Link></li>
              <li><Link to="/research" className="text-gray-300 hover:text-white">R&D</Link></li>
              <li><Link to="/refund-policy" className="text-gray-300 hover:text-white">Refund Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white">Software Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Web Applications</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">IT Consulting</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">E-commerce Solutions</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Support & Maintenance</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span>Email:</span>
                <a href="mailto:support@bhimgiinfosolutions.work.gb" className="text-gray-300 hover:text-white">
                  support@bhimgiinfosolutions.work.gb
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>Location:</span>
                <span className="text-gray-300">Bhadrak, Odisha, India</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                to="/contact" 
                className="bg-white text-bhimgi-blue px-4 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} BHIMGI INFO SOLUTIONS PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/refund-policy" className="text-gray-400 hover:text-white text-sm">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

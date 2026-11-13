import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-300 bg-gray-900 pt-12 border-t border-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">

        {/* Brand Info */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className='text-2xl font-bold tracking-wide text-white hover:text-indigo-400 transition'>
            📚 Book Store
          </Link>
          <p className="text-sm leading-relaxed mt-4 text-slate-400 max-w-sm">
            Discover your next favorite book with us. Explore a vast collection of bestsellers, fiction, academic books, and more delivered right to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col lg:items-center lg:justify-start">
          <div className="flex flex-col text-sm space-y-2.5">
            <h2 className="font-semibold text-white text-base mb-2">Quick Links</h2>
            <a className="hover:text-indigo-400 transition">About Us</a>
            <a className="hover:text-indigo-400 transition">Bestsellers</a>
            <a className="hover:text-indigo-400 transition">New Releases</a>
            <a className="hover:text-indigo-400 transition">Contact Us</a>
            <a className="hover:text-indigo-400 transition">Privacy Policy</a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="font-semibold text-white text-base mb-3">Subscribe to our newsletter</h2>
          <div className="text-sm space-y-4 max-w-sm">
            <p className="text-slate-400">Subscribe Now to Get Regular Updates</p>
            <div className="flex items-center gap-2 p-1.5 rounded-lg bg-gray-800 border border-gray-700">
              <input
                className="bg-transparent text-white placeholder-slate-400 focus:outline-none w-full px-3 py-1.5 text-sm"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 text-white font-medium rounded-md whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Text */}
      <div className="py-6 text-center border-t border-gray-800 mt-10 text-slate-400 text-xs sm:text-sm">
        <p>
          Copyright 2026 © <a href="/" className="text-white font-medium hover:underline">Book Store</a>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Copyright;
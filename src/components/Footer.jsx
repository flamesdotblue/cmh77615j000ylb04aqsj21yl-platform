import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-extrabold text-lg">THREADS</h4>
            <p className="mt-2 text-sm text-neutral-600">Elevated essentials made responsibly for modern living.</p>
          </div>
          <div>
            <h5 className="font-semibold">Shop</h5>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a href="#collection" className="hover:text-black">New Arrivals</a></li>
              <li><a href="#collection" className="hover:text-black">Men</a></li>
              <li><a href="#collection" className="hover:text-black">Women</a></li>
              <li><a href="#collection" className="hover:text-black">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Company</h5>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Sustainability</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Press</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Help</h5>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-black">Shipping</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
              <li><a href="#" className="hover:text-black">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} THREADS. All rights reserved.</p>
          <div className="text-xs text-neutral-500 flex items-center gap-4">
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
            <a href="#" className="hover:text-black">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

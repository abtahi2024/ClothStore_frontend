import React from "react";
import { CiMail } from "react-icons/ci";

export const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-16 sm:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* Logo & Description */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold font-montserrat flex items-center">
                Male fashion
                <span className="w-2 h-2 bg-red-600 inline-block ml-1 mt-2"></span>
              </h2>
            </div>
            <p className="text-[#b7b7b7] text-[15px] leading-6.5 mb-8 pr-4">
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
            <div className="flex flex-wrap gap-2 opacity-90">
              {/* Simulated Payment Icons from the image */}
              <div className="bg-white px-1.5 py-0.5 rounded-sm">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
                  className="w-4 h-4 grayscale"
                  alt="bitcoin"
                />
              </div>
              <div className="bg-white px-1.5 py-0.5 rounded-sm flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
                  className="w-5 h-3"
                  alt="amex"
                />
              </div>
              <div className="bg-white px-1.5 py-0.5 rounded-sm">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  className="w-6 h-4"
                  alt="paypal"
                />
              </div>
              <div className="bg-white px-1.5 py-0.5 rounded-sm">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  className="w-5 h-4"
                  alt="mastercard"
                />
              </div>
              <div className="bg-white px-1.5 py-0.5 rounded-sm">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSltJUAOMgY-S01WdzcuvYWyuZWpcY_UopEQ&s"
                  className="w-5 h-4"
                  alt="visa"
                />
              </div>
            </div>
          </div>

          {/* Shopping Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[2px] mb-8">
              Shopping
            </h4>
            <ul className="space-y-4 text-[#b7b7b7] text-[15px]">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Clothing Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Trending Shoes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Support/Shopping 2 Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[2px] mb-8">
              Shopping
            </h4>
            <ul className="space-y-4 text-[#b7b7b7] text-[15px]">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Payment Methods
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Return & Exchanges
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[2px] mb-8">
              Newsletter
            </h4>
            <p className="text-[#b7b7b7] text-[15px] leading-6.5 mb-8 pr-4">
              Be the first to know about new arrivals, look books, sales &
              promos!
            </p>
            <div className="border-b border-[#333333] flex items-center py-3">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent text-[15px] w-full outline-none placeholder:text-[#b7b7b7]"
              />
              <CiMail className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#333333] text-center">
          <p className="text-[#b7b7b7] text-[15px]">
            Copyright © 20262020 All rights reserved | This template is made
            with <span className="text-red-600">❤️</span> by{" "}
            <span className="text-red-600 cursor-pointer">Colorlib</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

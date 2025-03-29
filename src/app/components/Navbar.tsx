import React, { useState } from "react";
import {
  Search,
  User,
  ShoppingCart,
  HelpCircle,
  Package,
  LogOut,
} from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <main className="text-white shadow-md p-4 bg-black fixed top-0 w-full z-20">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">Bloxk3market</div>

        {/* Search Bar */}
        <div className="flex-1 mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {/* Account with Dropdown */}
          <div className="relative">
            <button
              className="flex items-center text-[#00ffcc] cursor-pointer focus:outline-none"
              onClick={toggleDropdown}
            >
              <User className="mr-1" size={20} />
              <span>Account</span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg py-1 z-10  drop-shadow-md border">
                <span className="cursor-pointer flex items-center px-4 py-2 text-[#00ffcc] hover:bg-gray-100">
                  <User className="mr-2" size={16} />
                  <span>My Account</span>
                </span>
                <span className=" cursor-pointer flex items-center px-4 py-2 text-[#00ffcc] ">
                  <Package className="mr-2" size={16} />
                  <span>Orders</span>
                </span>
                <span className=" cursor-pointer flex items-center px-4 py-2 text-[#00ffcc] hover:bg-gray-100">
                  <LogOut className="mr-2" size={16} />
                  <span>Sign out</span>
                </span>
              </div>
            )}
          </div>

          {/* Cart */}
          <span className="  flex items-center text-[#00ffcc] cursor-pointer">
            <ShoppingCart className="mr-1" size={20} />
            <span>Cart</span>
          </span>

          {/* Help */}
          <span className="flex items-center text-[#00ffcc] cursor-pointer">
            <HelpCircle className="mr-1" size={20} />
            <span>Help</span>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Navbar;

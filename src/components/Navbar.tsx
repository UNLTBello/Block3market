"use client";
import {
  HelpCircle,
  LogOut,
  Package,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { useContext } from "react";
import { CreateContext } from "@/Context";
import { useRouter } from "next/navigation";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const { cartItems } = useContext(CreateContext).cart;
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleToggleNavbar = () => {
    setIsVisible(!isVisible);
  };
  return (
    <main className="text-white shadow-md p-4 bg-black fixed top-0 w-full z-20  ">
      <article className="flex flex-row lg:hidden">
        <div className="text-xl font-bold" onClick={()=> router.push("/")}>Bloxk3market</div>

        {isVisible ? (
          <X className="block- ml-auto" onClick={handleToggleNavbar} />
        ) : (
          <Menu className="block- ml-auto" onClick={handleToggleNavbar} />
        )}
      </article>
      <div
        className={`container mx-auto flex lg:flex-row flex-col lg:items-center lg:justify-between  justify-evenly ${
          isVisible ? "h-[50vh] opacity-100" : "h-0 opacity-0"
        }  lg:h-[10vh] lg:opacity-100`}
      >
        {/* Logo */}
        <div className="text-xl font-bold hidden lg:flex" onClick={()=> router.push("/")}>Bloxk3market</div>

        {/* Search Bar */}
        <div className="flex-1 hidden lg:flex mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 "
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex lg:flex-row flex-col lg:items-center space-x-6 gap-y-20 lg:gap-y-0 lg:mt-0">
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
              <div className="absolute lg:right-0 lg:mt-2 w-48 bg-black rounded-md h-[130px] shadow-lg py-1 z-10  drop-shadow-md border">
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
          <span
            onClick={() => router.push("/cart")}
            className="  flex items-center gap-x-1  cursor-pointer"
          >
            <ShoppingCart className="mr-1 text-[#00ffcc]" size={20} />
            <span className="text-[#00ffcc]">Cart</span>
            <span className="rounded-full bg-white text-black h-5 w-5 items-center text-center pb-2">
              {cartItems?.length ?? 0}
            </span>
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

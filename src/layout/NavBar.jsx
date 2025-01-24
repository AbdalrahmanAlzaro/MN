import React, { useState } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className="py-3 bg-[#D80D18] text-white text-center px-10">
        <p className="text-sm">
          get free delivery for first order over 100 jd{" "}
        </p>
      </section>
      <header className="shadow-lg font-[sans-serif] tracking-wide relative z-50">
        <section className="flex items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b bg-white lg:min-h-[70px] max-lg:min-h-[60px]">
          <Link to=" " className="shrink-0 max-sm:hidden">
            <img src={Logo} alt="logo" className="sm:w-[150px] w-32" />
          </Link>
          <Link to=" " className="hidden max-sm:block">
            <img src={Logo} alt="logo" className="w-[150px]" />
          </Link>

          <div className="flex flex-wrap w-full items-center">
            <div className="xl:w-80 max-lg:hidden lg:ml-10 max-md:mt-4 max-lg:ml-4 relative flex items-center">
              <input
                type="text"
                placeholder="Search something..."
                className="w-full bg-gray-100 border focus:bg-transparent px-4 pl-10 rounded h-10 outline-none text-sm transition-all"
              />
              <Search className="w-5 h-5 absolute left-3 text-gray-500" />{" "}
              {/* Search icon */}
            </div>
            <div className="ml-auto">
              <ul className="flex items-center">
                <li className="max-lg:py-2 px-4 cursor-pointer">
                  <span className="relative">
                    <ShoppingCart className="w-6 h-6 inline" />
                    <span className="absolute left-auto -ml-1 -top-2 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                      3
                    </span>
                  </span>
                </li>
                <li className="flex text-[15px] max-lg:py-2 px-4 hover:text-[#007bff] cursor-pointer">
                  <button className="px-4 py-2 text-sm font-semibold text-gray-800 border border-[#333] bg-transparent">
                    Sign In
                  </button>
                </li>
                <li id="toggleOpen" className="lg:hidden cursor-pointer">
                  <button onClick={toggleMenu}>
                    <Menu className="w-7 h-7" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div
          id="collapseMenu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border cursor-pointer"
            onClick={toggleMenu}
          >
            <X className="w-5 h-5" />
          </button>

          <ul className="lg:flex lg:flex-wrap lg:items-center lg:justify-center px-10 py-3 bg-[#fff] min-h-[46px] gap-4 max-lg:space-y-4 max-lg:fixed max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-lg max-lg:overflow-auto z-50 ">
            <li className="mb-6 hidden max-lg:block">
              <Link to=" ">
                <img src={Logo} alt="logo" className="w-[150px]" />
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to=" "
                className="   text-black text-[15px] font-medium block"
              >
                New
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to=" "
                className="   text-black text-[15px] font-medium block"
              >
                Brands
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to=" "
                className="   text-black text-[15px] font-medium block"
              >
                Makeup
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to=" "
                className="   text-black text-[15px] font-medium block"
              >
                Hair
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to=" "
                className="   text-black text-[15px] font-medium block"
              >
                Tools & Brushes
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to=" "
                className="   text-black text-[15px] font-medium block"
              >
                Bath & Body
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to=" "
                className="   text-black text-[15px] font-medium block"
              >
                Clean Body
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to=" "
                className="   text-black text-[15px] font-medium block"
              >
                Gifts
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to="/shop"
                className="   text-black text-[15px] font-medium block"
              >
                Skincare
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-10 font-sans tracking-wide">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap items-center md:justify-between max-md:flex-col gap-6">
          <div>
            <Link to=" ">
              <img src={Logo} alt="logo" className="w-36 " />
            </Link>
          </div>

          <ul className="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
            <li>
              <Link to=" " className="text- black hover:underline text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to=" " className="text- black hover:underline text-black">
                About
              </Link>
            </li>
            <li>
              <Link to=" " className="text-black hover:underline text-black">
                Services
              </Link>
            </li>
            <li>
              <Link to=" " className="text- black hover:underline text-black">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-500" />

        <p className="text-center text-black text-base">
          © EliteFit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

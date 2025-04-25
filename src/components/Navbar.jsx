import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-gray-800 container mx-auto rounded-lg shadow-gray-200 shadow">
      <div className="px-2">
        <div className="flex items-center justify-between h-16">
          <div className="logo rounded-md px-3 py-2 text-sm font-medium text-white">
            Application Logo
          </div>
          <div className="links">
            <Link
              to="home"
              className="rounded-md px-3 py-2 text-sm font-medium text-white 
                hover:bg-gray-700 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="about"
              className="rounded-md px-3 py-2 text-sm font-medium text-white 
                hover:bg-gray-700 hover:text-white"
            >
              About
            </Link>
            <Link
              to="contact"
              className="rounded-md px-3 py-2 text-sm font-medium text-white 
                hover:bg-gray-700 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

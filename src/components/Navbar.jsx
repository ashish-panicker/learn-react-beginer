import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 container mx-auto rounded-lg shadow-gray-200 shadow">
      <div className="px-2">
        <div className="flex items-center justify-between h-16">
          <div className="logo rounded-md px-3 py-2 text-sm font-medium text-white">
            Application Logo
          </div>
          <div className="links">
            <a
              href="#"
              class="rounded-md px-3 py-2 text-sm font-medium text-white 
                hover:bg-gray-700 hover:text-white"
            >
              Home
            </a>
            <a
              href="#"
              class="rounded-md px-3 py-2 text-sm font-medium text-white 
                hover:bg-gray-700 hover:text-white"
            >
              About
            </a>
            <a
              href="#"
              class="rounded-md px-3 py-2 text-sm font-medium text-white 
                hover:bg-gray-700 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

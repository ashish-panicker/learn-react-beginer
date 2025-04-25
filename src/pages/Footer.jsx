import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">EasySkillUp</h3>
          <p className="text-gray-400">
            Empowering learners with hands-on tech training, project-based
            learning, and expert mentorship to build real-world skills.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">Email: support@easyskillup.com</p>
          <p className="text-gray-400">Phone: +91-12345-67890</p>
          <p className="text-gray-400">Location: Bengaluru, India</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} EasySkillUp. All rights reserved.
      </div>
    </footer>
  );
}

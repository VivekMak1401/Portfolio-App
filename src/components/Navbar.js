import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-max bg-gradient-to-r from-indigo-400 to-teal-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* {logo and brand} */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-white bg-opacity-20 bg-white px-3 py-1 rounded-lg">
                  VM
                </span>
              </div>
              <div className="hidden md:block ml-4">
                <span className="text-white font-semibold text-lg">
                  Vivek Makwana
                </span>
              </div>
            </div>

            {/* {Desktop Navigation Links} */}
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                    href="#passion"
                  >
                    Passion
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                    href="#skills"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* {Mobile Menu Button -- humberger} */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="text-white hover:text-teal-200 focus:outline-none transition-color duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* {Mobile Menu Dropdown} */}

          {isMenuOpen && (
            <div className="md:hidden bg-gradient-to-b from-blue-700 to-cyan-400 shadow-lg rounded">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200 scroll-smooth"
                  href="#about"
                >
                  About
                </a>
                <a
                  className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200"
                  href="#passion"
                >
                  Passion
                </a>
                <a
                  className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200"
                  href="#skills"
                >
                  Skills
                </a>
                <a
                  className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200"
                  href="#projects"
                >
                  Projects
                </a>
                <a
                  className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200"
                  href="#contact"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

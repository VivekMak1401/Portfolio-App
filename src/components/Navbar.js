import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, isMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-max bg-gradient-to-r from-indigo-400 to-teal-500 shadow-lg">
        <div className="max-w-7xl max-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-centre h-16">
            {/* {logo and brand} */}
            <div className="flex items-center">
              <div className="flex-shrin-0">
                <span className="text-2xl font-bold text-white bg-opacity-20 bg-white px-3 py-1 rounded-lg">
                  VR
                </span>
              </div>
              <div className="hidden md:block ml-4">
                <span className="text-white font-semibold text-lg">
                  Vivek Makwana
                </span>
              </div>

              {/* {Desktop Navigation Links} */}
              <div>
                <ul className="flex space-x-2">
                  <li>
                    <a
                      className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                      href=""
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                      href=""
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                      href=""
                    >
                      Tracer
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                      href=""
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                      href=""
                    >
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                      href=""
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>

              {/* {Mobile Navigation} */}
              <div className="md:hidden">
                <button className="">
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

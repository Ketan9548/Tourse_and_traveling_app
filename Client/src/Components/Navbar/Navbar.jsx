import { useState } from "react";
import img1 from "../../assets/logo.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-gray-200 dark:bg-gray-900 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={img1} className="h-12 w-16" alt="Logo" />
          <span className="self-center text-2xl font-semibold text-white">
            Tourse
          </span>
        </NavLink>
        <button
          onClick={toggleMobileMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-gray-700 rounded hover:bg-purple-600 hover:text-white md:hover:bg-transparent md:text-white md:hover:text-gray-200"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className="block py-2 px-3 text-gray-700 rounded hover:bg-purple-600 hover:text-white md:hover:bg-transparent md:text-white md:hover:text-gray-200"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="services"
                className="block py-2 px-3 text-gray-700 rounded hover:bg-purple-600 hover:text-white md:hover:bg-transparent md:text-white md:hover:text-gray-200"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blogs"
                className="block py-2 px-3 text-gray-700 rounded hover:bg-purple-600 hover:text-white md:hover:bg-transparent md:text-white md:hover:text-gray-200"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className="block py-2 px-3 text-gray-700 rounded hover:bg-purple-600 hover:text-white md:hover:bg-transparent md:text-white md:hover:text-gray-200"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

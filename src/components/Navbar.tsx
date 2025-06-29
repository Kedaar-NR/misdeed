import React from "react";
import { Link, useLocation } from "react-router-dom";
import IndeedLogo from "../assets/indeed_logo.svg";

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <nav
      className="w-full bg-white border-b border-gray-200 px-6 py-2 flex items-center justify-between"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Left: Logo and nav links */}
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label="Indeed Home"
        >
          <img
            src={IndeedLogo}
            alt="Indeed logo"
            className="h-7 md:h-8 w-auto mr-2"
            style={{ minWidth: 90 }}
          />
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link
            to="/"
            className={`px-2 py-1 border-b-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              location.pathname === "/"
                ? "border-blue-700 text-blue-700"
                : "border-transparent text-gray-700 hover:border-blue-700 hover:text-blue-700 transition"
            }`}
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
          <Link
            to="/company-reviews"
            className={`px-2 py-1 border-b-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              location.pathname === "/company-reviews"
                ? "border-blue-700 text-blue-700"
                : "border-transparent text-gray-700 hover:border-blue-700 hover:text-blue-700 transition"
            }`}
            aria-current={
              location.pathname === "/company-reviews" ? "page" : undefined
            }
          >
            Company reviews
          </Link>
          <Link
            to="/find-salaries"
            className={`px-2 py-1 border-b-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              location.pathname === "/find-salaries"
                ? "border-blue-700 text-blue-700"
                : "border-transparent text-gray-700 hover:border-blue-700 hover:text-blue-700 transition"
            }`}
            aria-current={
              location.pathname === "/find-salaries" ? "page" : undefined
            }
          >
            Find salaries
          </Link>
        </div>
      </div>
      {/* Right: Auth and employer links */}
      <div className="flex items-center gap-4 text-sm font-medium">
        <a
          href="#"
          className="text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          Sign in
        </a>
        <span className="hidden md:inline-block h-5 border-l border-gray-300 mx-2"></span>
        <a
          href="#"
          className="text-gray-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          Employers / Post Job
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

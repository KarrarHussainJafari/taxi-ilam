"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex px-4 bg-blue-400 text-white justify-between items-center py-3 gap-3 grow w-full">
      <Link
        href="/"
        className="text-xl font-bold shrink-0 hover:underline transition-all duration-200 hover:scale-110 cursor-pointer"
        onClick={closeMenu}
      >
        Taxi Ilam
      </Link>

      {/* Hamburger icon for small screens */}
      <button
        className="lg:hidden flex items-center justify-center p-2 rounded-md text-white"
        onClick={toggleMenu}
      >
        <Bars3Icon className="text-white h-8 w-8 transition-all duration-200 hover:scale-110 cursor-pointer"></Bars3Icon>
      </button>

      {/* divigation Links */}
      <div
        className={`flex gap-4 lg:flex lg:gap-4 ${
          isMenuOpen
            ? "flex-col absolute top-16 right-0 bg-blue-400 p-4 max-w-96"
            : "hidden"
        } lg:flex lg:relative`}
      >
        <Link
          href="/about"
          className="hover:underline transition-all duration-200 hover:scale-110 cursor-pointer"
          onClick={closeMenu}
        >
          Over
        </Link>
        <Link
          href="/booking"
          className="hover:underline transition-all duration-200 hover:scale-110 cursor-pointer"
          onClick={closeMenu}
        >
          Boeking
        </Link>
        <Link
          href="/rates"
          className="hover:underline transition-all duration-200 hover:scale-110 cursor-pointer"
          onClick={closeMenu}
        >
          Tarieven & Bereken Ritprijs
        </Link>
        <Link
          href="/contact"
          className="hover:underline transition-all duration-200 hover:scale-110 cursor-pointer"
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

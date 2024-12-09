"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "../ui/button";

const taxiDriverNumber = "+32466017437";

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
        <div className="flex gap-2 items-center">
          <Image
            src="/images/taxi-ilam.png"
            alt="Betrouwbare Taxi Service in Sint-Niklaas"
            width={40}
            height={40}
            className="rounded-full"
          />
          Taxi Ilam
        </div>
      </Link>

      <button
        className="lg:hidden flex items-center justify-center p-2 rounded-md text-white"
        onClick={toggleMenu}
      >
        <Bars3Icon className="text-white h-8 w-8 transition-all duration-200 hover:scale-110 cursor-pointer"></Bars3Icon>
      </button>

      <div
        className={`flex items-center gap-4 lg:flex lg:gap-4 ${
          isMenuOpen
            ? "flex-col absolute top-16 right-0 bg-blue-500 p-4 max-w-96"
            : "hidden"
        } lg:flex lg:relative`}
      >
        <Link
          href="/"
          className="hover:underline transition-all duration-200 hover:scale-110 cursor-pointer"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:underline transition-all duration-200 hover:scale-110 cursor-pointer"
          onClick={closeMenu}
        >
          Over
        </Link>
        <Link
          href="/boek-taxi"
          className="hover:underline transition-all duration-200 hover:scale-110 cursor-pointer"
          onClick={closeMenu}
        >
          Boeking
        </Link>
        <Link
          href="/ritprijs-berekenen"
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
        <Button variant="ghost">
          <a href={`tel:${taxiDriverNumber}`}>
            <div className="flex items-center gap-1">
              <Phone className="mr-2 h-4 w-4" />
              Bel
            </div>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;

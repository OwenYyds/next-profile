"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  { id: 1, name: "Stack", path: "#stack" },
  // { id: 2, name: "Portfolio", path: "#portfolio" },
  { id: 3, name: "Metrics", path: "#metric" },
  { id: 6, name: "Services", path: "#services" },
  { id: 4, name: "Contact", path: "#contact" },
];

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="z-50 fixed justify-center w-full text-purple-400 font-bold">
      <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto">
        <ul className="flex flex-row p-2 space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="transform transition-all duration-300 ease-in-out hover:text-blue-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-14 border roudnded z-50 text-white/70 border-blue-600/60 p-2"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={`fixed left-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link onClick={closeNav} href={link.path} className="text-5xl">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

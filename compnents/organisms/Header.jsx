"use client";

import React, { useState } from 'react';
import "../../app/globals.css";
import Link from 'next/link';
import { LiaFacebookF } from "react-icons/lia";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white z-20 border-b-[1px] pt-[9px] pb-[9px] shadow-top fixed top-0 left-0 w-full">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="text-black text-[30px] font-semibold first-letter:text-[#02C6FE]">
          SI
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <HiX
              className="h-8 w-8 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <HiMenuAlt3
              className="h-8 w-8 cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute md:static top-[60px] left-0 w-full md:w-auto bg-white md:flex items-center gap-[20px] px-6 py-4 md:py-0 md:px-0 md:space-x-8 transition-all duration-300 ${isMenuOpen ? "block" : "hidden md:block"
            }`}
        >
          <div className="nav flex flex-col md:flex-row md:gap-[20px] text-center">
            <Link href="#card">Experience</Link>
            <Link href="#about_me">About</Link>
            <Link href="#skill">Skills</Link>
            <Link href="#Portfolio">Portfolio</Link>
          </div>

          {/* Social Icons */}
          <div className="icons flex justify-center gap-[10px] mt-4 md:mt-0">
            <Link
              href="https://www.facebook.com/saqib.ijaz.501151"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaFacebookF className="hover:text-gray-500 cursor-pointer ease-in duration-300 h-[20px] w-[20px]" />
            </Link>
            <Link
              href="https://www.instagram.com/saqib__jut1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill className="hover:text-gray-500 cursor-pointer ease-in duration-300 h-[20px] w-[20px]" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/saqib-ijaz-34590a2a3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-gray-500 cursor-pointer ease-in duration-300 h-[20px] w-[20px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

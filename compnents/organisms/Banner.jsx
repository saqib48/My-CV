"use client";
import React from 'react';
import "../../app/globals.css";
import Heading from '../atoms/Heading';
import Image from 'next/image';

function Banner() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center pt-[50px]">
      {/* Left Section */}
      <div
        data-aos="fade-up-right"
        className="flex flex-col items-center md:items-start gap-[10px] text-center md:text-left"
      >
        <Heading level="1">SAQIB IJAZ</Heading>
        <Heading level="2">FrontEnd Developer</Heading>
        <button className="new-button w-[100%] md:w-[45%] mt-4">Get Connected</button>
      </div>

      {/* Right Section */}
      <div
        data-aos="flip-left"
        className="mt-6 md:mt-0 flex justify-center"
      >
        <Image
          width={300}
          height={300}
          src="/assits/images/SAQIB.jpg"
          alt="Saqib Ijaz"
          className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full object-cover"
        />
      </div>
    </div>
  );
}

export default Banner;

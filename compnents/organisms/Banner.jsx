"use client";
import React from 'react';
import "../../app/globals.css";
import Heading from '../atoms/Heading';
import Image from 'next/image';

function Banner() {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center md:min-h-screen px-4 pt-[45px] md:py-0 md:justify-between">
      {/* Left Section */}
      <div
        data-aos="fade-up-right"
        className="flex flex-col items-center md:items-start gap-[10px] text-center md:text-left"
      >
        <Heading level="1">SAQIB IJAZ</Heading>
        <Heading level="2">Video Editor & Frontend Developer</Heading>
        <button className="new-button w-[80%] md:w-[45%] mt-3">Get Connected</button>
      </div>

      {/* Right Section */}
      <div
        data-aos="flip-left"
        className="flex justify-center mt-0 md:mt-0"
      >
        <Image
          width={600}
          height={500}
          src="/assits/images/SAQIB.jpg"
          alt="Saqib Ijaz"
          quality={100}
          priority
          className="w-[220px] h-[220px] md:w-[400px] md:h-[400px] rounded-full object-cover"
        />
      </div>
    </div>
  );
}

export default Banner;

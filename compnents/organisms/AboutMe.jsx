"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import "../../app/globals.css";
import Image from 'next/image';

function AboutMe() {
  const [style1, setStyle1] = useState({
    transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)',
  });

  const handleMouseMove = (e, setStyleFn) => {
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    setStyleFn({
      transform: `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = (setStyleFn) => {
    setStyleFn({
      transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)',
    });
  };

  return (
    <div className="pt-16">
      <div className="text-center mb-14">
        <h2 className="text-[39px] font-medium text-customGray">
          About Me
        </h2>
        <h2
          data-aos="fade-right"
          className="text-xl md:text-xl font-medium text-customGray leading-tight"
        >
          A Passionate Frontend Developer & Video Editor <br /> Who Loves to Create
        </h2>
      </div>
      <div className="flex justify-between gap-16 md:flex-row flex-col">
        {/* Left Section */}
        <div className="">
          <div
            className="relative w-full md:w-[50%] lg:w-[100%] rounded-2xl overflow-hidden"
            style={style1}
            onMouseMove={(e) => handleMouseMove(e, setStyle1)}
            onMouseLeave={() => handleMouseLeave(setStyle1)}
          >
            <Image
              width={400}
              height={300}
              data-aos="fade-right"
              src="/assits/images/SAQIB.jpg"
              className="rounded-2xl"
              quality={100}
              priority
              alt="saqib"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-6 justify-center">
          {/* <h2 data-aos="fade-left" className="text-lg font-medium text-customGray">About Me</h2> */}
          <p
            data-aos="fade-left"
            className="text-sm md:text-base font-medium text-gray-600 leading-relaxed"
          >
            I am a creative <span className="text-customGray font-semibold">Video Editor </span>
            with over <span className="text-customGray font-semibold"> 3 years of experience </span>
            in crafting visually engaging and professional content for different platforms.
            Alongside my editing work, I am also a dedicated
            <span className="text-customGray font-semibold"> Frontend Developer </span>
            with 2 years of experience in building responsive and dynamic websites.
            I love combining creativity with technology to deliver high-quality digital experiences.
          </p>


          <div
            data-aos="fade-left"
            className="flex flex-wrap gap-4 border border-customGray rounded-lg p-4 divide-y md:divide-y-0 md:divide-x"
          >
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <h3 className="text-sm font-medium text-customGray">Name</h3>
                <p className="text-sm font-normal text-gray-600">SAQIB IJAZ</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-customGray">Email</h3>
                <Link
                  href="mailto:saqibijaz499@gmail.com"
                  className="text-sm font-normal text-gray-600 hover:text-[#14d9a7] transition-colors"
                >
                  saqibijaz499@gmail.com
                </Link>
              </div>
              <div>
                <h3 className="text-sm font-medium text-customGray">Phone</h3>
                <Link
                  href="tel:+923057509246"
                  className="text-sm font-normal text-gray-600 hover:text-[#14d9a7] transition-colors"
                >
                  +92 305 7509 246
                </Link>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 md:pl-4">
              <div>
                <h3 className="text-sm font-medium text-customGray">Specialization</h3>
                <p className="text-sm font-normal text-gray-600">
                  Video Editing & Frontend Developer
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-customGray">Address</h3>
                <p className="text-sm font-normal text-gray-600">Lahore, Pakistan</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-customGray">Freelance</h3>
                <p className="text-sm font-normal text-gray-600">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutMe;

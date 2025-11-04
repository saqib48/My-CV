"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "../../app/globals.css";
import Heading from "../atoms/Heading";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center md:min-h-screen px-4 pt-[45px] md:py-0 md:justify-between">
      {/* Left Section */}
      <div
        data-aos="fade-up-right"
        className="flex flex-col items-center md:items-start gap-[7px] text-center md:text-left"
      >
        <Heading level="1">SAQIB IJAZ</Heading>

        {/* 👇 Animated Subheading */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#14d9a7] to-[#3e3e3e] bg-clip-text text-transparent"
          animate={{ opacity: [0, 1], y: [8, 0] }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          Video Editor & Frontend Developer
        </motion.h2>
        <button
  className="new-button w-[80%] md:w-[45%] mt-3"
  onClick={() => window.open("https://www.instagram.com/saqibijaz03/", "_blank")}
>
  Get Connected
</button>

      </div>

      {/* Right Section (Animated Image) */}
      <motion.div
        whileHover={{
          rotate: 3,
          scale: 1.05,
          transition: { type: "spring", stiffness: 200 },
        }}
        className="flex justify-center mt-0 md:mt-0 relative"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-[#14d9a7]/50 to-transparent rounded-full blur-2xl -z-10" />
        <Image
          width={600}
          height={500}
          src="/assits/images/SAQIB.jpg"
          alt="Saqib Ijaz"
          quality={100}
          priority
          className="w-[220px] h-[220px] md:w-[400px] md:h-[400px] rounded-full object-cover"
        />
      </motion.div>
    </div>
  );
}

export default Banner;

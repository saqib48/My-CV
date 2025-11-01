"use client";
import React, { useState, useCallback, useMemo } from 'react';
import { MdVideoSettings } from "react-icons/md";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { GoBriefcase } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";
import Heading from '../atoms/Heading';

// Constants moved outside component to prevent recreation
const CARDS_DATA = {
  video: [
    {
      icon: MdVideoSettings,
      title: "Professional Editing",
      desc: "Skilled in cinematic cuts, smooth transitions, and color grading using Premiere Pro and After Effects to bring stories to life."
    },
    {
      icon: PiFilmSlateDuotone,
      title: "Creative Storytelling",
      desc: "Transforming raw footage into meaningful, emotional stories with perfect pacing, rhythm, and visuals that connect with viewers."
    },
    {
      icon: RiLightbulbFlashLine,
      title: "Visual Creativity",
      desc: "Dedicated to producing visually stunning edits with precision timing and creative excellence that elevate every project."
    }
  ],
  frontend: [
    {
      icon: CiSettings,
      title: "Deeper Skillset",
      desc: "Building fast, interactive Next.js apps with strong focus on UX, smooth performance, and clean responsive design."
    },
    {
      icon: GoBriefcase,
      title: "Creative Work",
      desc: "Crafting immersive web experiences with React & Next.js, blending creativity and functionality for users."
    },
    {
      icon: IoDiamondOutline,
      title: "Strong Dedication",
      desc: "Passionate about writing clean, maintainable code and delivering user-centric, high-performance web apps."
    }
  ]
};

const CATEGORIES = [
  { id: 'video', label: '🎬 Video Editing' },
  { id: 'frontend', label: '💻 Frontend Development' }
];

// Memoized Card component to prevent unnecessary re-renders
const Card = React.memo(({ card, index, onMouseMove, onMouseLeave, style }) => {
  const IconComponent = card.icon;
  
  return (
    <div className="box-outer w-full sm:w-[48%] md:w-[31%]">
      <div
        className="box-skill flex flex-col justify-between gap-[25px] px-[30px] py-[50px] rounded-[10px] bg-customGray w-full min-h-[320px] transition-transform duration-200 ease-out"
        style={style}
        onMouseMove={(e) => onMouseMove(index, e)}
        onMouseLeave={() => onMouseLeave(index)}
      >
        <IconComponent className="w-[50px] h-[50px] text-white" />
        <Heading level="3">{card.title}</Heading>
        <Heading level="6">{card.desc}</Heading>
      </div>
    </div>
  );
});

Card.displayName = 'Card';

function Cards() {
  const [activeCategory, setActiveCategory] = useState("video");
  const [hoveredCard, setHoveredCard] = useState(null);

  // Memoize active cards to prevent recalculation
  const activeCards = useMemo(() => CARDS_DATA[activeCategory], [activeCategory]);

  // Optimized mouse move handler using useCallback
  const handleMouseMove = useCallback((index, e) => {
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    setHoveredCard({
      index,
      transform: `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    });
  }, []);

  // Optimized mouse leave handler
  const handleMouseLeave = useCallback((index) => {
    setHoveredCard(prev => 
      prev?.index === index ? null : prev
    );
  }, []);

  // Calculate style for each card
  const getCardStyle = useCallback((index) => {
    if (hoveredCard?.index === index) {
      return { transform: hoveredCard.transform };
    }
    return { transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)' };
  }, [hoveredCard]);

  return (
    <div className="container mt-[50px] mb-[50px]">
      {/* Category Switch Buttons */}
     <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-[40px] w-full">
  {CATEGORIES.map(({ id, label }) => (
    <button
      key={id}
      onClick={() => setActiveCategory(id)}
      className={`new-button w-full sm:w-[250px] px-6 py-4 rounded-full font-semibold transition-all duration-300 text-center ${
        activeCategory === id
          ? "bg-[#3d3d3d] text-white shadow-lg"
          : "bg-[] text-black hover:bg-gray-600"
      }`}
      aria-pressed={activeCategory === id}
    >
      {label}
    </button>
  ))}
</div>


      {/* Cards Display */}
      <div className="flex flex-wrap justify-between gap-[20px] w-full">
        {activeCards.map((card, index) => (
          <Card
            key={`${activeCategory}-${index}`}
            card={card}
            index={index}
            style={getCardStyle(index)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
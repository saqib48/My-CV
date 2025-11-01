"use client";
import React, { useEffect, useState } from "react";

const ClientReviews = () => {
  const reviews = [
    // 🔹 Frontend Development Clients
    {
      name: "David Lee",
      company: "YallaDoThis",
      role: "Frontend Development Client",
      message:
        "He built our web app with speed and precision. Very happy with the end product!",
    },
    {
      name: "Sophia Khan",
      company: "Orbizone",
      role: "Frontend Development Client",
      message:
        "Clean code, beautiful UI — and always delivers before deadline. Highly recommend!",
    },

    // 🔹 Video Editing Clients
    {
      name: "Emily Carter",
      company: "Orbizone",
      role: "Video Editing Client",
      message:
        "Saqib created a stunning video for our brand — professional, creative, and on point.",
    },
    {
      name: "Hassan Ali",
      company: "AlFahad Store",
      role: "Video Editing Client",
      message:
        "Amazing editing skills! The transitions and effects were top-notch.",
    },
    {
      name: "Lucas Brown",
      company: "Genroar",
      role: "Video Editing Client",
      message:
        "Our short film edit came out cinematic and emotional. Loved working with him.",
    },
    {
      name: "John Doe",
      company: "CTW Global",
      role: "Frontend Development Client",
      message:
        "Working with Saqib was an amazing experience! Excellent code quality and great communication.",
    },
    {
      name: "Ronin",
      company: "Genroar",
      role: "Frontend Development Client",
      message:
        "Saqib is a very skilled developer — he delivers projects fast and with perfect design.",
    },
    {
      name: "Ava Johnson",
      company: "Learn Genroar",
      role: "Video Editing Client",
      message:
        "Perfect sense of rhythm and storytelling — turned raw clips into a masterpiece.",
    },
    {
      name: "Daniel Smith",
      company: "PromoVision",
      role: "Video Editing Client",
      message:
        "Highly professional editor who knows how to bring brand identity to life in video.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // 📱 Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔁 Auto slide (3 at a time for desktop, 1 for mobile)
  useEffect(() => {
    const step = isMobile ? 1 : 3;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + step >= reviews.length ? 0 : prev + step
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length, isMobile]);

  // 🔹 Show visible reviews (based on screen size)
  const visibleCount = isMobile ? 1 : 3;
  const visibleReviews = reviews.slice(currentIndex, currentIndex + visibleCount);
  if (visibleReviews.length < visibleCount)
    visibleReviews.push(...reviews.slice(0, visibleCount - visibleReviews.length));

  return (
    <div className="py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-10 text-[#3e3e3e]">
        Client Reviews
      </h2>

      <div
        className={`grid gap-6 transition-all duration-500 ease-in-out ${
          isMobile ? "grid-cols-1" : "md:grid-cols-3"
        }`}
      >
        {visibleReviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#3e3e3e] text-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <p className="italic mb-3">“{review.message}”</p>
            <h4 className="font-semibold text-lg">{review.name}</h4>
            <p className="text-sm text-gray-300">{review.company}</p>
            <p className="text-xs text-gray-400">{review.role}</p>
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({
          length: Math.ceil(reviews.length / (isMobile ? 1 : 3)),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * (isMobile ? 1 : 3))}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex / (isMobile ? 1 : 3) === index
                ? "bg-[#14d9a7]"
                : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;

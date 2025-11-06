"use client";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react"; // ⭐ icons

const ClientReviews = () => {
  const reviews = [
    { name: "Emily Carter", country: "🇨🇦 Canada", role: "Video Editing Client", message: "Saqib created a stunning video for our brand — professional, creative, and on point.", rating: 5 },
    { name: "Lucas Brown", country: "🇦🇺 Australia", role: "Video Editing Client", message: "Our short film edit came out cinematic and emotional. Loved working with him.", rating: 5 },
    { name: "Ava Johnson", country: "🇬🇧 UK", role: "Video Editing Client", message: "Perfect sense of rhythm and storytelling — turned raw clips into a masterpiece.", rating: 5 },
    { name: "Daniel Smith", country: "🇬🇧 UK", role: "Video Editing Client", message: "Highly professional editor who brings brand identity to life through his work.", rating: 5 },
    { name: "Sophia Lee", country: "🇺🇸 USA", role: "YouTube Content Creator", message: "Saqib transformed my raw footage into a professional YouTube video — exactly how I imagined it.", rating: 5 },
    { name: "Ahmed Khan", country: "🇵🇰 Pakistan", role: "Corporate Client", message: "Very professional and responsive. Delivered a clean corporate edit ahead of time.", rating: 4 },
    { name: "Olivia Martin", country: "🇬🇧 United Kingdom", role: "Marketing Manager", message: "Excellent attention to detail and storytelling. Our ad video performed beyond expectations.", rating: 5 },
    { name: "Noah Wilson", country: "🇩🇪 Germany", role: "Video Editing Client", message: "Saqib understood our brand vision perfectly and created a powerful promotional edit.", rating: 5 },
    { name: "Isabella Rossi", country: "🇮🇹 Italy", role: "Travel Blogger", message: "Loved the color grading and pacing — he made my travel vlog look cinematic!", rating: 5 },
    { name: "Hassan Ali", country: "🇦🇪 UAE", role: "Video Editing Client", message: "Amazing editing skills! The transitions and effects were top-notch.", rating: 5},
    { name: "Ethan Walker", country: "🇳🇿 New Zealand", role: "Podcast Producer", message: "Handled our podcast video editing smoothly. Great sound sync and visuals.", rating: 5 },
    { name: "Chloe Kim", country: "🇰🇷 South Korea", role: "Brand Client", message: "Saqib brought our campaign to life with seamless editing and visual consistency.", rating: 5 },
    { name: "Rajesh Patel", country: "🇮🇳 India", role: "Short Film Producer", message: "The editing was cinematic and emotional — exactly the mood I wanted for the story.", rating: 5 },
    { name: "John Miller", country: "🇩🇪 Germany", role: "Frontend Development Client", message: "Working with Saqib was an excellent experience! Great code quality and communication.", rating: 5 },
    { name: "David Lee", country: "🇺🇸 USA", role: "Frontend Development Client", message: "He built our web app with speed and precision. Very happy with the end product!", rating: 5 },
    { name: "Sophia Khan", country: "🇬🇧 UK", role: "Frontend Development Client", message: "Clean code, beautiful UI — and always delivers before deadline. Highly recommend!", rating: 5 },
    { name: "Rina Tanaka", country: "🇯🇵 Japan", role: "Frontend Development Client", message: "Saqib is a highly skilled developer — delivers fast with perfect attention to detail.", rating: 4 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const step = isMobile ? 1 : 3;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + step >= reviews.length ? 0 : prev + step));
    }, 4500);
    return () => clearInterval(interval);
  }, [isMobile, reviews.length]);

  const visibleCount = isMobile ? 1 : 3;
  const visibleReviews = reviews.slice(currentIndex, currentIndex + visibleCount);
  if (visibleReviews.length < visibleCount)
    visibleReviews.push(...reviews.slice(0, visibleCount - visibleReviews.length));

  return (
    <div className="relative py-20 px-6 md:px-20 text-center overflow-hidden bg-white/30">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#3e3e3e]">Client Reviews</h2>

      <div className="relative z-10 overflow-hidden">
        <div
          className={`grid transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] gap-8 ${
            isMobile ? "grid-cols-1" : "md:grid-cols-3"
          }`}
        >
          {visibleReviews.map((review, i) => (
            <div
              key={i}
              className="flex flex-col justify-between h-[200px] bg-white/80 backdrop-blur-md border border-black/5 text-gray-800 p-6 rounded-3xl shadow-md hover:shadow-lg transform transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h4 className="font-semibold text-lg text-[#14d9a7]">{review.name}</h4>
                  <span className="text-sm text-gray-600">{review.country}</span>
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-3">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={18}
                      fill={starIndex < review.rating ? "#14d9a7" : "none"}
                      stroke={starIndex < review.rating ? "#14d9a7" : "#d1d5db"}
                    />
                  ))}
                </div>

                {/* Message */}
                <p className="text-sm leading-relaxed text-gray-700 italic">“{review.message}”</p>
              </div>

              {/* Role */}
              <p className="text-xs text-gray-500 mt-4">{review.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 gap-2 relative z-10">
        {Array.from({ length: Math.ceil(reviews.length / (isMobile ? 1 : 3)) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * (isMobile ? 1 : 3))}
            className={`w-3 h-3 rounded-full transition-all ${
              Math.floor(currentIndex / (isMobile ? 1 : 3)) === index
                ? "bg-[#14d9a7] scale-110"
                : "bg-gray-400 hover:bg-[#14d9a7]/70"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;

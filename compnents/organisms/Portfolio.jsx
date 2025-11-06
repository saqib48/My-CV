"use client";
import Image from "next/image";
import React, { useState } from "react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("video");
  const [activeCategory, setActiveCategory] = useState("short");

  // 🔹 Video Editing Projects by category
  const videoEditingProjects = {
    short: [
      { videoUrl: "https://www.youtube.com/embed/7OjKq347Cd8?" },
      { videoUrl: "https://www.youtube.com/embed/9ojFF-StVcQ" },
      { videoUrl: "https://www.youtube.com/embed/31zOAnADHgk" },
      { videoUrl: "https://www.youtube.com/embed/gkl8SZ5tufw" },
      { videoUrl: "https://www.youtube.com/embed/d4zZUCxFBww" },
      { videoUrl: "https://www.youtube.com/embed/qlHD1vID8BY" },
      { videoUrl: "https://www.youtube.com/embed/9rMigxpL5j8" },

    ],
    long: [
      { videoUrl: "https://www.youtube.com/embed/BAWj5UI1Q9A" },
      { videoUrl: "https://www.youtube.com/embed/nHjyqtJ8nfE" },
    ],
    beforeAfter: [
      { videoUrl: "https://www.youtube.com/embed/JK3IkoVCGRc" },
      { videoUrl: "https://www.youtube.com/embed/fOepiiDDC2c" },
      { videoUrl: "https://www.youtube.com/embed/CPw3eDvy398" },
      { videoUrl: "https://www.youtube.com/embed/IJFnZ_5LezY" },
      { videoUrl: "https://www.youtube.com/embed/J93fYz6E11U" },
      { videoUrl: "https://www.youtube.com/embed/bhgjonZ4_jU" },
    ],
    realEstate: [
      { videoUrl: "https://www.youtube.com/embed/_-PyMkznEz0" },
      { videoUrl: "https://www.youtube.com/embed/Bk-4WZvFHqY" },
      { videoUrl: "https://www.youtube.com/embed/gsd-vV_FuH0" },
      { videoUrl: "https://www.youtube.com/embed/4WtiHfbxBmA" },

    ],
    podcasts: [
      { videoUrl: "https://www.youtube.com/embed/I_wkMPAL6TY" },
      { videoUrl: "https://www.youtube.com/embed/J93fYz6E11U" },


    ],
    thumbnails: [
      { img: "/assits/images/t1.PNG" },
      { img: "/assits/images/t2.PNG" },
      { img: "/assits/images/t3.PNG" },
      { img: "/assits/images/t4.PNG" },
      { img: "/assits/images/t5.PNG" },
      { img: "/assits/images/t6.PNG" },
      { img: "/assits/images/t7.PNG" },
      { img: "/assits/images/t8.PNG" },
      { img: "/assits/images/t9.PNG" },
      { img: "/assits/images/t10.PNG" },
      { img: "/assits/images/t11.PNG" },
      { img: "/assits/images/t12.PNG" },
    ],
  };

  // 🔹 Frontend Development Projects
  const frontendProjects = [
    { title: "CTW GLOBAL", img: "/assits/images/global.png" },
    { title: "Learn Genroar", img: "/assits/images/genroar.png" },
    { title: "AlFahad Store", img: "/assits/images/alfahd.webp" },
    { title: "Genroar Clothing", img: "/assits/images/gen.png" },
    { title: "Orbizone", img: "/assits/images/orbizone.png" },
    { title: "YallaDoThis", img: "/assits/images/yalla.png" },
  ];

  return (
    <div className="mt-[-4%] mb-[80px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-customGray">
          My Portfolio
        </h2>

        {/* 🔸 Main Tabs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 w-full">
          <button
            onClick={() => setActiveTab("video")}
            className={`new-button w-full md:w-[250px] sm:w-auto px-8 py-2 text-base font-medium text-center ${
              activeTab === "video"
                ? "bg-[#3e3e3e] text-white"
                : "text-[#3e3e3e]"
            }`}
          >
            🎬 Video Editing
          </button>

          <button
            onClick={() => setActiveTab("frontend")}
            className={`new-button w-full sm:w-auto px-8 py-2 text-base font-medium text-center ${
              activeTab === "frontend"
                ? "bg-[#3e3e3e] text-white"
                : "text-[#3e3e3e]"
            }`}
          >
            💻 Frontend Development
          </button>
        </div>

        {/* 🔹 Video Editing Category Tabs */}
        {activeTab === "video" && (
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { key: "short", label: "Short Form" },
              { key: "long", label: "Long Form" },
              { key: "beforeAfter", label: "Before & After" },
              { key: "realEstate", label: "Real Estate" },
              { key: "podcasts", label: "Podcasts" },
              { key: "thumbnails", label: "Thumbnails" },
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 border rounded-md text-sm font-medium ${
                  activeCategory === cat.key
                    ? "bg-[#3e3e3e] text-white"
                    : "border-[#3e3e3e] text-[#3e3e3e]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* 🔹 Conditional Rendering */}
        {activeTab === "video" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoEditingProjects[activeCategory]?.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                {activeCategory === "thumbnails" ? (
                  <Image
                    src={project.img}
                    alt={`Thumbnail ${index + 1}`}
                    width={1000}
                    height={200}
                    className="w-full h-56"

                  />
                ) : (
                  <iframe
                    className="w-full h-56"
                    src={project.videoUrl}
                    title={`Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <Image
                  width={1000}
                  height={200}
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-[#3e3e3e]">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;

"use client";
import Image from "next/image";
import React, { useState } from "react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("video");

  // 🔹 Video Editing Projects (YouTube links)
  const videoEditingProjects = [
    { videoUrl: "https://www.youtube.com/embed/J93fYz6E11U" },
    {  videoUrl: "https://www.youtube.com/embed/bhgjonZ4_jU?si" },
    { videoUrl: "https://youtube.com/embed/CPw3eDvy398?si" },
    { videoUrl: "https://www.youtube.com/embed/IJFnZ_5LezY?si" },
  ];

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
        <h2 className="text-3xl font-bold text-center mb-8 text-customGray">My Portfolio</h2>

        {/* 🔸 Buttons Section */}
        <div className="flex justify-center gap-4 mb-10">
          {/* 🔸 Buttons Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 w-full">
            <button
              onClick={() => setActiveTab("video")}
              className={`new-button w-full md:w-[250px] sm:w-auto px-8 py-2 text-base font-medium relative text-center ${activeTab === "video" ? "bg-[#3e3e3e] text-white" : "text-[#3e3e3e]"
                }`}
            >
              🎬 Video Editing
            </button>

            <button
              onClick={() => setActiveTab("frontend")}
              className={`new-button w-full sm:w-auto px-8 py-2 text-base font-medium relative text-center ${activeTab === "frontend" ? "bg-[#3e3e3e] text-white" : "text-[#3e3e3e]"
                }`}
            >
              💻 Frontend Development
            </button>
          </div>

        </div>

        {/* 🔸 Conditional Rendering */}
        {activeTab === "video" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoEditingProjects.map((project, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative w-full h-56">
                  <iframe
                    className="w-full h-full"
                    src={project.videoUrl}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendProjects.map((project, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  width={1000}
                  height={200}
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-[#3e3e3e]">{project.title}</h3>
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

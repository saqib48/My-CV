"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("video");
  const [activeCategory, setActiveCategory] = useState("short");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const getYouTube = (url) => {
    if (!url) return {};
    let match = url.match(/v=([a-zA-Z0-9_-]+)/);
    if (!match) match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
    if (!match) return {};
    const id = match[1];
    return {
      embed: `https://www.youtube.com/embed/${id}`,
      thumb: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    };
  };

  const videoEditingProjects = {
  short: [
    getYouTube("https://www.youtube.com/watch?v=9ojFF-StVcQ"),
    getYouTube("https://www.youtube.com/watch?v=qlHD1vID8BY"),
    getYouTube("https://www.youtube.com/watch?v=7OjKq347Cd8"),
    getYouTube("https://www.youtube.com/watch?v=I7QCl4IKsaE"),
    getYouTube("https://www.youtube.com/watch?v=gkl8SZ5tufw"),
    getYouTube("https://www.youtube.com/watch?v=sdPezqF5uoY"),
    getYouTube("https://www.youtube.com/watch?v=d4zZUCxFBww"),
     getYouTube("https://www.youtube.com/watch?v=31zOAnADHgk"),
    getYouTube("https://www.youtube.com/watch?v=9rMigxpL5j8"),
  ],

  long: [
    getYouTube("https://www.youtube.com/watch?v=BAWj5UI1Q9A"),
    getYouTube("https://www.youtube.com/watch?v=nHjyqtJ8nfE"),
    getYouTube("https://www.youtube.com/watch?v=y2G3VXaAJXE"),
  ],

  beforeAfter: [
    getYouTube("https://www.youtube.com/watch?v=JK3IkoVCGRc"),
    getYouTube("https://www.youtube.com/watch?v=fOepiiDDC2c"),
    getYouTube("https://www.youtube.com/watch?v=CPw3eDvy398"),
    getYouTube("https://www.youtube.com/watch?v=IJFnZ_5LezY"),
    getYouTube("https://www.youtube.com/watch?v=J93fYz6E11U"),
    getYouTube("https://www.youtube.com/watch?v=bhgjonZ4_jU"),
  ],

  realEstate: [
    getYouTube("https://www.youtube.com/watch?v=dBwJFdZMLMI"),
    getYouTube("https://www.youtube.com/watch?v=_-PyMkznEz0"),
    getYouTube("https://www.youtube.com/watch?v=lND_A4ub_Zo"),
    getYouTube("https://www.youtube.com/watch?v=4WtiHfbxBmA"),
    getYouTube("https://www.youtube.com/watch?v=Bk-4WZvFHqY"),
    getYouTube("https://www.youtube.com/watch?v=gsd-vV_FuH0"),
  ],

  podcasts: [
    getYouTube("https://www.youtube.com/watch?v=I_wkMPAL6TY"),
    getYouTube("https://www.youtube.com/watch?v=J93fYz6E11U"),
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


  const frontendProjects = [
    { title: "CTW GLOBAL", img: "/assits/images/global.png" },
    { title: "Learn Genroar", img: "/assits/images/genroar.png" },
    { title: "AlFahad Store", img: "/assits/images/alfahd.webp" },
    { title: "Genroar Clothing", img: "/assits/images/gen.png" },
    { title: "Orbizone", img: "/assits/images/orbizone.png" },
    { title: "YallaDoThis", img: "/assits/images/yalla.png" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="mt-[-4%] mb-[80px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-customGray">
          My Portfolio
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 w-full">
          <button
            onClick={() => setActiveTab("video")}
            className={`new-button w-full md:w-[250px] px-8 py-2 text-base font-medium text-center ${
              activeTab === "video" ? "bg-[#3e3e3e] text-white" : "text-[#3e3e3e]"
            }`}
          >
            🎬 Video Editing
          </button>

          <button
            onClick={() => setActiveTab("frontend")}
            className={`new-button w-full md:w-[250px] px-8 py-2 text-base font-medium text-center ${
              activeTab === "frontend" ? "bg-[#3e3e3e] text-white" : "text-[#3e3e3e]"
            }`}
          >
            💻 Frontend Development
          </button>
        </div>

        {activeTab === "video" && (
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { key: "short", label: "Short Form" },
              { key: "long", label: "Long Form" },
              { key: "beforeAfter", label: "Before / After" },
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

        {activeTab === "video" ? (
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {videoEditingProjects[activeCategory]?.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => project.embed && setSelectedVideo(project)}
              >
                {activeCategory === "thumbnails" ? (
                  <Image
                    src={project.img}
                    alt="Thumbnail"
                    width={1000}
                    height={200}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.thumb}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <Play size={48} className="text-white" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-
 3 gap-6 mt-6">
    {frontendProjects.map((p, i) => (
      <motion.div
        key={i}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="bg-white shadow-lg rounded-lg overflow-hidden"
      >
       <Image
  src={p.img}
  alt={p.title}
  width={1000}
  height={300}
  className="w-full h-60 object-cover object-left "
/>
        <div className="p-4 text-center font-semibold text-customGray">
          {p.title}
        </div>
      </motion.div>
    ))}
  </div>
)
}

{selectedVideo && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl relative">
      <button
        onClick={() => setSelectedVideo(null)}
        className="absolute top-3 right-3 bg-black text-white rounded-full px-3 py-1"
      >
        ✕
      </button>
      <iframe
        src={selectedVideo.embed}
        className="w-full h-[400px]"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}

</div>
</div>
);
}

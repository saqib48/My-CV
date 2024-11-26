import Image from "next/image";
import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "YallaDoThis",
      img: "/assits/images/yalla.png",
    },
    {
      title: "CTW GLOBAL",
      img: "/assits/images/global.png",
    },
    {
      title: "Learn Genroar",
      img: "/assits/images/genroar.png",
    },
    {
      title: "Orbizone",
      img: "/assits/images/orbizone.png",
    },
    {
      title: "AlFahad Stoe",
      img: "/assits/images/alfahd.webp",
    },
    {
      title: "Learn Genroar",
      img: "/assits/images/genroar.png",
    },
  ];

  return (
    <div className="mt-[-4%] mb-[50px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                width={200}
                height={200}
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

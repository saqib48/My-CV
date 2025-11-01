"use client";

import { useEffect } from 'react';
import '../../public/assits/css/style.css';
import { GiSkills } from "react-icons/gi";
import Image from 'next/image';

const ProgressBar = () => {
  useEffect(() => {
    const animateProgress = (el) => {
      el.className = "animate-progress";
      el.setAttribute(
        "style",
        `--animate-progress:${el.getAttribute('data-progress')}%;`
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgress(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.progress [data-progress]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container flex flex-col gap-[15px] items-center px-4">
      <h2 className="text-[39px] font-medium text-customGray">Skills</h2>

      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-[40px]">
                {/* Left Section - Video Editing Skills */}
        <div className="relative flex flex-col w-full lg:w-[48%] text-left">
          <Image
            width={1000}
            height={150}
            className="w-full rounded-[30px] object-cover"
            data-aos-duration="500"
            data-aos="fade-left"
            src="/assits/images/video.webp"
            alt="Video Editing Skills"
          />
          <div
            data-aos-duration="2000"
            data-aos="fade-down-left"
            className="absolute bg-white top-[20px] left-[20px] w-[90%] flex justify-between px-[25px] py-[8px] items-center border-box h-[50px] rounded-[40px] shadow-lg"
          >
            <h2 className="text-[22px] text-customGray">Video Editing</h2>
            <GiSkills className="text-[24px] text-customGray" />
          </div>

          <div className="progress flex flex-col gap-[15px] mt-[30px]">
            <div data-aos="fade-up" data-aos-duration="1400">
              <p>Adobe Premiere Pro - <strong>100%</strong></p>
              <div className="progress-bar" data-progress="100"></div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1200">
              <p>After Effects - <strong>95%</strong></p>
              <div className="progress-bar" data-progress="95"></div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <p>DaVinci Resolve - <strong>85%</strong></p>
              <div className="progress-bar" data-progress="85"></div>
            </div>
            <div data-aos="fade-up" data-aos-duration="900">
              <p>Color Grading - <strong>90%</strong></p>
              <div className="progress-bar" data-progress="90"></div>
            </div>
            <div data-aos="fade-up" data-aos-duration="700">
              <p>Sound Design - <strong>80%</strong></p>
              <div className="progress-bar" data-progress="80"></div>
            </div>
          </div>
        </div>
        {/* Right Section - Frontend Skills */}
        <div className="relative flex flex-col w-full lg:w-[48%] text-left">
          <Image
            width={1000}
            height={150}
            className="w-full rounded-[30px] object-cover"
            data-aos-duration="500"
            data-aos="fade-right"
            src="/assits/images/skills.jpg"
            alt="Frontend Skills"
          />
          <div
            data-aos-duration="2000"
            data-aos="fade-down-right"
            className="absolute bg-white top-[20px] left-[20px] w-[90%] flex justify-between px-[25px] py-[8px] items-center border-box h-[50px] rounded-[40px] shadow-lg"
          >
            <h2 className="text-[22px] text-customGray">Frontend Developer</h2>
            <GiSkills className="text-[24px] text-customGray" />
          </div>

          <div className="progress flex flex-col gap-[15px] mt-[30px]">
            <div data-aos="fade-up" data-aos-duration="1500">
              <p>HTML - <strong>100%</strong></p>
              <div className="progress-bar" data-progress="100"></div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1200">
              <p>CSS - <strong>100%</strong></p>
              <div className="progress-bar" data-progress="100"></div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1100">
              <p>JavaScript - <strong>95%</strong></p>
              <div className="progress-bar" data-progress="95"></div>
            </div>
            <div data-aos="fade-up" data-aos-duration="900">
              <p>React.js - <strong>90%</strong></p>
              <div className="progress-bar" data-progress="90"></div>
            </div>
            <div data-aos="fade-up" data-aos-duration="500">
              <p>Next.js - <strong>95%</strong></p>
              <div className="progress-bar" data-progress="95"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

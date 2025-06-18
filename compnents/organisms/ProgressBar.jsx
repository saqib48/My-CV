"use client";

// components/ProgressBar.js
import { useEffect } from 'react';
import '../../public/assits/css/style.css';
import { GiSkills } from "react-icons/gi";
import Image from 'next/image';
import Container from '../atoms/Container';

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
      <h2 className='text-[39px] font-medium text-customGray'>Skills</h2>
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div className="relative disc flex flex-col w-full md:w-[50%] text-left">
          <Image
            width={250}
            height={150}
            className='w-[100%] rounded-[30px] object-cover'
            data-aos-duration="500"
            data-aos="fade-right"
            src="/assits/images/skills.jpg"
            alt="Skills"
          />
          <div data-aos-duration="2000" data-aos="fade-down-right" className="absolute bg-white top-[20px] left-[20px] w-[40%] flex justify-between px-[30px] py-[10px] items-center border-box h-[50px] rounded-[40px] shadow-lg">
            <h2 className='text-[28px] text-customGray'>Skills</h2>
            <GiSkills className='text-[28px] text-customGray' />
          </div>
        </div>
        <div className='w-full md:w-[50%] progress flex flex-col gap-[15px] h-[550px]'>
          <div data-aos="fade-up" data-aos-duration="1500">
            <p>HTML - <strong>95%</strong></p>
            <div className="progress-bar" data-progress="90"></div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1200">
            <p>CSS - <strong>90%</strong></p>
            <div className="progress-bar" data-progress="85"></div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1100">
            <p>JavaScript - <strong>85%</strong></p>
            <div className="progress-bar" data-progress="80"></div>
          </div>
          <div data-aos="fade-up" data-aos-duration="900">
            <p>React.js - <strong>85%</strong></p>
            <div className="progress-bar" data-progress="75"></div>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <p>Next.js - <strong>90%</strong></p>
            <div className="progress-bar" data-progress="80"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

// components/DownloadButton.js
import React from 'react';

const DownloadButton = () => {
  return (
    <a href="/assits/pdf/SAQIB IJAZ.pdf" data-aos="fade-left" download="/assits/pdf/SAQIB IJAZ.pdf">
      <button className='new-button w-[45%] ' >Download CV</button>
    </a>
  );
};

export default DownloadButton;

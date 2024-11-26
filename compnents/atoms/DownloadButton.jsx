// components/DownloadButton.js
import React from 'react';

const DownloadButton = () => {
  return (
    <a href="/assits/pdf/SAQIB IJAZ.pdf" download="/assits/pdf/SAQIB IJAZ.pdf">
      <button className='new-button w-[100%] md:w-[45%] mt-4' >Download CV</button>
    </a>
  );
};

export default DownloadButton;

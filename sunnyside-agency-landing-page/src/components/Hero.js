import React from "react";
import mobileBG from "../images/mobile/image-header.jpg";
import DesktopBG from "../images/desktop/image-header.jpg";
import arrowDown from "../images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <>
      <div className='hero-section absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-5xl uppercase text-white tracking-wider text-center md:mb-10 py-12 md:py-4'>
          We Are Creatives
        </h1>
        <img src={arrowDown} alt='' className='mx-auto md:-7' />
      </div>
    </>
  );
};

export default Hero;

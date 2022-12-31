import React from "react";
import Img1 from "../assets/images/image-retro-pcs.jpg";
import Img2 from "../assets/images/image-top-laptops.jpg";
import Img3 from "../assets/images/image-gaming-growth.jpg";

const Technologies = () => {
  return (
    <div className='container mx-auto p-4 flex flex-col  justify-center  md:flex-row'>
      <div className='flex-container flex flex-row gap-8 py-4'>
        <div className='tech-img'>
          <img src={Img1} alt='Technolgoie Image' className=' ' />
        </div>
        <div className='tech-description'>
          <span className='text-3xl text-gray-400'>01</span>
          <h3 className='py-2 text-lg font-bold hover:text-Soft-red'>Reviving Retro PC</h3>
          <p className='text-sm'>
            What happens when old PCs are giving modern upgrade
          </p>
        </div>
      </div>

      <div className='flex-container flex gap-8 py-4 '>
        <div className='tech-img'>
          <img src={Img2} alt='Technolgoie Image' className=' ' />
        </div>
        <div className='tech-description'>
          <span className='text-3xl text-gray-400'>01</span>
          <h3 className='py-2 text-lg font-bold hover:text-Soft-red'>Top 10 Laptops of 2022</h3>
          <p className='text-sm'>Our best Picks for various needs and budget</p>
        </div>
      </div>

      <div className='flex-container flex gap-8 py-4'>
        <div className='tech-img'>
          <img src={Img3} alt='Technolgoie Image' className=' ' />
        </div>
        <div className='tech-description'>
          <span className='text-3xl text-gray-400'>01</span>
          <h3 className='py-2 text-lg font-bold hover:text-Soft-red'>The Growth of Gaming</h3>
          <p className='text-sm'>
            How the pandemic has sparked fresh opportunities
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

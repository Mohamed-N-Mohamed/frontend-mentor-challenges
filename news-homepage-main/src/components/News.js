import React from "react";

import Desktop from "../assets/images/image-web-3-desktop.jpg";

const News = () => {
  return (
    <div className='container mx-auto md:flex md:gap-12 md:p-2'>
      <div className='news-content'>
        <div className='hidden news-image md:block'>
          <img src={Desktop} alt='' />
        </div>

        <div className='news-info md:flex md:justify-center md:items-center'>
          <div className='news-title py-4 w-full'>
            <h1 className='text-4xl font-bold'>
              The Bright Future of Web 3.0?
            </h1>
          </div>

          <div className='news-content md:px-28 px-4'>
            <p className='md:text-base md:py-4 text-2xl py-2'>
              We dive into the next evolution of the web that claims to put the
              power of the platform back into the hands of the power of the
              people. But is it really fulfiling its promise
            </p>

            <button className='md:py-2 md:px-4 bg-Soft-red text-white uppercase py-4 px-8 mb-4'>
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className='news-sidebar bg-Very-dark-blue md:w-2/3  p-8 w-3/4 mx-auto mt-8'>
        <div className='title'>
          <h2 className='text-Soft-orange text-3xl md:mb-4'>New</h2>
        </div>

        <div className='content py-4'>
          <h3 className='text-Grayish-blue'>Hydrogen VS Electric Cars</h3>
          <p className='text-Dark-grayish-blue'>
            Will hydrogen-fueles cars ever catch up to EVS
          </p>
        </div>

        <div className='border border-Dark-grayish-blue'></div>

        <div className='content py-4'>
          <h3 className='text-Grayish-blue'>Hydrogen VS Electric Cars</h3>
          <p className='text-Dark-grayish-blue'>
            Will hydrogen-fueles cars ever catch up to EVS
          </p>
        </div>

        <div className='border border-Dark-grayish-blue'></div>

        <div className='content py-4'>
          <h3 className='text-Grayish-blue'>Hydrogen VS Electric Cars</h3>
          <p className='text-Dark-grayish-blue'>
            Will hydrogen-fueles cars ever catch up to EVS
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;

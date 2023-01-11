import React from "react";
import transformDesktop from "../images/desktop/image-transform.jpg";
import transformMobile from "../images/desktop/image-transform.jpg";
import standMobile from "../images/mobile/image-stand-out.jpg";
import standDesktop from "../images/desktop/image-stand-out.jpg";

const Transform = () => {
  return (
    <>
      <div className='Transform flex flex-col-reverse md:flex-row md:justify-center md:items-center w-full'>
        <div className='tranform-content md:p-8 md:w-[50%] w-full text-center'>
          <h3 className='text-3xl pt-12 md:text-5xl mb-2'>
            Transform your brand
          </h3>
          <p className='pt-5 text-base'>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>

          <h4 className='pt-12 uppercase text-xl'>Learn More</h4>
        </div>

        <div className='tranform-img  md:w-[50%]'>
          <picture>
            <source media='(min-width: 768px)' srcset={transformDesktop} />
            <img src={transformMobile} alt='' className='w-full' />
          </picture>
        </div>
      </div>

      <div className='stand md:flex md:justify-center md:items-center md:w-full'>
        <div className='stand-img  md:w-[50%]'>
          <picture>
            <source media='(min-width: 768px)' srcset={standDesktop} />
            <img src={standMobile} alt='' className='w-full' />
          </picture>
        </div>

        <div className='stand-content md:p-8 md:w-[50%] w-full text-center'>
          <h3 className='text-3xl pt-12 md:text-5xl mb-2 '>
            Stand out to the right audience
          </h3>
          <p className='pt-5 text-base'>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>

          <h4 className='pt-8 uppercase text-xl'>Learn More</h4>
        </div>
      </div>
    </>
  );
};

export default Transform;

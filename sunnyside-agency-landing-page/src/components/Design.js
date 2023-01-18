import React from "react";
import graphicMobile from "../images/mobile/image-graphic-design.jpg";
import graphicDesktop from "../images/desktop/image-graphic-design.jpg";
import photographyMobile from "../images/mobile/image-photography.jpg";
import photographyDesktop from "../images/desktop/image-photography.jpg";

const Design = () => {
  return (
    <div className='flex flex-col md:flex-row w-full'>
      <div className='graphic md:h-[600px] p-8 md:w-[50%] relative '>
        <div className='content py-8 absolute  md:top-[80%] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 text-center'>
          <h3 className='text-2xl md:text-3xl'>Graphic Design</h3>
          <p className='pt-8 text-xs leading-5'>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>
      </div>

      <div className='photography md:h-[600px] p-8 md:w-[50%] relative'>
        <div className='content py-8 absolute  md:top-[80%] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2  text-center'>
          <h3 className='text-2xl md:text-3xl'>Graphic Design</h3>
          <p className='pt-8 text-xs leading-5'>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Design;

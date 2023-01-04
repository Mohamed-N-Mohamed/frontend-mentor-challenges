import React from "react";
import phones from "../images/illustration-phones.svg";
import circles from "../images/bg-pattern-circles.svg";

const Art = () => {
  return (
    <>
      <section className='art px-5 text-center py-10 text-white relative z-10 md:grid md:grid-cols-2'>
        <div>
          <div>
            <img
              src={circles}
              alt=''
              className='absolute top-0 art-image circles'
            />
          </div>
          <div>
            <img src={phones} alt='' className='absolute top-0 art-image' />
          </div>{" "}
          art-image
        </div>
        <div className='pt-80 px-5 md:py-20'>
          <h2 className='text-center text-3xl mb-5 md:text-4xl lg:text-5xl text-white'>
            State of the Art Infrastructure
          </h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </section>
    </>
  );
};

export default Art;

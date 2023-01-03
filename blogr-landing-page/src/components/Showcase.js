import React from "react";
import bgDesktop from "../images/bg-pattern-intro-desktop.svg";
import bgMobile from "../images/bg-pattern-intro-mobile.svg";

const Showcase = () => {
  return (
    <section className='showcase'>
      <div className='overlay px-5 flex flex-col items-center justify-center text-center'>
        <h1 className='font-bold text-4xl text-white mb-5 md:text-5xl'>
          A modern publishing platform
        </h1>
        <p className='text-white'>
          {" "}
          Grow your audience and build your online brand
        </p>

        <ul className='flex items-center '>
          <li className='mx-1 my-5'>
            <button className='bg-white py-2 px-4 rounded-full btn-light'>
              Start For Free
            </button>
          </li>
          <li className='mx-1 my-5'>
            <button className='border border-white p-2 rounded-full py-2 px-4 text-white'>
              Learn More
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Showcase;

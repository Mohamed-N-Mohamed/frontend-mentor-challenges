import React from "react";
import Image1 from "../images/image-emily.jpg";
import Image2 from "../images/image-jennie.jpg";
import Image3 from "../images/image-thomas.jpg";

const Testimonials = () => {
  return (
    <div className='testimonials text-center flex flex-col justify-center items-center md:flex-row'>
      <div className='container py-8 text-center flex flex-col justify-center items-center md:flex-row '>
        <div className='cards py-8'>
          <img src={Image1} alt='emily' className='w-24 mx-auto rounded-full' />
          <p className='leading-7 px-4 mt-2 py-8'>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>

          <h4 className='text-2xl py-4 text-[#23303e]'> Emily R.</h4>
          <h5 className='text-base text-gray-400'>Marketing Director</h5>
        </div>

        <div className='cards py-8'>
          <img src={Image3} alt='emily' className='w-24 mx-auto rounded-full' />
          <p className='leading-7 px-4 mt-2 py-8'>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
            Thomas S.
          </p>

          <h4 className='text-2xl py-4 text-[#23303e]'> Thomas S.</h4>
          <h5 className='text-base text-gray-400'> Chief Operating Officer</h5>
        </div>

        <div className='cards py-8'>
          <img src={Image2} alt='emily' className='w-24 mx-auto rounded-full' />
          <p className='leading-7 px-4 mt-2 py-8'>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended! Jennie F.
          </p>

          <h4 className='text-2xl py-4 text-[#23303e]'> Jennie F.</h4>
          <h5 className='text-base text-gray-400'> Business Owner</h5>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

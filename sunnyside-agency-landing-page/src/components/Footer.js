import React from "react";
import Instagram from '../images/icon-instagram.svg'
import Facebook from '../images/icon-facebook.svg'
import Twitter from '../images/icon-twitter.svg'
import Pinterest from '../images/icon-pinterest.svg'

const Footer = () => {
  return (
    <footer className='footer p-8 text-center bg-[#458c7e]'>
      <div className='title py-8 text-2xl'>Sunnyside</div>
      <div className="links">
        <ul className="flex justify-center items-center gap-8">
          <li className="text-sm">About</li>
          <li className="text-sm">Services</li>
          <li className="text-sm">Projects</li>
        </ul>
      </div>

      <div className="social-icons flex justify-center items-center gap-4 py-8">
        <img src={Facebook} alt="" />
        <img src={Instagram} alt="" />
        <img src={Twitter} alt="" />
        <img src={Pinterest} alt="" />
      </div>
    </footer>
  );
};

export default Footer;

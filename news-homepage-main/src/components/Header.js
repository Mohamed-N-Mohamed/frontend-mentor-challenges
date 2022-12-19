import React from "react";
import Logo from "../assets/images/logo.svg";
import Icon from "../assets/images/icon-menu.svg";
import Close from "../assets/images/icon-menu-close.svg";
import Mobile from "../assets/images/image-web-3-mobile.jpg";

const Header = () => {
  const inneer = () => {
    console.log(window.innerWidth);
  };

  inneer();
  return (
    <div className='header p-4'>
      <div className='navbar-mobile flex justify-between items-center lg:hidden'>
        <img src={Logo} alt='logo' />
        <img src={Icon} alt='icon' />
      </div>

      <div className='hidden navbar-desktop md:flex md:justify-evenly md:items-center md:py-8'>
        <div className='desktop-logo '>
          <img src={Logo} alt='logo' />
        </div>

        <ul className='md:flex md:gap-8 '>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>New</a>
          </li>
          <li>
            <a>Popular</a>
          </li>
          <li>
            <a>Trending</a>
          </li>
          <li>
            <a>Caregories</a>
          </li>
        </ul>
      </div>

      <div className='header-image py-4 lg:hidden'>
        <img src={Mobile} alt='mobile image' />
      </div>
    </div>
  );
};

export default Header;

import logo from "../images/logo.svg";
import icon from "../images/icon-hamburger.svg";
import mobileBG from "../images/mobile/image-header.jpg";
import DesktopBG from "../images/desktop/image-header.jpg";
import arrowDown from "../images/icon-arrow-down.svg";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar((prev) => !prev);
  };
  return (
    <>
      <nav className='navbar bg-image p-8 relative'>
        <div className='mobile-navbar md:hidden flex justify-between item-center'>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>

          <div className='icon'>
            <button onClick={handleClick}>
              <img src={icon} alt='icon' />
            </button>
          </div>
        </div>

        <div className='hidden mobile-desktop md:flex md:justify-between md:items-start'>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>

          <div className='nav-links md:px-8'>
            <ul className='md:flex md:gap-8 md:text-white cursor-pointer'>
              <li className='hover:border-2 '>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>

        {navbar && (
          <div className='md:hidden flex flex-col absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75%] h-1/2 bg-white'>
            <ul className="flex flex-col justify-center items-center py-8">
              <li className="py-2">About</li>
              <li className="py-2">Services</li>
              <li className="py-2">Projects</li>
            </ul>

            <button className="py-2 px-4 rounded-full bg-yellow-400 w-[50%] mx-auto">Contact</button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

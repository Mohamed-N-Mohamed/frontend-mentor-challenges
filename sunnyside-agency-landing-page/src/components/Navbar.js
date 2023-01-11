import logo from "../images/logo.svg";
import icon from "../images/icon-hamburger.svg";
import mobileBG from "../images/mobile/image-header.jpg";
import DesktopBG from "../images/desktop/image-header.jpg";
import arrowDown from "../images/icon-arrow-down.svg";

const Navbar = () => {
  return (
    <>
      <nav className='navbar bg-image p-8 '>
        <div className='mobile-navbar md:hidden flex justify-between item-center'>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>

          <div className='icon'>
            <img src={icon} alt='icon' />
          </div>
        </div>

        <div className='hidden mobile-desktop md:flex md:justify-between md:items-start'>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>

          <div className='nav-links md:px-8'>
            <ul className="md:flex md:gap-8 md:text-white cursor-pointer">
              <li className="hover:border-2 ">About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import bgDesktop from "../images/bg-pattern-intro-desktop.svg";
import bgMobile from "../images/bg-pattern-intro-mobile.svg";
import logo from "../images/logo.svg";
import icon from "../images/icon-hamburger.svg";
import Buttons from "./Buttons";
import { data } from "../data/data";
import Menue from "./Menue";

const Header = () => {
  const [links, setLinks] = useState(data);
  const [open, setOpen] = useState(false);
  const [screen, setScreen] = useState(768);

  useEffect(() => {
    if (window.innerWidth > screen) {
      setOpen(true);
    }
  }, []);

  console.log(links);

  return (
    <header className='absolute p-5 flex items-center justify-between w-full'>
      <div>
        <img src={logo} alt='logo' />
      </div>

      {open && (
        <nav className='navbar md:flex md:justify-between'>
          <ul className=''>
            {links.map(({ id, title, links }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
          <Buttons />
        </nav>
      )}
      <Menue setOpen={setOpen} Isopen={open} />
    </header>
  );
};

export default Header;

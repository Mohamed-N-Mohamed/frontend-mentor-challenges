import { useState } from "react";
import bgDesktop from "../images/bg-pattern-intro-desktop.svg";
import bgMobile from "../images/bg-pattern-intro-mobile.svg";
import logo from "../images/logo.svg";
import icon from "../images/icon-hamburger.svg";
import Buttons from "./Buttons";
import { data } from "../data/data";

const Header = () => {
  const [links, setLinks] = useState(data);

  console.log(links);

  return (
    <header className='absolute p-5'>
      <div>
        <img src={logo} alt='logo' />
      </div>

      <nav>
        <ul>
          {links.map(({id, title, links}) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </nav>

      <Buttons />
    </header>
  );
};

export default Header;

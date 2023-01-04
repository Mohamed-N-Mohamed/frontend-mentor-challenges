import { useState } from "react";
import { data } from "../data/data";
import logo from "../images/logo.svg";

const Footer = () => {
  const [links, setLinks] = useState(data);
  return (
    <>
      <footer className='footer text-center md:text-left md:grid md:grid-cols-2 px-5 lg:py-10'>
        <div>
          <img src={logo} alt='' className='mx-auto pt-10 md:mx-0' />
        </div>

        <div className='md:grid md:grid-cols-2 lg:grid-cols-3'>
          {links.map(({ id, title, link }) => (
            <ul key={id}>
              <h4 className='mt-10 mb-5 text-lg'>{title}</h4>

              {link.map((link) => (
                <li key={link} className='py-3'>
                  {link}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;

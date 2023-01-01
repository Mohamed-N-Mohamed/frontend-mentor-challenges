import mobile from "./images/image-hero-mobile.png";
import desktop from "./images/image-hero-desktop.png";
import audiophile from "./images/client-audiophile.svg";
import databiz from "./images/client-databiz.svg";
import maker from "./images/client-maker.svg";
import meet from "./images/client-meet.svg";
import logo from "./images/logo.svg";
import chevronDown from "./images/icon-arrow-down.svg";
import chevronUp from "./images/icon-arrow-up.svg";
import menueOpen from "./images/icon-menu.svg";
import { useState } from "react";

function App() {
  const [click, setClick] = useState(false);

  const handleOnClick = () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("open");
  };
  return (
    <>
      <header className='p-5 flex items-center justify-between'>
        <div onClick={handleOnClick}>
          <img src={logo} alt='logo image' />
          <nav className='navbar'>
            <div>
              <button onClick={handleOnClick}>
                Features <img src={chevronDown} alt='' />
              </button>
            </div>

            <div>
              <button>
                Company <img src={chevronUp} alt='' />
              </button>
            </div>

            <div>
              <button>Careers</button>
            </div>

            <div>
              <button>About</button>
            </div>
          </nav>
        </div>

        <div className=''>
          <button>
            <img src={menueOpen} alt='' />
          </button>
        </div>

        <div className='hidden lg:block'>
          <button>login</button>
          <button>Signup</button>
        </div>
      </header>
      <section className='flex flex-col-reverse py-20 md:grid md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto'>
        <article className='text-center mt-10 md:mt-0 md:text-left px-5 xl:px-0'>
          <h1 className='font-bold text-4xl lg:text-6xl mb-5 xl:text-7xl'>
            Make remote work
          </h1>
          <p className='mb-5'>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar
          </p>
          <button className='bg-black rounded-lg shadow text-white font-bold hover:opacity-75 transition-all duration-150 pt-3 pb-2 px-6 cursor-pointer'>
            Learn More
          </button>

          <ul className='grid grid-cols-4 gap-1 mt-10 place-items-center md:place-items-start'>
            <li>
              <img src={databiz} alt='' className='w-16 md:w-24' />
            </li>
            <li>
              <img src={audiophile} alt='' className='w-16 md:w-24' />
            </li>
            <li>
              <img src={meet} alt='' className='w-16 md:w-24' />
            </li>
            <li>
              <img src={maker} alt='' className='w-16 md:w-24' />
            </li>
          </ul>
        </article>

        <article>
          <picture>
            <source media='(min-width: 768px)' srcSet={desktop} />
            <img src={mobile} alt='image' className='w-full' />
          </picture>
        </article>
      </section>
    </>
  );
}

export default App;

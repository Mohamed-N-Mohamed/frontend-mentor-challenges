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
import closeMenue from "./images/icon-close-menu.svg";
import todoList from "./images/icon-todo.svg";
import reminders from "./images/icon-reminders.svg";
import planning from "./images/icon-planning.svg";
import calander from "./images/icon-calendar.svg";
import { useState } from "react";

function App() {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const handleOnClick = () => {
    const navbar = document.querySelector(".navbar");
    const menueButton = document.querySelector(".menu-button");
    navbar.classList.toggle("open");

    if (navbar.classList.contains("open")) {
      menueButton.src = closeMenue;
    } else {
      menueButton.src = menueOpen;
    }
  };
  return (
    <>
      <header className='p-5 flex items-center justify-between'>
        <div
          onClick={handleOnClick}
          className='lg:flex lg:items-center lg:justify-start'
        >
          <img src={logo} alt='logo image' className='mr-5' />
          <nav className='navbar'>
            <div>
              <button
                className='flex items-center justify-center'
                onClick={() => setOpenFeatures(!openFeatures)}
              >
                Features{" "}
                {openFeatures ? (
                  <img src={chevronUp} alt='' className='ml-2' />
                ) : (
                  <img src={chevronDown} alt='' className='ml-2' />
                )}
              </button>
              {openFeatures && (
                <ul className='mt-2 ml-3 lg:ml-0 lg:p-3 shadow'>
                  <li className='flex items-center justify-start text-small mb-2'>
                    <img src={todoList} alt='' classsname='mr-2' />
                    Todo List
                  </li>
                  <li className='flex items-center justify-start text-small mb-2'>
                    <img src={calander} alt='' classsname='mr-2' />
                    Calander
                  </li>
                  <li className='flex items-center justify-start text-small mb-2'>
                    <img src={reminders} alt='' classsname='mr-2' />
                    Reminders
                  </li>
                  <li className='flex items-center justify-start text-small mb-2'>
                    <img src={planning} alt='' classsname='mr-2' />
                    Planning
                  </li>
                </ul>
              )}
            </div>

            <div>
              <button
                className='flex items-center justify-center'
                onClick={() => setOpenCompany(!openCompany)}
              >
                Company{" "}
                {openCompany ? (
                  <img src={chevronUp} alt='' className='ml-2' />
                ) : (
                  <img src={chevronDown} alt='' className='ml-2' />
                )}
              </button>

              {openCompany && (
                <ul className='mt-2 ml-3 lg:ml-0 lg:p-3 shadow'>
                  <li className='flex items-center justify-start text-small mb-2'>
                    History
                  </li>
                  <li className='flex items-center justify-start text-small mb-2'>
                    Out Team
                  </li>
                  <li className='flex items-center justify-start text-small mb-2'>
                    Bog
                  </li>
                </ul>
              )}
            </div>

            <div className='mb-2 lg:mb-0'>
              <button>Careers</button>
            </div>

            <div>
              <button>About</button>
            </div>
          </nav>
        </div>

        <div className='lg:hidden'>
          <button>
            <img src={menueOpen} alt='' className='menu-button' />
          </button>
        </div>

        <div className='hidden lg:block'>
          <button className="mr-2 opacity-75">login</button>
          <button className="border-2 border-black opacity-75 px-6 py-2 rounded-2xl">Register</button>
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

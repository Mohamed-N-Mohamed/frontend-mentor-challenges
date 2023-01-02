import mobile from "./images/hero-mobile.jpg";
import desktop from "./images/hero-desktop.jpg";
import logo from "./images/logo.svg";
import arrow from "./images/icon-arrow.svg";
import error from "./images/icon-error.svg";

function App() {
  return (
    <div className='App relative'>
      <div className='logo-desktop-img absolute top-20 left-6 bottom-0 px-4 hidden'>
        <img src={logo} alt='logo' className='' />
      </div>

      <div className='logo-img'>
        <img src={logo} alt='logo' className='mt-4 ml-8 pb-8 md:hidden' />
      </div>
      <section className='main-section flex flex-col-reverse md:flex-row w-full md:relative md:items-center md:justify-cente'>
        <article className='main md:w-9/12 flex-[50%] '>
          <div className='content text-center md:text-left'>
            <h1 className='mb-8 text-3xl md:text-6xl md:w-[500px] '>
              <span className="text-Desaturated-Red">We're</span> Coming Soon
            </h1>

            {/* //md:grid md:grid-cols-2 md:place-items-center */}

            <p className='text-center px-4 pb-2 text-Desaturated-Red leading-6 md:text-left md:w-[500px]'>
              Hello fellow shoppers! We're currently building out new fashion
              store. Add your email below to stay up-to-date with announcements
              and launch deals
            </p>

            <form className='form mt-7 relative md:w-[500px]'>
              <div>
                <input
                  type='email'
                  placeholder='Email Address'
                  className='border border-solid border-Desaturated-Red py-2 px-4 rounded-3xl  w-9/12 text-Desaturated-Red placeholder:text-Desaturated-Red'
                />
                <label htmlFor='email'>
                  <img
                    src={error}
                    alt=''
                    className='absolute top-2 right-[8rem] md:right-[13rem] hidden'
                  />
                </label>

                <button className='button absolute top-0 right-12 py-3 px-7 border-none rounded-3xl pointer md:right-[120px]'>
                  <img src={arrow} alt='' />
                </button>

                <p className='error text-Soft-Red text-xs py-4 text-left ml-14 md:ml-4 hidden'>
                  Place provide a valid email
                </p>
              </div>
            </form>
          </div>
        </article>

        <article className='md:flex-[50%]'>
          <picture>
            <source media='(min-width: 768px)' srcSet={desktop} />
            <img
              src={mobile}
              alt='Background image'
              className='w-full mt-2 mb-2 md:mt-0 md:mb-0'
            />
          </picture>
        </article>
      </section>
    </div>
  );
}

export default App;

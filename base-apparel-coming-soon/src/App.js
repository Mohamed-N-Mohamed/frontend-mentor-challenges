import mobile from "./images/hero-mobile.jpg";
import desktop from "./images/hero-desktop.jpg";
import logo from "./images/logo.svg";

function App() {
  return (
    <div className='App'>
      <div className='logo-img'>
        <img src={logo} alt='logo' className='mt-4 ml-8 pb-8' />
      </div>
      <section className='flex flex-col-reverse md:grid md:grid-cols-2 md:place-items-center md:mx-auto w-full md:relative max-w-4xl'>
        <article className='main md:w-9/12'>
          <div className='content text-center md:text-left'>
            <h1 className="mb-8 text-4xl">
              <span>We're</span>Coming Soon
            </h1>

            <p>
              Hello fellow shoppers! We're currently building out new fashion
              store. Add your email below to stay up-to-date with announcements
              and launch deals
            </p>

            <form>
              <input type='email' placeholder='Email Address' />
            </form>
          </div>
        </article>

        <article className='md:'>
          <picture>
            <source media='(min-width: 768px)' srcSet={desktop} />
            <img
              src={mobile}
              alt='Background image'
              className='w-full mt-2 mb-2'
            />
          </picture>
        </article>
      </section>
    </div>
  );
}

export default App;

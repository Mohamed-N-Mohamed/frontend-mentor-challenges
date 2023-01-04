import desktop from "../images/illustration-editor-desktop.svg";
import mobile from "../images/illustration-editor-mobile.svg";

const Design = () => {
  return (
    <div>
      <section className='py-20 px-5'>
        <h2 className='text-center text-3xl md:text-4xl lg:text-5xl'>
          Desinged for the future
        </h2>
        <div className='text-center flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 md:items-center md:text-left md:max-w-7xl md:mx-auto'>
          <div className='mt-10'>
            <h3 className='text-2xl mt-10 mb-5'>Designed for the future</h3>
            <p>
              Introducing an extensible editor Blogr features an exceedingly i
              className=""ntuitive interface which lets you focus on one thing:
              creating content. The editor supports management of multiple blogs
              and allows easy manipulation of embeds such as images, videos, and
              Markdown. Extensibility with plugins and themes provide easy ways
              to add functionality or changetext-2xl mt-10 mb-5 the looks of a
              blog.
            </p>

            <h3 className='text-2xl mt-10 mb-5'>Robust content management </h3>

            <p>
              enables users to easily move through posts. Increase the usability
              of your blog by adding customized categories, sections, format, or
              flow. With this functionality, you’re in full control.
            </p>
          </div>

          <div>
            <picture className=''>
              <source media='(min-width: 768px)' srcSet={desktop} />
              <img src={mobile} alt='' className='w-full mx-auto block mt-10' />
            </picture>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;

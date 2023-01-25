import Design from "./components/Design";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Transform from "./components/Transform";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App '>
      <Navbar />
      <Hero />
      <Transform />
      {/*Design page needs to be fixed */}
      {/* <Design /> */}
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

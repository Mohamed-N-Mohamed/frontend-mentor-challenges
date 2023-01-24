import Design from "./components/Design";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Transform from "./components/Transform";

function App() {
  return (
    <div className='App '>
      <Navbar />
      <Hero />
      <Transform />
      {/*Design page needs to be fixed */}
      {/* <Design /> */}
      <Testimonials />
    </div>
  );
}

export default App;

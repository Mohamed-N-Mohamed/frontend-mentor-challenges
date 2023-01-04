import Art from "./components/Art";
import Design from "./components/Design";
import Footer from "./components/Footer";
import Free from "./components/Free";
import Header from "./components/Header";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div className='App'>
      <Header />
      <Showcase />
      <Design />
      <Art />
      <Free />
      <Footer />
    </div>
  );
}

export default App;

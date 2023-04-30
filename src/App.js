import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Skills,
  Works,
} from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary wrapper relative min-h-screen w-full bg-grey blurredBg">
        <div className="bg-hero-pattern  bg-center">
          <Navbar />
          <Hero />
        <About />
        <Experience />
        <Skills />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

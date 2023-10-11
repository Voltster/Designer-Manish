import "./App.css";
import Navbar from './component/Navbar';
import MouseScroll from './component/MouseScroll';
import Hero from "./Page/Hero"
import About from "./Page/About"
import Skill from './component/Skill';
import Service from './Page/Service';
import Projects from './Page/Projects';
import Contact from './Page/Contact';
import Footer from './Page/Footer';
import Cursor from "./component/Cursor";



function App() {
  return (<>
    <div className="relative w-full max-w-max h-screen min-h-screen grid-Bg overflow-x-hidden">
        <Cursor />
        {/* Navigation Bar */}

        <Navbar />

        <div className="relative h-[100vh] w-screen snap-center " id="home">
          {/* Main Section */}
          <Hero />

          {/* Mouse Scroll */}
          <div className="absolute flex  sm:hidden  bottom-5 w-full lg:flex justify-center items-center">
            <MouseScroll />
          </div>
        </div>

        <About />

        <Skill />

        <Service />

        <Projects />

        <Contact />

        <Footer />
        
   
    </div>
  </>
  );
}

export default App;

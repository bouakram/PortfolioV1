import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Nav from "./components/nav/Nav";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Stack from "./components/stak/Stack";
import Project from "./components/projecte/Project";
import Contact from "./components/contact/Contact";

function App() {
  const [isActive, setIsActive] = useState(false)
  useEffect( () => {
        (
          async () => {
              const LocomotiveScroll = (await import('locomotive-scroll')).default
              const locomotiveScroll = new LocomotiveScroll();
          }
        )()
      }, [])
  return (
    <div className="App">
        <Navbar isActive={isActive} setIsActive={setIsActive}/>
        <AnimatePresence mode="wait">
          {isActive && <Nav isActive={isActive} setIsActive={setIsActive}/>}
        </AnimatePresence>
        <Hero />
        <About />
        <Stack />
        <Project />
        <Contact />
    </div>
  );
}

export default App;

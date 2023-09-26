import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Nav from "./components/nav/Nav";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Stack from "./components/stak/Stack";

function App() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="App">
        <Navbar isActive={isActive} setIsActive={setIsActive}/>
        <AnimatePresence mode="wait">
          {isActive && <Nav />}
        </AnimatePresence>
        <Hero />
        <About />
        <Stack />
    </div>
  );
}

export default App;

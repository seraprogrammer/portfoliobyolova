import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills";

import "./style.css";
export default function App() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
    </>
  );
}

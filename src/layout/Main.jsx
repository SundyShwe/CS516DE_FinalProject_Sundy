import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
function Main() {
  return (
    <>
      <main id="main">
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default Main;

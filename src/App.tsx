import { useState } from "react";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Projects } from "./components/projects/projects";

function App() {
  const about = {
    title: "",

    className: "about",

    text: "",

    list: "",
  };

  return (
    <>
      <Header />

        <div className="first_container container">
          <div className="content">
            <Home />
          </div>
        </div>

        <div className="container">
          <div className="content">
            <About />
          </div>
        </div>

        <div className="container">
          <div className="content">
            <Projects />
          </div>
        </div>

        <div className="container">
          <div className="content">
            <Contact />
          </div>
        </div>

        <Footer />
    </>
  );
}

export default App;

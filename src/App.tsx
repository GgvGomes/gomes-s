import { useState } from "react";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Projects } from "./components/projects/projects";

export const BaseUrl =
  window.location.href.indexOf("localhost") != -1
    ? "./src/assets/"
    : "https://github.com/GgvGomes/gomes-s/blob/master/src/assets/";

export const localHost =
  window.location.href.indexOf("localhost") != -1 ? true : false;
  
function App() {
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

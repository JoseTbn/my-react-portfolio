import React, { useState, useRef, useEffect } from "react";
import "./App.scss";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Topbar from "./Components/Topbar/Topbar";
import Works from "./Works/Works";
import Menu from "./Components/Menu/Menu";
import { gsap, Power3 } from "gsap";

function App() {
  let app = useRef(null);
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();

  useEffect(() => {
    gsap.to(app, { duration: 0.1, scss: { visibility: "visible" } });
  });

  const [hamburgerExpand, setHamburgerExpand] = useState(false);

  return (
    <div className="App" ref={(el) => (app = el)}>
      <Topbar
        tl={tl}
        ease={ease}
        hamburgerExpand={hamburgerExpand}
        setHamburgerExpand={setHamburgerExpand}
      />
      <Menu
        hamburgerExpand={hamburgerExpand}
        setHamburgerExpand={setHamburgerExpand}
      />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;

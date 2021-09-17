import React from "react";
import "./menu.scss";

export default function Menu({ hamburgerExpand, setHamburgerExpand }) {
  return (
    <div className={"menu " + (hamburgerExpand && "active")}>
      <ul>
        <li onClick={() => setHamburgerExpand(false)}>
          <a href="#Intro">Intro</a>
        </li>
        <li onClick={() => setHamburgerExpand(false)}>
          <a href="#Portfolio">Portfolio</a>
        </li>
      
        <li onClick={() => setHamburgerExpand(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

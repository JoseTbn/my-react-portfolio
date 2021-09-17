import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Javascritp", "React", "NodeJS", "MongoDB", "Express"],
    });
  }, []); // empty array for useEffect to work one time
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets\img\jose.png" alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Becode</h2>
          <h1>Full Satck Dev Trainee</h1>
          <h3>
            Working on <span ref={textRef}></span>{" "}
          </h3>
        </div>

        <a href="#Portfolio">
          <ExpandMoreTwoToneIcon />
        </a>
      </div>
    </div>
  );
}

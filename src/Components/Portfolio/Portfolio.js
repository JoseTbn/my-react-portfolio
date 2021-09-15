import React from "react";
import "./Portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web app</li>
        <li> Mobile app</li>
        <li>Design</li>
        <li>Security</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="assets\img\dashbordappscreen.png"
            alt=""
            onClick={"https://hopeful-newton-ed3c1f.netlify.app/"}
          />
          <h3>Dashbord App</h3>
        </div>
      </div>
    </div>
  );
}

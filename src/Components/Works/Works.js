import React from "react";
import "./Works.scss";

export default function Works() {
  return (
    <div className="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left"></div>
            <div className="right">
              <div className="rightContainer"></div>
            </div>
          </div>
        </div>
        <div className="leftContainer">
          <div className="imgContainer">
            <img src="assets" alt="" />
          </div>
          <h2>Title</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed at
            delectus eaque repudiandae eius amet esse facere natus in
            temporibus, ut sint tenetur, inventore qui non, dolore facilis.
            Veritatis, possimus!
          </p>
          <span>Projects</span>
        </div>
      </div>
    </div>
  );
}

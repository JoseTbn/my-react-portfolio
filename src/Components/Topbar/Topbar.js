import React from "react";
import "./Topbar.scss";
import MailIcon from "@material-ui/icons/Mail";
import PersonIcon from "@material-ui/icons/Person";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Jose Batumeni
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>0487076163</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>Btnjose@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

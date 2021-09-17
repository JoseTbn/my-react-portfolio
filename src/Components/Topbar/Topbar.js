import React, {useRef, useEffect}  from "react";
import "./Topbar.scss";
import MailIcon from "@material-ui/icons/Mail";
import PersonIcon from "@material-ui/icons/Person";
import { Timeline } from "gsap/gsap-core";
import gsap from 'gsap'


export default function Topbar({hamburgerExpand , setHamburgerExpand,},{Timeline,ease}) {
  
  let tl = new gsap.timeline()
  let logo = useRef(null)
  let numb = useRef(null)
  let mail = useRef(null)

  useEffect(() => {
    tl.to(logo, 1,{
opacity:0,
y: '100'
    });
    tl.to([numb, mail],2,{
     opacity:0,
     y: -200,
     stagger:{
       amount: .4
     },
     ease:ease 
    })
  })

  
  
   return (
    // <div className={"topbar " + hamburgerExpand && "active"}>
    //   <div className="wrapper">
    //     <div className="left">
    //       <a href="#intro" className="logo">
    //         Jose Batumeni
    //       </a>
    //       <div className="itemContainer">
    //         <PersonIcon className="icon" />
    //         <span>0487076163</span>
    //       </div>
    //       <div className="itemContainer">
    //         <MailIcon className="icon" />
    //         <span>Btnjose@gmail.com</span>
    //       </div>
    //     </div>
    //     <div className="right">
    //       <div className="hamburger" onClick={() =>hamburgerExpand(!hamburgerExpand)}>
    //         <span className="line1"></span>
    //         <span className="line2"></span>
    //         <span className="line3"></span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
<div className={"topbar " + (hamburgerExpand && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo" ref = {el => logo =el } >
            Jose Batumeni
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span className="numb"  ref = {el => numb =el }>+32487076163</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span className="mail"  ref = {el => mail =el }>btnjose@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setHamburgerExpand(!hamburgerExpand)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
</div>

  );
}

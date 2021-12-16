import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";
import { init } from "ityped";

export default function Intro() {
  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed: 60,
  //     strings: ["Javascritp", "React", "NodeJS", "MongoDB", "Express"],
  //   });
  // }, []); // empty array for useEffect to work one time
  return (
    // <div className="intro" id="intro">
    //   <div className="left">
    //     <div className="imgContainer">
    //       <img src="assets\img\jose.png" alt="" />
    //     </div>
    //   </div>

    //   <div className="right">
    //     <div className="wrapper">
    //       <h2>Becode</h2>
    //       <h1>Full Satck Dev Trainee</h1>
    //       <h3>
    //         Working on <span ref={textRef}></span>{" "}
    //       </h3>
    //     </div>

    //     <a href="#Portfolio">
    //       <ExpandMoreTwoToneIcon />
    //     </a>
    //   </div>
    // </div>


<> 

<div>  

    <nav className='z-header flex items-center max-w-container mx-auto w-full h-60 sm:h-90 px-gutter text-14 font-title transition-colors duration-400 text-black absolute outline-white-20"'>
    <div className="px-10 mr-auto">
      <a href="">logo</a>
    </div>
    <ul className=" hidden md:flex h-full ">
      <li className="ml-60 relative flex items-center" style={{ opacity: "1" }}>
        <a href="/services" className="transition-colors hover:text-purple">My Services</a>
      </li>
      <li className="ml-60 relative flex items-center" style={{ opacity: "1" }}>
        <a href="/services" className="transition-colors hover:text-purple">My Work</a>
      </li>
      <li className="ml-60 relative flex items-center" style={{ opacity: "1" }}>
        <a href="/services" className="transition-colors hover:text-purple">Our Services</a>
      </li>
    </ul>
  </nav>

</div>

<div className="pointer-events-none">
  <div className="z-cursor fixed no-hover:hidden top-0 left-0 w-15 h-15 -ml-9 -mt-10 rounded-full transition-opacity duration-200" style={{ transForm: " translateX(1820px) translateY(394px)" }}>
    <div className="w-full h-full rounded-full bg-purple">
    </div>
    <div className="absolute left-1/2 top-1/2">
      <div className="w-120 pb-120 -ml-60 -my-60 bg-purple rounded-full absolute" style={{ transForm: "scale(0.1)" }}>
      </div>
    </div>
  </div>
</div>
<div className="bg-black min-h-screen flex text-white px-gutter overflow-hidden relative">

  <div className="absolute inset-0">
    <video muted="muted" loop="loop" autoPlay="autoPlay" playsinline="" className="absolute h-full w-full object-cover" src="https://player.vimeo.com/external/568369174.hd.mp4?s=18c9c5f57d9401c74a2a538f0a39333ca762e3dc&amp;profile_id=175">
    </video> <div className="absolute inset-0 bg-black" style={{ opacity: '0' }}>

    </div>

  </div> <div className="relative max-w-container mx-auto flex flex-col">
    <div data-mouse-text="EXPLORE" className="flex-1 cursor-none h-full">

    </div>

    <div data-mouse-text="EXPLORE" className="flex max-w-max-content -mx-gutter relative cursor-none opacity-80 hover:opacity-100 transition-opacity duration-200">
      <div data-animate="" style={{ opacity: " 1", transForm: "translateY(0em)" }}>
        <div className="px-gutter font-heading uppercase whitespace-nowrap" style={{ fontSize: "6vw", transForm: "translateZ(0px) translateX(76.8057%)" }}>
          Jojo Frontend Adventures
        </div>
        <div className="absolute inset-0  right-auto px-gutter font-heading uppercase whitespace-nowrap" style={{ fontSize: "6vw", transForm: " translateZ(0px) translateX(-23.1943%)" }}>
          Jojo Frontend Adventures
        </div>
      </div>
    </div>
    <div className="flex-1 w-cols-12 md:w-cols-4-gap lg:w-cols-4 sm:text-20 flex flex-col">
      <div data-animate="" className="mt-auto pb-50 sm:max-w-23em cs-description" style={{ opacity: "1", transForm: "translate(0em)" }}>
        <p>We provide market leading, end-to-end services in commercial aerial, video, photography and CGI to the
          <a href="/sectors/commercial-real-estate">Commercial Real Estate</a>, <a href="/sectors/construction">Construction</a>
          and
          <a href="/sectors/lifestyle">Lifestyle</a> sectors.</p>
      </div>
      <div className="cs-arrow text-white hover:text-purple transition-colors mb-50" data-animate="" style={{ opacity: "1", transForm: "  translateY(0em)" }}>
        <svg width="14" viewBox="0 0 14 36.2" fill="currentColor" style={{ transForm: "translateY(0px);" }}>
          <clipPath id="uid-12-middle">
            <polygon points="0,0    14,0    14,0.00006871526175194669 0,0.00006871526175194669 ">
            </polygon>
          </clipPath> <clipPath id="uid-12-left">
            <polygon points="0,26.6 14,26.6 14,26.6 0,26.6 ">
            </polygon>
          </clipPath> <clipPath id="uid-12-right">
            <polygon points="0,26.6 14,26.6 14,26.6 0,26.6 ">
            </polygon>
          </clipPath> <polygon clipPath="url(#uid-12-middle)" points="8,35.2 7,36.2 6,35.2 6,0 8,0">
          </polygon>
          <polygon clipPath="url(#uid-12-left)" points="0,26.6 0,29.4 7,36.2 7,33.6">
          </polygon>
          <polygon clipPath="url(#uid-12-right)" points="14,26.6 14,29.4 7,36.2 7,33.6">
          </polygon>
        </svg>
      </div>
    </div>
  </div>
</div>







</>




  );
}

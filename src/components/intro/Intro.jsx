import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/maecq.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h3>Hi There, I'm</h3>
          <h2>Mae Quitane</h2>
          <h3>
            2021 Graduate Student <span ref={textRef}></span>
          </h3>            
            <span>Recent gradute of FULL STACK DEVELOPER Program of Robertson College.</span>
            <span>Looking for a perfect venue to have a career growth.</span>
            <span>I am Motivated and Hardworking, creative and can work in minumum supervision.</span>          
            <span>When Im not at work I'm busy playing or practicing Violin or you can find me in the kitchen baking. </span>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
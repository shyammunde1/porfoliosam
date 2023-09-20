import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";
import namelogo from "../assets/logo-s.png";
import AnimatedLetters from "./AnimatedLetters1";

const Home = ({ ratio }) => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["h", "y", "a", "m"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];
 

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);

    // Return a cleanup function to clear the timer when the component unmounts
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div id="home">
      <section>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <img src={namelogo} alt="" />             
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <Typewriter
            options={{
              strings: ["ReactJs", "JavaScript", "HTML5","CSS3"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:official.shyammunde1@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          
        </div>
      </section>
      <section>
        <img src={me} alt="Abhishek" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;

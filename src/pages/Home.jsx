import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Experience from "../components/Experience/Experience";
import Skill from "../components/Skill/Skill";
import Project from "../components/Project/Project";
import Other from "../components/Other/Other";

const Home = () => {
  const [scroll, setScroll] = useState(0);
  const [navbarPosition, setNavbarPosition] = useState(0);
  const navRef = useRef([]);

  useEffect(() => {
    const offsetTop = [];
    navRef.current.forEach((item) => {
      offsetTop.push(item.offsetTop);
    });

    const offset = 100;

    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      offsetTop.forEach((item, index) => {
        if (index == offsetTop.length - 1) {
          if (window.scrollY >= item) {
            setNavbarPosition(index);
            return;
          }
        }

        if (
          window.scrollY >= item - offset &&
          window.scrollY < offsetTop[index + 1] + offset
        ) {
          setNavbarPosition(index);
        }
      });
    });
  }, [navRef]);

  return (
    <>
      <Navbar navbarPosition={navbarPosition} />
      <Jumbotron ref={(el) => (navRef.current[0] = el)} />
      <About ref={(el) => (navRef.current[1] = el)} />
      <Experience ref={(el) => (navRef.current[2] = el)} />
      <Skill ref={(el) => (navRef.current[3] = el)} />
      <Project ref={(el) => (navRef.current[4] = el)} />
      <Other ref={(el) => (navRef.current[5] = el)} />
      <Footer />
    </>
  );
};

export default Home;

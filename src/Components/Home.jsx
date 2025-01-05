import React, { useEffect, useRef } from 'react';
import HeroIMG from "../assets/HeroIMG.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import Typed from "typed.js"
import { Link } from 'react-scroll';
const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front Developer","Web Developer","Full Stack Developer","Mern Stack Developer"], 
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
     name="home"
     className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">

    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
    <div className="flex flex-col justify-center h-full px-5">
    <h2 className="text-4xl sm:text--7xl font-bold text-white">I'm a <span ref={el}></span></h2>
    <p className="text-gray-300 py-4 max-w-md">
    I'm <b>Mayur Murarka.</b>
    Currently, I love to work on Full Stack application using technologies like
    React, Tailwind, Bootstrap, Node.js, Express.js, MongoDb,etc...
    </p>

    <div>
    <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
    Portfolio
    <span className="group-hover:rotate-90 duration-300">
    <MdOutlineKeyboardArrowRight size={25}
    className="ml-1"/>
    </span>
    </Link>
    </div>
    </div>
    <div>
      <img src={HeroIMG} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
    </div>
    </div>
  </div>
    
  )
}

export default Home;

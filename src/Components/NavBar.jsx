import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'experience',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];

  const handleSetActive = (to) => {
    setCurrentSection(to);
  };

  return (
    <div className="w-full h-20 flex justify-between items-center px-4 bg-gray-900 text-white">
      <div>
        <h1 className="text-3xl font-bold">My Portfolio</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200">
            <Link to={link} smooth duration={500} onSetActive={handleSetActive}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden z-10">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-900 text-white">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link to={link} smooth duration={500} onClick={() => setNav(false)} onSetActive={handleSetActive}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {currentSection && (
        <div className="fixed bottom-4 right-4 bg-gray-700 text-white p-2 rounded-md">
          <p>Current Section: {currentSection}</p>
        </div>
      )}
    </div>
  );
};

export default NavBar;
import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import Redux from "../assets/Redux.png";
import MySQL from "../assets/MySQL.png";
import expressjs from "../assets/expressjs.png";
import tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/Bootstrap.png";
import mongodb from "../assets/mongodb.png";
import nextjs from "../assets/nextjs.jpg";
import node from "../assets/node.png";
import PowerBI from "../assets/PowerBI.png";
import Excel from "../assets/Excel.png";
import Python from "../assets/Python.png";
import Pandas from "../assets/Pandas.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: Redux,
      title: "Redux",
      style: "shadow-violet-500",
    },
    {
      id: 7,
      src: Bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-400",
    },
    {
      id: 8,
      src: expressjs,
      title: "Express js",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: MySQL,
      title: "MySql",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 11,
      src: nextjs,
      title: "NextJs",
      style: "shadow-white",
    },
    {
      id: 12,
      src: mongodb,
      title: "MongoDb",
      style: "shadow-green-500",
    },
    {
      id: 13,
      src: PowerBI,
      title: "Power BI",
      style: "shadow-yellow-500",
    },
    {
      id: 14,
      src: Excel,
      title: "Excel",
      style: "shadow-green-500",
    },
    {
      id: 15,
      src: Python,
      title: "Python",
      style: "shadow-blue-500",
    }, 
    {
      id: 16,
      src: Pandas,
      title: "Pandas",
      style: "shadow-violet-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white min-h-screen py-16"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-4">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-3 rounded-lg ${style} flex flex-col items-center`}
            >
              <img src={src} alt={title} className="w-16 h-16 object-contain" />
              <p className="mt-3">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
import React from "react";
import Ola_Booking from "../assets/portfolio/Ola_Booking.png";
import MayurBlog_App from "../assets/portfolio/MayurBlog_App.png";
import Mask from "../assets/portfolio/Malicious_URL_Detection.png";
import Electronic_Shop_Sales_Analysis from "../assets/portfolio/Electronic_Shop_Sales_Analysis.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: Mask,
      href: "https://github.com/Mayur-Murarka/Mask",
      alt: "Malicious_URL_Detection",
    },
    {
      id: 2,
      src: Ola_Booking,
      href: "https://app.powerbi.com/links/tZyV0oeQic?ctid=&pbi_source=linkShare",
      alt: "Ola_Booking",
    },
    {
      id: 3,
      src: MayurBlog_App,
      href: "https://github.com/Mayur-Murarka/Mayurblog-app",
      alt: "MayurBlog_App",
    },
    {
      id: 4,
      src: Electronic_Shop_Sales_Analysis,
      href: "https://github.com/Mayur-Murarka/Electronic-Shop-Sales-Analysis",
      alt: "Electronic_Shop_Sales_Analysis",
    } 
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen py-16"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolios.map(({ id, src, href, alt }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover rounded-t-md transition duration-300 hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-center p-4 mt-auto">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 px-3 bg-transparent border border-gray-500 rounded-md hover:bg-gray-700 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
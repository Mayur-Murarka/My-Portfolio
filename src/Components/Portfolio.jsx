import React from "react";
import Baatacheet from "../assets/portfolio/Baatacheet.png";
import MayurBlog_App from "../assets/portfolio/MayurBlog_App.png";
import Mask from "../assets/portfolio/Malicious_URL_Detection.png";

const Portfolio = () => {
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
      href: "https://app.powerbi.com/links/tZyV0oeQic?ctid=7f2abf9f-2d23-493d-9abc-7a8a91780dee&pbi_source=linkShare",
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
      src: Electronic-Shop-Sales-Analysis,
      href: "https://github.com/Mayur-Murarka/Electronic-Shop-Sales-Analysis",
      alt: "Electronic-Shop-Sales-Analysis",
    } 
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen p-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, alt }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={alt}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={href}
                  className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
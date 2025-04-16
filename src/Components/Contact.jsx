import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 sm:p-6 text-white"
    >
      <div className="max-w-screen-lg mx-auto py-8 md:py-12 px-4">
        <div className="pb-4 md:pb-8">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-4 md:py-6">Get in touch with me</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="flex justify-center items-start w-full md:w-1/2">
            <form
              action="https://getform.io/f/eapwwgvb"
              method="POST"
              className="flex flex-col w-full"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="6"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              ></textarea>

              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-6 md:my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Let's talk
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/2 flex flex-col justify-start items-start">
            
            <div className="space-y-4 mt-4">
              <div className="flex items-center space-x-3">
                <HiOutlineMail className="text-xl text-cyan-500" />
                <a 
                  href="mailto:mayurmurarkal@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  mayurmurarka1@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-xl text-cyan-500" />
                <a 
                  href="tel:+919588632229" 
                  className="text-gray-300 hover:text-white"
                >
                  +91 95886 32229
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaLinkedin className="text-xl text-cyan-500" />
                <a 
                  href="https://www.linkedin.com/in/mayur-murarka-1787e3283" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  LinkedIn Profile
                </a>
              </div>
                  
              <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-700">
                <p className="text-lg font-medium mb-2">Based in:</p>
                <p className="text-gray-300">Shegaon, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
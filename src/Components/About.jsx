import React from 'react'

const About = () => {
  return (
    <div name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-10 mb-4">
        Hi! I'm <b>Mayur Murarka.</b>
        <br/>
        21 Years Old from Shegaon( Maharashtra ). I currently live in Amravati - Pursuing my Final year as an Computer Science Engineer from P.R.Pote Patil College of Engineering and Management, Amravati. Currently working as a freelancer . I am professionally trained as a Web Developer and Programmer. Also trying to keep hand-on programming from past 4 years and practicing Web Development from past 2 years.
        </p>
        <br />
        <p className="text-xl">
        I am a strong believer in writing clean, maintainable, and well-documented code, and I always strive to deliver high-quality, user-friendly solutions. I am a team player and enjoy collaborating with other developers to solve complex problems and deliver value to customers.
        </p>
      </div>
    </div>
  )
}

export default About;

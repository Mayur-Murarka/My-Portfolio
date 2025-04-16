import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-12 md:py-16"
    >
      <div className="max-w-screen-lg px-4 sm:px-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 md:pb-8">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="mt-4 md:mt-8 space-y-4 md:space-y-6">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Hey there! I'm <b>Mayur Murarka</b>, a passionate and curious software developer from Shegaon, Maharashtra. 
            I'm currently completing my <b>B.E. in Computer Science</b> from P R Pote Patil College of Engineering and Management. 
            I specialize in building interactive web applications and transforming data into visual stories.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            My toolkit includes technologies like <b>React, Next.js, Node.js, MongoDB, Express.js</b>, and design frameworks like <b>Tailwind CSS, Bootstrap</b>. 
            I also love working on data analytics using <b>Power BI, SQL, Pandas, Excel and Python</b>. Whether I’m coding a blog platform or visualizing Ola ride trends, 
            I focus on writing clean, scalable code and delivering value through thoughtful design.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            I’ve interned as a <b>Data Analyst</b> and <b>Mern Stack Developer</b>, and I’m always up for solving new challenges or collaborating on exciting ideas. 
            I believe in continuous learning, strong teamwork, and building solutions that make an impact.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            When I'm not building something cool, you’ll find me exploring new tech trends, sketching out project ideas, or polishing dashboards that tell powerful stories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
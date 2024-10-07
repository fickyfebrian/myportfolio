import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPhp, FaLaravel, FaGit, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-6xl text-orange" />, label: "HTML5" },
  { icon: <FaCss3Alt className="text-6xl text-blue" />, label: "CSS3" },
  { icon: <FaJsSquare className="text-6xl text-yellow" />, label: "JavaScript" },
  { icon: <FaReact className="text-6xl text-blue2" />, label: "React.js" },
  { icon: <FaPhp className="text-6xl text-indigo" />, label: "PHP" },
  { icon: <FaLaravel className="text-6xl text-orange" />, label: "Laravel" },
  { icon: <SiTailwindcss className="text-6xl text-blue2" />, label: "Tailwind" },
  { icon: <FaGitAlt className="text-6xl text-orange" />, label: "Git" },

];

const About = () => (
  <section id="about" className="mt-20 max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20  ">
    {/* Section Title */}
    <h2 className="text-4xl font-bold text-center font-montserrat">About Me</h2>
    <span className="block h-2 w-24 bg-orange mx-auto rounded-full my-6" />
    <p className="text-xl text-center mt-4 mb-12 font-roboto text-black">
      In this section, you'll find more details about my background, professional experience, and technical skills in web development and technology.
    </p>

    {/* Grid Layout */}
    <div className="grid md:grid-cols-2 gap-10">
      {/* Left Section */}
      <div>
        <h3 className="text-3xl font-semibold mb-4 font-montserrat">Get to know me!</h3>
        <p className="text-xl text-justify text-black mb-6 font-roboto">
          I am a 5th-semester student majoring in Informatics Engineering at Universitas Sangga Buana YPKP Bandung. I'm passionate about front-end development and proficient in HTML, CSS, JavaScript, and React.js. I've worked on a team project called SIM-Skripsi and have experience with PHP and Laravel. I'm eager to develop my skills through work opportunities and have a React Developer certificate from Dicoding.
        </p>
        <button
          onClick={() => (window.location.href = "#contact")}
          className="bg-orange text-white font-roboto px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition duration-300"
        >
          Contact
        </button>
      </div>

      {/* Right Section - Skills */}
      <div>
        <h3 className="text-3xl font-semibold mb-4 font-montserrat">My Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {skills.map(({ icon, label }) => (
            <div
              key={label}
              className="justify-center items-center rounded-lg py-6 px-14 text-center hover:scale-125 hover:-rotate-12 transition duration-300"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;

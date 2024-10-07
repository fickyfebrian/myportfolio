import React from "react";
import qaycoffee from "../../../public/assets/project/qaycoffee3.png";
const projectsData = [
  {
    id: 1,
    image: "../../../public/assets/project/qaycoffee3.png",
    title: "Qaycoffee",
    description:
      "The QayCoffee website was developed as a personal project with the primary goal of enhancing my skills and familiarizing myself with modern web development tools, specifically ReactJS, Vite, and Tailwind CSS. Throughout this project, I aimed to create a clean, responsive, and user-friendly interface that showcases various coffee products.",
    link: "https://qaycoffee.netlify.app/",
  },
  {
    id: 2,
    image: "../../../public/assets/project/qayburger.png",
    title: "Qayemi Burger",
    description:
      "Qayemi Burger is a landing page website project for a fictional burger restaurant. The aim of this project is to create an engaging visual experience for users while showcasing important information about the products and services offered by Qay Burger. The website is designed to be responsive and interactive across various devices",
    link: "https://qayburger.netlify.app/",
  },
  {
    id: 3,
    image: "../../../public/assets/project/paradise-view.png",
    title: "Paradise View",
    description:
      "The Paradise View project is a personal endeavor where I focused on slicing a web design specifically for desktop view, inspired by a layout created in Figma. Utilizing React, Vite, and Tailwind CSS, my goal was to translate the design into a fully functional and visually appealing website.",
    link: "https://paradise-view.netlify.app/",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="mt-20 max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold font-montserrat text-center">
          Personal Projects
        </h2>
        <span className="block h-2 w-24 bg-orange mx-auto rounded-full my-6"></span>
        <p className="text-xl text-center mt-4 mb-12 font-roboto text-black">
          A collection of my personal projects that showcase my skills and
          passion for front-end development.
        </p>

        <div className="space-y-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-white md:flex-row rounded-lg overflow-hidden"
            >
              {/* Left Grid: Large Image */}
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover px-2 py-2 rounded-xl"
                />
              </div>

              {/* Right Grid: Title, Description, and Button */}
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold font-montserrat mb-4">
                  {project.title}
                </h3>
                <p className="text-xl mb-6 font-roboto">{project.description}</p>
                <a
                target="_blank"
                  href={project.link}
                  className="bg-orange font-roboto text-xl text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300 inline-block text-center w-full md:w-auto"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

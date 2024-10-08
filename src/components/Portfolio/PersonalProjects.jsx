import React from "react";
import qaycoffee from "../../assets/qaycoffee3.png";
import qayburger from "../../assets/qayburger.png";
import paradiseview from "../../assets/paradise-view.png";
import { SiGithub, SiReact, SiTailwindcss } from "react-icons/si"; // Import icons
import { TbBrandVite } from "react-icons/tb";

const projectsData = [
  {
    id: 1,
    image: qaycoffee,
    title: "Qaycoffee",
    description:
      "The QayCoffee website was developed as a personal project with the primary goal of enhancing my skills and familiarizing myself with modern web development tools, specifically ReactJS, Vite, and Tailwind CSS. Throughout this project, I aimed to create a clean, responsive, and user-friendly interface that showcases various coffee products.",
    link: "https://qaycoffee.netlify.app/",
    source: "https://github.com/fickyfebrian/qaycoffee",
    tools: ["react", "vite", "tailwind"],
  },
  {
    id: 2,
    image: qayburger,
    title: "Qayemi Burger",
    description:
      "Qayemi Burger is a landing page website project for a fictional burger restaurant. The aim of this project is to create an engaging visual experience for users while showcasing important information about the products and services offered by Qay Burger. The website is designed to be responsive and interactive across various devices.",
    link: "https://qayburger.netlify.app/",
    source: "https://github.com/fickyfebrian/qayburger",
    tools: ["react", "vite", "tailwind"],
  },
  {
    id: 3,
    image: paradiseview,
    title: "Paradise View",
    description:
      "The Paradise View project is a personal endeavor where I focused on slicing a web design specifically for desktop view, inspired by a layout created in Figma. Utilizing React, Vite, and Tailwind CSS, my goal was to translate the design into a fully functional and visually appealing website.",
    link: "https://paradise-view.netlify.app/",
    source: "https://github.com/fickyfebrian/paradise-view",
    tools: ["react", "vite", "tailwind"],
  },
  // Add more projects as needed
];


const ToolIcon = ({ tool }) => {
    switch (tool) {
      case "react":
        return <SiReact className="text-blue md:text-2xl lg:text-3xl text-base" />;
      case "vite":
        return <TbBrandVite className="text-yellow md:text-2xl lg:text-3xl text-base" />;
      case "tailwind":
        return <SiTailwindcss className="text-blue md:text-2xl lg:text-3xl text-base" />;
      default:
        return null;
    }
  };

 const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg overflow-hidden flex flex-col">
    <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-montserrat font-semibold mb-2">{project.title}</h3>
      <p className="font-roboto mb-4">{project.description}</p>
      <div className="mt-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {project.tools.map((tool) => (
              <ToolIcon key={tool} tool={tool} />
            ))}
          </div>
          <div className="flex space-x-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange font-roboto text-xl text-white px-4 py-1 rounded-lg hover:scale-105 transition duration-300"
            >
              See Results
            </a>
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-black hover:text-navy px-2 py-2"
            >
              <SiGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PersonalProjects = () => {
  return (
    <div className="container mx-auto px-4 py-12">
         <h2 className="text-4xl font-bold font-montserrat text-center pt-12">
        Personal Projects
      </h2>
      <span className="block h-2 w-24 bg-orange mx-auto rounded-full my-2"></span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;

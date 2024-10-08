import React from "react";
import simskripsi from "../../assets/simskripsi.png";
import { SiGithub, SiReact, SiTailwindcss } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";

const projectsData = [
  {
    id: 1,
    image: simskripsi,
    title: "SIM-Skripsi",
    description:
      "Final project for the 4th semester Web Programming course. Responsible for designing and developing the front-end interface. Integrated the front end with the back end using APIs. Technologies used: React, Vite, and Tailwind.",
    link: "https://kel2ti.duckdns.org/",
    source: "https://github.com/faizakailani/website-sim-skripsi",
    tools: ["react", "vite", "tailwind"],
  },
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
  <div className="bg-white rounded-lg overflow-hidden flex flex-col max-w-2xl w-full">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-56 object-cover"
    />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-montserrat font-semibold mb-2">
        {project.title}
      </h3>
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

const TeamProjects = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold font-montserrat text-center pt-12">
        Team Projects
      </h2>
      <span className="block h-2 w-24 bg-blue mx-auto rounded-full my-2"></span>
      <div className="flex justify-center items-center pt-12">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default TeamProjects;
import React from 'react';
import { FaReact, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiVite, SiDaisyui } from 'react-icons/si';

const techStack = [
  {
    icon: <FaReact className="text-3xl sm:text-4xl text-blue2" />,
    label: 'React',
  },
  {
    icon: <SiTypescript className="text-3xl sm:text-4xl text-blue" />,
    label: 'TypeScript',
  },
  {
    icon: <SiTailwindcss className="text-3xl sm:text-4xl text-blue2" />,
    label: 'Tailwind',
  },
  {
    icon: <SiVite className="text-3xl sm:text-4xl text-yellow" />,
    label: 'Vite',
  },
  {
    icon: <SiDaisyui className="text-3xl sm:text-4xl text-blue" />,
    label: 'DaisyUI',
  },
  {
    icon: <FaGithub className="text-3xl sm:text-4xl text-black" />,
    label: 'GitHub',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-20"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center font-montserrat">
        Internship Experience
      </h2>
      <span className="block h-1.5 sm:h-2 w-20 sm:w-24 bg-orange mx-auto rounded-full my-4 sm:my-6" />
      <p className="text-lg sm:text-xl text-center mt-3 sm:mt-4 mb-8 sm:mb-12 font-roboto text-black max-w-3xl mx-auto">
        Here is a summary of my contributions and learnings during my
        internship.
      </p>

      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
          <div className="w-full">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 font-montserrat">
              Frontend Developer Intern – NoLimit Indonesia
            </h3>

            <div className="mt-3 sm:mt-4">
              <p className="text-lg sm:text-xl mb-3 sm:mb-4 font-montserrat">
                Tech Stack:
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
                {techStack.map(({ icon, label }) => (
                  <div key={label} className="flex flex-col items-center">
                    {icon}
                    <span className="text-xs sm:text-sm mt-1 font-roboto opacity-0 sm:opacity-100">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-black text-lg sm:text-xl font-montserrat whitespace-nowrap lg:text-right">
            October 2024 - January 2025
          </p>
        </div>

        <ul className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
          {[
            'Contribute to the development of NoLimit Care products',
            'Implemented responsive and reusable UI components through Figma design slicing',
            'Integrated backend APIs using useQuery and performed CRUD operations',
            'Collaborated with UI/UX and backend teams to ensure optimal user experience',
            'Participated in code reviews and pull requests with mentors to improve code quality',
          ].map((item, index) => (
            <li key={index} className="border-l-4 border-orange pl-3 sm:pl-4">
              <p className="text-base sm:text-lg md:text-xl font-roboto text-black">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;

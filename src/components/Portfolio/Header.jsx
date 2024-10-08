import React from "react";

const Header = () => {
  return (
    <div className="mt-36 justify-center items-center max-w-7xl mx-auto px-6 md:px-12">
      <h2 className="text-4xl font-bold font-montserrat text-center">
        My Projects
      </h2>
      <span className="block h-2 w-24 bg-orange mx-auto rounded-full my-6"></span>
      <p className="text-xl text-center mt-4 mb-12 font-roboto text-black">
      These personal projects were developed to enhance my front-end development expertise, with a focus on responsive design, JavaScript frameworks, and seamless integration of APIs.
      <br />
       I’ve also worked on slicing UI designs from Figma and implementing data from open-source platforms like dummyjson.com, simulating real-world scenarios to sharpen my skills.
      </p>
    </div>
  );
};

export default Header;

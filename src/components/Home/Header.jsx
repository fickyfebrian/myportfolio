import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="relative h-screen flex flex-col justify-between">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1665159693565-ef9ea8198cec?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          opacity: 0.2,
        }}
      />
      {/* Content */}
      <div className="relative flex-grow flex items-center justify-center">
        <div className="text-center text-black max-w-3xl mx-auto px-4">
          <h1 className="text-5xl lg:text-6xl font-montserrat font-bold mb-4 uppercase">
            Hey, I'm Ficky Febrian
          </h1>
          <p className="text-lg lg:text-2xl leading-relaxed mt-12 font-roboto">
            Junior Frontend Developer || Front-End Enthusiast
          </p>
          <button
            onClick={() => (window.location.href = "#projects")}
            className="bg-black text-white px-14 py-4 mt-12 font-roboto font-semibold text-xl rounded-lg uppercase"
          >
            Projects
          </button>
        </div>
      </div>

      {/* Arrow Button */}
      <div className="relative pb-8 flex justify-center">
        <button
          onClick={() => (window.location.href = "#about")}
          className="text-black flex items-center justify-center"
        >
          <RiArrowDownSLine className="animate-bounce sm:text-2xl md:text-4xl lg:text-6xl text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Header;

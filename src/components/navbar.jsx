import React, { useState, useEffect, useRef } from "react";
import FF from "../../public/assets/project/FFLogo2.png";
import { IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const navigate = useNavigate();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 0);
      setShowGoToTop(window.scrollY > 300);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [sidebarOpen]);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (path, sectionId) => {
    navigate(path);
    setSidebarOpen(false);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const NavItems = ({ onClick }) => (
    <>
      <li className="relative group">
        <button
          onClick={() => {
            handleNavigate("/");
            onClick && onClick();
          }}
          className="text-black text-2xl"
        >
          Home
          <span className="block h-1 bg-orange transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
        </button>
      </li>
      <li className="relative group">
        <button
          onClick={() => {
            handleNavigate("/", "about");
            onClick && onClick();
          }}
          className="text-black text-2xl"
        >
          About
          <span className="block h-1 bg-orange transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
        </button>
      </li>
      <li className="relative group">
        <button
          onClick={() => {
            navigate("/portfolio");
            onClick && onClick();
          }}
          className="text-black text-2xl"
        >
          Projects
          <span className="block h-1 bg-orange transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
        </button>
      </li>
      <li className="relative group">
        <button
          onClick={() => {
            handleNavigate("/", "contact");
            onClick && onClick();
          }}
          className="text-black text-2xl"
        >
          Contact
          <span className="block h-1 bg-orange transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
        </button>
      </li>
    </>
  );

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-40 transition-transform duration-300 ${
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        } ${isScrolled ? "bg-white" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <a href="/">
                <img src={FF} alt="Logo" className="h-28" />
              </a>
            </div>

            {/* Navigasi */}
            <ul className="hidden md:flex space-x-8 font-poppins">
              <NavItems />
            </ul>

            <div className="md:hidden">
              <button
                className="text-black focus:outline-none"
                onClick={() => setSidebarOpen(true)}
              >
                <svg
                  viewBox="-2.4 -2.4 28.80 28.80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                >
                  <g id="Menu / Menu_Alt_01">
                    <path
                      d="M12 17H19M5 12H19M5 7H19"
                      stroke="black"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[300px] bg-white transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "transform translate-x-0" : "transform translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-4 space-y-8 text-center items-center justify-center min-h-screen">
          <button
            className="absolute top-4 right-4 text-black text-4xl z-10"
            onClick={() => setSidebarOpen(false)}
          >
            &times;
          </button>
          <img src={FF} alt="Logo" className="h-28 mb-8" />
          <ul className="space-y-6 font-poppins">
            <NavItems onClick={() => setSidebarOpen(false)} />
          </ul>
        </div>
      </div>

      {/* Go to Top Button */}
      {showGoToTop && (
        <button
          onClick={goToTop}
          className="fixed bottom-6 right-6 transition duration-300 z-50"
        >
          <IoIosArrowUp className="animate-bounce sm:text-2xl text-orange hover:text-blue md:text-4xl lg:text-6xl text-3xl" />
        </button>
      )}
    </>
  );
}
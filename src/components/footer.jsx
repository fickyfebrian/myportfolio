import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/fickyfebrian", label: "Instagram" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ficky-febrian-410592213/", label: "LinkedIn" },
    { icon: SiGmail, href: "mailto:febrianficky0302@gmail.com", label: "Email" },
    { icon: FaGithub, href: "https://github.com/fickyfebrian", label: "GitHub" },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-montserrat font-bold mb-4">Ficky Febrian</h2>
            <p className="text-xl font-roboto">
              Junior Frontend Developer
            </p>
          </div>
          
          <div className="flex flex-col items-center lg:items-end space-y-8">
            <div className="flex space-x-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2F4F7] hover:text-orange transition-colors duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="text-4xl" />
                </a>
              ))}
            </div>
            <p className="font-roboto text-lg">
              Connect with me on social media
            </p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white text-center">
          <p className="text-lg font-roboto">
            &copy; {currentYear} Ficky Febrian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import Header from '../components/Home/Header';
import About from '../components/Home/About';
import Projects from '../components/Home/Projects';
import ContactForm from '../components/Home/Contact';
import Experience from '../components/Home/Experience';

const Home = () => {
  return (
    <div className="">
      <Header />
      <About />
      <Experience />
      <Projects />
      <ContactForm />
    </div>
  );
};

export default Home;

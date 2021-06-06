import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Projects from '../../components/projects/Projects';
import About from '../../components/about/About';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <br />
      <Projects />
      <br />
      <About />
      <br />
      <Footer />
    </div>
  );
};

export default HomePage;

import './App.css';
import React from 'react';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Form from './components/forms/Form';


function App() {
 
  return (
    <div className="">
    
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Form />
      <Footer />
    </div>
  );
}

export default App;

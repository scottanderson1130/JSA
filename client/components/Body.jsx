import React from 'react';
import About from './About.jsx';
import Work from './Work.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

const Body = (props) => {

  return (
    <div id='container-body'>
      <Header />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Body;
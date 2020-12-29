import React from 'react';
import '../styling/style.css'

import NavBar from './components/NavBar.jsx';
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';


const App = () => {

  return (
    <div id='container-main'>
      <NavBar />
      <Main />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
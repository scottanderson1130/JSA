import React from 'react';
import '../styling/style.css'

import NavBar from './components/NavBar.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Projects from './components/Projects.jsx'


const App = () => {

  return (
    <div id='container-main'>
      <NavBar />
      <Main />
      <About />
      <Work />
      <Projects />
    </div>
  )
}

export default App;
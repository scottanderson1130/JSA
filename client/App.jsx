import React from 'react';
import '../styling/style.css'
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
import Folio from './components/Folio.jsx';
import Body from './components/Body.jsx';
import Weather from './components/Weather.jsx';
import Footer from './components/Footer.jsx'


const clicked = (e) => {
  setTimeout(() => {
    const id = document.getElementById(`container-${e.target.text}`)
    id.scrollIntoView()
  }, 500)
}

const App = () => {
  return (
    <div id='container-main'>
      <NavBar clicked={clicked} />
      <Switch>
        <Route exact path='/' component={Body}></Route>
        <Route exact path='/folio' component={Folio}></Route>
        <Route exact path='/weather' component={Weather}></Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
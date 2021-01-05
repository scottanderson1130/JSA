import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../projects/resume/resume.pdf'


const NavBar = ({ clicked }) => {
  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li');

    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else { link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s` }
    })

    burger.classList.toggle('toggle')
  }
  return (
    <div id='navcontainer'>
      <nav>
        <div className='logo'>
          <Link to='/'><h4>jsa</h4></Link>
        </div>
        <ul className='navlinks'>
          <li><Link to='/' onClick={clicked}>about</Link></li>
          <li><Link to='/' onClick={clicked}>work</Link></li>
          <li><Link to='/' onClick={clicked}>projects</Link></li>
          <li><Link to='/' onClick={clicked}>contact</Link></li>
          <li><a href={resume} rel='noopener' target='_blank'><button>resume</button></a></li>
        </ul>
        <div className='burger' onClick={navSlide}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
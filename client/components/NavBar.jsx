import React from 'react'

const NavBar = () => {

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
    <div className='navcontainer'>
      <nav>
        <div className='logo'>
          <p4>jsa</p4>
        </div>
        <ul className='navlinks'>
          <li><a href='#'>about</a></li>
          <li><a href='#'>work</a></li>
          <li><a href='#'>projects</a></li>
          <li><a href='#'>contact</a></li>
          <li><a><button>resume</button></a></li>
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
import React from 'react';

const About = () => {
  return (
    <div id='container-about'>
      <h1>about.</h1>
      <p>Yo! I'm Scott Anderson, a software engineer based in New Orleans, La.</p>
      <p>I am a fan of building and creating things that live on the web be it websites, applications or whatever we can come up with.</p>
      <p>I've listed some technologies that i have been working with recently:</p>
      <ul className='left'>
        <li>javascript</li>
        <li>react</li>
        <li>node.js</li>
      </ul>
      <ul className='right'>
        <li>html & css</li>
        <li>redux</li>
        <li>python</li>

      </ul>
    </div>
  )
}

export default About;
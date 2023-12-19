import React from 'react';

const Sitemap = () => {
  return (
    <div className='sitemap'>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li>
            <a href="#projects">Projects</a>
            <ul>
              <li>
                <a href="#developer">Developer</a>
                
              </li>
              <li>
                <a href="#contractor">Contractor</a>
                
              </li>
            </ul>
          </li>
          <li>
            <a href="#about">About</a>
            <ul>
              <li><a href="#Discover us">Discover us</a></li>
              <li><a href="#Director's Words of Wisdom">Director's Words of Wisdom</a></li>
              <li><a href="#Director-1">Pravin Patil</a></li>
              <li><a href="#Director-2">Mandar Mate</a></li>
            </ul>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
            <ul>
              <li><a href="#Buisness">Business Enquiry</a></li>
              <li><a href="#Messages">Message Enquiry</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sitemap;

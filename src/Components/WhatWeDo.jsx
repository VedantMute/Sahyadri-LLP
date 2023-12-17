import React from 'react';
import '../Styles/WhatWeDo.css';
import residentialImage from '../assets/residential.png';
import commercialImage from '../assets/commercial.png';
import healthcareImage from '../assets/healthcare.png';
import schoolImage from '../assets/school.png';

const WhatWeDo = () => {
  return (
    <>
      <div>
        <h2 className='what-we-do'>WHAT WE DO</h2>
        <p className='what-we-do-para'>
          From our inception, we've honed our expertise in crafting design-built, turn-key, core and shell projects within the Residential, Commercial, Educational, Healthcare, and Industrial realms. Our unwavering focus centers on transforming skylines by establishing unparalleled benchmarks in the strategic planning, adept management, and flawless execution of expansive construction ventures. Embracing a collaborative and innovation-centric ethos, we specialize in constructing infrastructure that is not only sustainable but also uniquely adaptable to the dynamic shifts of the times. As a contract-based construction company, we take pride in delivering projects that redefine excellence in the construction landscape.
        </p>
      </div>
      <div>
        <div className="card-container">
          <div className="card-box"><div><img src={residentialImage} alt="Residential Construction" /></div><div>Residential</div></div>
          <div className="card-box"><div><img src={commercialImage} alt="Commercial Construction" /></div><div>Commercial</div></div>
          <div className="card-box"><div><img src={healthcareImage} alt="Healthcare Construction" /></div><div>Healthcare</div></div>
          <div className="card-box"><div><img src={schoolImage} alt="Educational Construction" /></div><div>School</div></div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;

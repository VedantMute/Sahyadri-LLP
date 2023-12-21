import React from 'react';
import Title from './Title';
import '../Styles/AsDeveloperProject.css';

const projectsData = [
  {
    image: 'https://triconinfra.in/images/project/ongoing/Godrej-City-Highlands.png',
    title: 'Godrej-City-Highlands',
    location: 'Panvel, Mumbai',
    area: '18,65,000sq.ft.',
    link: '#',
  },
 
  {
    image: 'https://triconinfra.in/images/project/ongoing/Godrej-Exquisite.png',
    title: 'Godrej-Exquisite',
    location: 'Thane, Mumbai',
    area: '10,75,000sq.ft',
    link: '#',
  },
  {
    image: 'https://triconinfra.in/images/project/ongoing/Yoo-one.png',
    title: 'Yoo-one',
    location: 'NIBM.Pune',
    area: '10,00,000sq.ft',
    link: '#',
  },
  {
    image: 'https://triconinfra.in/images/project/ongoing/Godrej-Exquisite.png',
    title: 'Godrej-Exquisite',
    location: 'Thane, Mumbai',
    area: '10,75,000sq.ft',
    link: '#',
  },
  {
    image: 'https://triconinfra.in/images/project/ongoing/Godrej-Exquisite.png',
    title: 'Godrej-Exquisite',
    location: 'Thane, Mumbai',
    area: '10,75,000sq.ft',
    link: '#',
  },
  {
    image: 'https://triconinfra.in/images/project/ongoing/Godrej-Exquisite.png',
    title: 'Godrej-Exquisite',
    location: 'Thane, Mumbai',
    area: '10,75,000sq.ft',
    link: '#',
  },
  
  
  // Add more project data here
];

export default function AsDeveloperProjects({ projects = projectsData }) {
  return (
    <>
      <Title content="Projects / As Developer" />
      <div className="pro-section">
        <h3>
          <span className="yellow-text">CONSTRUCTION </span>AND DEVELOPMENT
        </h3>
        <div  className="pro-cards">
          {projects.map((project) => (
            <div key={project.title} className="pro-card">
              <div className="pro-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="pro-content">
                <h2>{project.title}</h2>
                <div className="pro-flex">
                  <div>{project.location}</div>
                  <div>{project.area}</div>
                </div>
                <a href={project.link}>Know more &gt;&gt;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

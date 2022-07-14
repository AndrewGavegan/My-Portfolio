import React from 'react';
import Projects from './projects';

function ProjectInfo() {
  const info = [
    {
      title: 'Popcornable',
      github: 'https://github.com/AndrewGavegan/Popcornable',
      deployment: 'https://popcornable.herokuapp.com/',
      img: '../../images/popcornable-screenshot.JPG'
    },
    {
      title: 'Technotizing',
      github: 'https://github.com/AndrewGavegan/Technotizing',
      deployment: 'https://technotizing.herokuapp.com/',
      img: '../../images/technotizing-screenshot.JPG'
    },
    {
      title: 'Holy Spiritz',
      github: 'https://github.com/JemimaSiddiqui/Holy-Spiritz',
      deployment: 'https://jemimasiddiqui.github.io/Project_1_Group-B/',
      img: '../../images/holy-spiritz-screenshot.JPG'
    },
    {
      title: 'ExpressJS Note Taker',
      github: 'https://github.com/AndrewGavegan/Express.JS-Note-Application',
      deployment: 'https://andrew-gavegan-note-taker.herokuapp.com/',
      img: '../../images/note-taker-screenshot.PNG'
    },
    {
      title: 'Social Network Back End',
      github: 'https://github.com/AndrewGavegan/SocialNetworkAPI-Week18',
      deployment: 'https://github.com/AndrewGavegan/SocialNetworkAPI-Week18',
      img: '../../images/social-network-screenshot.png'
    },
    {
      title: 'E-Commerce Back End',
      github: 'https://github.com/AndrewGavegan/E-Commerce-Back-End-Application',
      deployment: 'https://github.com/AndrewGavegan/E-Commerce-Back-End-Application',
      img: '../../images/e-commerce-screenshot.png'
    },
  ]

  return (
    <div className="projects">
      {info.map((e) => {
        return <Projects key={e.title} title={e.title} github={e.github} deployment={e.deployment} img={e.img} />;
      })}
    </div>
  );
}

export default ProjectInfo;
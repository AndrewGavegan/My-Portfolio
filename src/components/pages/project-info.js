import React from 'react';
import Projects from './projects';
import img1 from '../../images/popcornable-screenshot.JPG';
import img2 from '../../images/technotizing-screenshot.JPG';
import img3 from '../../images/Capture1.PNG';
import img4 from '../../images/note-taker-screenshot.PNG';
import img5 from '../../images/social-network-screenshot.png';
import img6 from '../../images/e-commerce-screenshot.png';



function ProjectInfo() {
  const info = [
    {
      title: 'Popcornable',
      github: 'https://github.com/AndrewGavegan/Popcornable',
      deployment: 'https://popcornable.herokuapp.com/',
      img: img1
    },
    {
      title: 'Technotizing',
      github: 'https://github.com/AndrewGavegan/Technotizing',
      deployment: 'https://technotizing.herokuapp.com/',
      img: img2
    },
    {
      title: 'Trana',
      github: 'https://github.com/AndrewGavegan/trana',
      deployment: 'https://trana-application.herokuapp.com/',
      img: img3
    },
    {
      title: 'ExpressJS Note Taker',
      github: 'https://github.com/AndrewGavegan/Express.JS-Note-Application',
      deployment: 'https://andrew-gavegan-note-taker.herokuapp.com/',
      img: img4
    },
    {
      title: 'Social Network API',
      github: 'https://github.com/AndrewGavegan/SocialNetworkAPI-Week18',
      deployment: 'https://github.com/AndrewGavegan/SocialNetworkAPI-Week18',
      img: img5
    },
    {
      title: 'E-Commerce API',
      github: 'https://github.com/AndrewGavegan/E-Commerce-Back-End-Application',
      deployment: 'https://github.com/AndrewGavegan/E-Commerce-Back-End-Application',
      img: img6
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
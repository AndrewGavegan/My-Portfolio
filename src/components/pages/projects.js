import React from 'react';

function Projects({ title, github, deployment, img }) {
  return (
    <div className="project">
      <h3 className="img-title">{title}
        <a target="_blank" href={github}><i className="fa fa-github"></i></a>
        <a target="_blank" href={deployment}><i className="fa-solid fa-browser"></i></a>
      </h3>
      <img src={img} className="project-img" alt="project" />
    </div>
  );
}

export default Projects;
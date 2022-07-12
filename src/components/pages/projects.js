import React from 'react';
import img1 from '../../images/popcornable-screenshot.JPG';
import img2 from '../../images/technotizing-screenshot.JPG';
import img3 from '../../images/holy-spiritz-screenshot.JPG';

function Projects() {
    return (
        <div className="projects">
            <div className="project">
                <img src={img1} className="project-img" alt="project" />
                <h3 className="img-title">Test</h3>
            </div>
            <div className="project">
                <img src={img2} className="project-img" alt="project" />
                <h3 className="img-title">Test2</h3>
            </div>
            <div className="project">
                <img src={img3} className="project-img" alt="project" />
                <h3 className="img-title">Test3</h3>
            </div>
        </div>
    );
}

export default Projects;
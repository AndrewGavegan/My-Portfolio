import React from 'react';
import img1 from '../../images/popcornable-screenshot.JPG';
import img2 from '../../images/technotizing-screenshot.JPG';
import img3 from '../../images/holy-spiritz-screenshot.JPG';
import img4 from '../../images/note-taker-screenshot.PNG';
import img5 from '../../images/social-network-screenshot.png';


function Projects() {
    return (
        <div className="projects">
            <div className="project">
                <h3 className="img-title">Popcornable</h3>
                <img src={img1} className="project-img" alt="project" />
            </div>
            <div className="project">
                <h3 className="img-title">Technotizing</h3>
                <img src={img2} className="project-img" alt="project" />
            </div>
            <div className="project">
                <h3 className="img-title">Holy Spiritz</h3>
                <img src={img3} className="project-img" alt="project" />
            </div>
            <div className="project">
                <h3 className="img-title">ExpressJS Note Taker</h3>
                <img src={img4} className="project-img" alt="project" />
            </div>
            <div className="project">
                <h3 className="img-title">Social Network Back End</h3>
                <img src={img5} className="project-img" alt="project" />
            </div>
        </div>
    );
}

export default Projects;
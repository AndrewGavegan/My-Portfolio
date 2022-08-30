import React from 'react';
import resumePDF from '../../documents/Andrew-Gavegan-Resume.pdf'

function Resume() {
  return (
    <div className="Resume">
      <h4 className="resume-link">Downloadable resume <a target="_blank" rel="noreferrer" href={resumePDF} >here.</a></h4>
      <div classname="resume-text">
        <p><h5>Front-End Technologies</h5>
          <ul>
            <li>ReactJS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
          <h5>Back-End Technologies</h5>
          <ul>
            <li>nodeJS</li>
            <li>expressJS</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Unit Testing</li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default Resume;
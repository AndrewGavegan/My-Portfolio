import React from 'react';
import img5 from '../../images/me.jpg'

function AboutMe() {
  return (
    <div className="about-me">
      <div><img src={img5} alt="Andrew Gavegan" className="img-me" /></div>
      <div className="about-me-text">lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip </div>
    </div>
  );
}

export default AboutMe;
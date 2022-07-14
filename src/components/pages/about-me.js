import React from 'react';
import img5 from '../../images/me.jpg'

function AboutMe() {
  return (
    <div className="about-me">
      <div><img src={img5} alt="Andrew Gavegan" className="img-me" /></div>
      <div className="about-me-text">Why do I code? If there's anything I know to be true about myself, it's that I learn best
        through trial and error.<br /> From the outside the world of coding and software developement
        seemed like the perfect place to cultivate someone with that style of learning. <br /> So I acted
        on that thought and started creating landing pages for pretend companies, honing my HTML and CSS
        skills with all the free time I had in lockdowns.<br /> The pitfalls of error codes and the rushes
        of lightbulb moments that get things working has me hooked to coding like nothing else.
        <br />
        <br />
        What technical skills do I have? Comprehensive knowledge of HTML5, CSS and JavaScript. Studied frameworks or
        libraries include bootstrap and jQuery. Comfortable
        using and implementing third party and server-side API’s. Skills being learnt in the next four
        months include node.JS, express.JS,
        react.JS, SQL MongoDB and State programming.</div>
    </div>
  );
}

export default AboutMe;
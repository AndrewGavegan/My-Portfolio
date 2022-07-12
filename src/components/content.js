import React from 'react';
import Header from './pages/header';
import Projects from './pages/projects';
import AboutMe from './pages/about-me';



function Content() {
    return (
        <div className="Content">
            <Header />
            <Projects />
            <AboutMe />
        </div>
    );
}

export default Content;
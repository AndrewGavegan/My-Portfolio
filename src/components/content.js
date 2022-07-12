import React, { useState } from 'react';
import Navigation from './navigation';
import Header from './pages/header';
import Projects from './pages/projects';
import AboutMe from './pages/about-me';
import Contact from './pages/contact';
import Resume from './pages/resume'



function Content() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'AboutMe') return <AboutMe />
    if (currentPage === 'Projects') return <Projects />
    if (currentPage === 'Contact') return <Contact />
    if (currentPage === 'Resume') return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="Content">
      <Header />
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default Content;
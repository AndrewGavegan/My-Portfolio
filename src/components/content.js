import React, { useState } from 'react';
import Navigation from './navigation';
import Header from './pages/header';
import ProjectInfo from './pages/project-info';
import AboutMe from './pages/about-me';
import Contact from './pages/contact';
import Resume from './pages/resume'



function Content() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {

    if (currentPage === 'ProjectInfo') {
      return <ProjectInfo />
    } else if (currentPage === 'Contact') {
      return <Contact />
    } else if (currentPage === 'Resume') {
      return <Resume />
    } else {
      return <AboutMe />
    }
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
import React, { useState } from 'react';
import Navigation from './navigation';
import Header from './pages/header';
import Projects from './pages/projects';
import AboutMe from './pages/about-me';



function Content() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'AboutMe': return <AboutMe />;
      case 'Projects': return <Projects />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="Content">
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header />
      {renderPage()}
    </div>
  );
}

export default Content;
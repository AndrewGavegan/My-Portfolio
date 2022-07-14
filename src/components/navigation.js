import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="top-bar">
      <ul className="nav-list">
        <li className="nav-list-item"><a href="#AboutMe" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
          About Me
        </a></li>
        <li className="nav-list-item"><a href="#Projects" onClick={() => handlePageChange('ProjectInfo')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
          Portfolio
        </a></li>
        <li className="nav-list-item"><a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </a></li>
        <li className="nav-list-item"><a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
          Resume
        </a></li>
      </ul>
    </div>
  );
}

export default Navigation;
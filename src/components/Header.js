// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header-section">
      <div className="header-content">
        <h1>DILLI PRASAD MOGARALA</h1>
        <p>Web Developer</p>
        <p>Welcome to my portfolio! I am a web developer passionate about creating engaging and user-friendly web experiences. My goal is to combine creativity and functionality to deliver solutions that not only meet but exceed expectations.</p>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Link to="/projects" className="cta-button">View My Projects</Link>
      </div>
    </header>
  );
}

export default Header;

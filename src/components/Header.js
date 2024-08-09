import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '1em'
};

const navStyle = {
  listStyle: 'none',
  padding: 0
};

const navItemStyle = {
  display: 'inline',
  marginRight: '10px'
};

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none'
};

function Header() {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navStyle}>
          <li style={navItemStyle}><Link to="https://github.com/ELECTROKARIM"><h1>ELECTROKARIM</h1></Link></li>
          <li style={navItemStyle}><Link to="/" style={navLinkStyle}>Accueil</Link></li>
          <li style={navItemStyle}><Link to="/projects" style={navLinkStyle}>Projets</Link></li>
          <li style={navItemStyle}><Link to="/blog" style={navLinkStyle}>Blog</Link></li>
          <li style={navItemStyle}><Link to="/contact" style={navLinkStyle}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

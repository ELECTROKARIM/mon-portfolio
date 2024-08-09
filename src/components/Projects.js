import React, { useEffect } from 'react';

const Home = () => {
  const bodyStyle = {
    margin: 0,
    padding: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundImage: 'url("https://th.bing.com/th/id/OIP.QOlY9oQpvBinx1lwg7OJTQHaEK?w=246&h=180&c=7&r=0&o=5&pid=1.7")', 
    color: '#ffffff', 
  };

  const linkStyle = {
    display: 'block',
    marginBottom: '10px',
    textDecoration: 'none',
    color: '#ffeb3b',
  };

  useEffect(() => {
    // Appliquer le style au corps de la page
    Object.assign(document.body.style, bodyStyle);

    // Nettoyage lors du démontage du composant
    return () => {
      Object.assign(document.body.style, {
        backgroundImage: '',
        backgroundSize: '',
        backgroundPosition: '',
        backgroundRepeat: '',
        color: '',
      });
    };
  }, []);

  return (
    <section style={{ padding: '2em', textAlign: 'center' }}>
      <h1>Projects</h1>
      <p>Je suis ELECTROKARIM, un développeur web passionné.</p>
      <a href="https://github.com/ELECTROKARIM/github-user-search" style={linkStyle}>
        https://github.com/ELECTROKARIM/github-user-search
      </a>
      <a href="https://github.com/ELECTROKARIM/mon-blog-markdown" style={linkStyle}>
        https://github.com/ELECTROKARIM/mon-blog-markdown
      </a>
      <a href="https://github.com/ELECTROKARIM/That-LUDO-GAME-" style={linkStyle}>
        https://github.com/ELECTROKARIM/That-LUDO-GAME-
      </a>
      <a href="https://github.com/ELECTROKARIM/my-app" style={linkStyle}>
        https://github.com/ELECTROKARIM/my-app
      </a>
      <a href="https://github.com/ELECTROKARIM/mon-blog" style={linkStyle}>
        https://github.com/ELECTROKARIM/mon-blog
      </a>
      <a href="https://github.com/ELECTROKARIM/ecommerce-material-ui" style={linkStyle}>
      https://github.com/ELECTROKARIM/ecommerce-material-ui
      </a>
      <a href="https://github.com/ELECTROKARIM/mon-portfolio" style={linkStyle}>
      https://github.com/ELECTROKARIM/mon-portfolio
      </a>
    </section>
  );
};
export default Home;

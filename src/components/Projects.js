import React from 'react';

const linkStyle = {
  display: 'block',
  marginBottom: '10px', // Ajoute un espace entre les liens
  textDecoration: 'none',
  color: '#007bff',
};

function Home() {
  return (
    <section>
      <h1>Bienvenue sur mon portfolio</h1>
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
    </section>
  );
}

export default Home;

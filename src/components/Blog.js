import React from 'react';

function Blog() {
  return (
    <section style={sectionStyle}>
      <h2>Blog</h2>
      <p>Bienvenue sur mon blog où je partage des articles intéressants.</p>

      <div style={linksContainerStyle}>
        <div style={linkBoxStyle}>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://developer.mozilla.org/static/img/favicon32.png" alt="JavaScript" style={imageStyle} />
            <div style={textStyle}>JavaScript</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://www.php.net/releases/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://www.php.net/favicon.ico" alt="PHP" style={imageStyle} />
            <div style={textStyle}>PHP</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://reactjs.org/blog/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://reactjs.org/favicon.ico" alt="React" style={imageStyle} />
            <div style={textStyle}>React</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://nodejs.org/en/blog/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://nodejs.org/static/favicon.ico" alt="Node.js" style={imageStyle} />
            <div style={textStyle}>Node.js</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://www.ruby-lang.org/en/news/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://www.ruby-lang.org/favicon.ico" alt="Ruby" style={imageStyle} />
            <div style={textStyle}>Ruby</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://golang.org/doc/devel/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://golang.org/favicon.ico" alt="Go" style={imageStyle} />
            <div style={textStyle}>Go</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://www.scala-lang.org/news/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://www.scala-lang.org/favicon.ico" alt="Scala" style={imageStyle} />
            <div style={textStyle}>Scala</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://www.swift.org/blog/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://swift.org/favicon.ico" alt="Swift" style={imageStyle} />
            <div style={textStyle}>Swift</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://www.perl.org/news/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://www.perl.org/favicon.ico" alt="Perl" style={imageStyle} />
            <div style={textStyle}>Perl</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://www.typescriptlang.org/docs/handbook/release-notes.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://www.typescriptlang.org/favicon.ico" alt="TypeScript" style={imageStyle} />
            <div style={textStyle}>TypeScript</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://www.dart.dev/resources/news" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://www.dart.dev/favicon.ico" alt="Dart" style={imageStyle} />
            <div style={textStyle}>Dart</div>
          </a>
        </div>
      </div>

      <style>
        {`
          .link-box a {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: inherit;
            transition: background-color 0.3s ease;
            padding: 10px;
            border-radius: 4px;
            text-align: center;
            border: 1px solid #ddd;
            background-color: #f9f9f9;
          }

          .link-box a:hover {
            background-color: #f0f0f0;
            border-color: #ccc;
          }
        `}
      </style>
    </section>
  );
}

const sectionStyle = {
  padding: '2em',
  textAlign: 'center',
};

const linksContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1em',
  justifyContent: 'center',
};

const linkBoxStyle = {
  flex: '1 1 calc(33.333% - 1em)',  // Ajuste la largeur des boîtes pour 3 par ligne avec un espace de 1em entre les boîtes
  maxWidth: 'calc(33.333% - 1em)',
  boxSizing: 'border-box',
};

const linkStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'black',
};

const imageStyle = {
  width: '32px',
  height: '32px',
};

const textStyle = {
  marginTop: '0.5em',
  fontWeight: 'bold',
};

export default Blog;

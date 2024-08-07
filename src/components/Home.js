import React from 'react';

const Home = () => {
  return (
    <section style={sectionStyle}>
      <h1>Bienvenue sur mon portfolio</h1>
      <p>Je suis ELECTROKARIM, un développeur web passionné.</p>

      <div style={progressContainerStyle}>
        <div className="progress-bar" style={{ width: '80%', backgroundColor: '#4caf50' }}>
          <span className="progress-label">HTML/CSS</span>
          <div className="bubble-effect">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        </div>
        <div className="progress-bar" style={{ width: '70%', backgroundColor: '#2196f3' }}>
          <span className="progress-label">JavaScript</span>
          <div className="bubble-effect">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        </div>
        <div className="progress-bar" style={{ width: '60%', backgroundColor: '#ff5722' }}>
          <span className="progress-label">React</span>
          <div className="bubble-effect">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        </div>
        <div className="progress-bar" style={{ width: '50%', backgroundColor: '#9c27b0' }}>
          <span className="progress-label">Node.js</span>
          <div className="bubble-effect">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        </div>
      </div>

      <style>
        {`
          .progress-bar {
            position: relative;
            background-color: #eee;
            border-radius: 4px;
            height: 30px;
            margin-bottom: 10px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease;
            width: 0; /* Default width, to be updated via inline style */
          }

          .progress-bar::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.3);
            pointer-events: none;
            border-radius: 4px;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1;
          }

          .progress-bar::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 100%;
            background: rgba(255, 255, 255, 0.5);
            pointer-events: none;
            transition: width 2s ease;
            z-index: 2;
          }

          .progress-bar:hover::after {
            width: 100%;
          }

          .progress-bar:hover::before {
            opacity: 1;
          }

          .progress-label {
            position: relative;
            color: white;
            font-weight: bold;
            z-index: 3;
          }

          .bubble-effect {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          .bubble-effect .bubble {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            pointer-events: none;
            animation: bubble 1.5s infinite;
          }

          .bubble-effect .bubble:nth-child(1) {
            width: 10px;
            height: 10px;
            left: 10%;
            animation-delay: 0s;
          }

          .bubble-effect .bubble:nth-child(2) {
            width: 15px;
            height: 15px;
            left: 30%;
            animation-delay: 0.5s;
          }

          .bubble-effect .bubble:nth-child(3) {
            width: 20px;
            height: 20px;
            left: 50%;
            animation-delay: 1s;
          }

          @keyframes bubble {
            0% {
              transform: scale(0) translateY(0);
              opacity: 1;
            }
            100% {
              transform: scale(1) translateY(-100%);
              opacity: 0;
            }
          }
        `}
      </style>
    </section>
  );
};

const sectionStyle = {
  padding: '2em',
  textAlign: 'center',
};

const progressContainerStyle = {
  marginTop: '2em',
  position: 'relative',
};

export default Home;

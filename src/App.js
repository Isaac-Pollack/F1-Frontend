import React from 'react';

import logo from './logo.svg';
import './App.css';

// Components
import Standings from './components/standings';
import Race from './components/race';

const App = () => {

  // Navbar click scrolling animation
  const handleNavClick = (event, sectionId) => {
    event.preventDefault();

    if (sectionId === 'home') {
      const navbar = document.querySelector('.App-header');
      if (navbar) {
        navbar.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // const handleLoginLogout = () => {
  // setIsLoggedIn(!isLoggedIn);
  // };

  return (
    <div>
      {/* Navigation bar */}
      <nav className="App-nav">
        <ul>
          <li>
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#standings" onClick={(e) => handleNavClick(e, 'standings')}>
              Standings
            </a>
          </li>
          <li>
            <a href="#upcoming-race" onClick={(e) => handleNavClick(e, 'upcoming-race')}>
              Upcoming Race
            </a>
          </li>
          <li>
            <button className="App-login-btn noHover">
              {/* onClick={handleLoginLogout} */}
              {/* {isLoggedIn ? 'Logout' : 'Login'} */}
              {/* Login */}
            </button>
          </li>
        </ul>
      </nav>

      {/* Header */}
      <header className="App-header">
        <h1>The F1 Frontend</h1>
        <p>
          A collection of handy widgets for all Formula One fans.
        </p>
      </header>

      {/* Standings section */}
      <section id="standings" className="App-section">
        <div className="App-box">
          <h2>Point Standings</h2>
          <Standings />
        </div>
      </section>

      {/* Upcoming Race section */}
      <section id="upcoming-race" className="App-section">
        <div className="App-box">
          <h2>Upcoming Race</h2>
          <Race />
        </div>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <div className="App-footer-section">
          <p>Created by Isaac Pollack</p>
        </div>
        <div className="App-footer-section">
          <button className="App-scroll-top-btn" onClick={(e) => handleNavClick(e, 'home')}>
            Back to the top
          </button>
        </div>
        <div className="App-footer-section">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Powered by React</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

import './index.css';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img src="./mylogo.png" alt="Time Tracker Logo" className="App-logo" />
          
          {/* App Title */}
          <div className="app-title">Time Tracker App</div>

          {/* Hamburger Menu */}
          <div className="menu-icon" onClick={toggleMenu}>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </div>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="menu">
            <ul>
              {/* Platzhalter-Links */}
              <li><a href="#profile">Profile</a></li>
              <li><a href="#settings">Settings</a></li>
              <li><a href="#logout">Logout</a></li>
              <li><a href="#placeholder1">Placeholder 1</a></li>
              <li><a href="#placeholder2">Placeholder 2</a></li>
              <li><a href="#placeholder3">Placeholder 3</a></li>
              <li><a href="#placeholder4">Placeholder 4</a></li>
              <li><a href="#placeholder5">Placeholder 5</a></li>
              <li><a href="#placeholder6">Placeholder 6</a></li>
              <li><a href="#placeholder7">Placeholder 7</a></li>
            </ul>
          </div>
        )}
      </header>

      <main className="App-main">
        <p>Welcome to the Time Tracker App. Stay tuned for updates!</p>
      </main>

      <footer className="App-footer">
        <p>&copy; 2025 Time Tracker Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

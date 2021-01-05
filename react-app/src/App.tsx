import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routes from './router/Routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <div className="router">
          <Router>
            <Routes />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;

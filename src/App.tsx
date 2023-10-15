import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <small>
        You are running this application in <span className="App-Mode">{process.env.NODE_ENV}</span> mode. 
        </small>
        <small>
        The secret code is <span className="App-Code">{process.env.REACT_APP_NOT_SECRET_CODE}</span>
        </small>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

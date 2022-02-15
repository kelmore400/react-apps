import React from 'react';
import logo from './logo.svg';
import snake from './assets/img/snake.svg';
import './App.css';
import Example_1 from './components/Example_1';
import Example_2 from './components/Example_2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <img src={snake} className="App-snake" alt="snake" />
        <p>
          Hello world!
        </p>
        <Example_1 text="1"/>
        <Example_1 text="2"/>
        <Example_1 text="3"/>
        <Example_1 text="4"/>
        <Example_2 text = "class text"/>
        <Example_2 />
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

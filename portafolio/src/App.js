import React from 'react';
import Home from './components/home/home';
import About from './components/About/About';
import Projects from './components/Projects/projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='Home'>
        <Home />
      </div>
      <div id='About'>
        <About />
      </div>
      <div id='Projects'>
        <Projects />
      </div>
    </div>
  );
}

export default App;

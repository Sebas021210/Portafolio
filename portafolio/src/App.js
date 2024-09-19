import React from 'react';
import Home from './components/home/home';
//import About from './components/About/About';
//import Projects from './components/Projects/projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Home'>
        <Home />
      </div>
      <div className='About'></div>
      <div className='Projects'></div>
    </div>
  );
}

export default App;

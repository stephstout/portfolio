import React from 'react';
import Nav from './components/Nav'
import ProjectGallery from './components/ProjectGallery';
import AboutMe from './components/AboutMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutMe />
      <ProjectGallery />
    </div>
  );
}

export default App;

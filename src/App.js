import React from 'react';
import Hero from './components/hero/hero';
import NavBar from './components/Navbar/Navbar';
import './default.scss';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <h2>Hello World!</h2>
    </div>
  );
}

export default App;

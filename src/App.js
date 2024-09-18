import React from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Benefits from './Benefits';
import Services from './Services';
import Advantages from './Advantages';
import ClientsSection from './ClientsSection'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Services />
      <Advantages /> 
      <ClientsSection /> 
    </div>
  );
}

export default App;

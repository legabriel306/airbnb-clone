import React from 'react';

import data from './data'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import './App.css';

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id} 
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;

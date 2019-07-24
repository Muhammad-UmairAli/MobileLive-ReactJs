import React from 'react';
import './App.css';

import Nav from './components/nav';
import Jumbo from './components/jumbo';
import Company from './components/companies';
import ControlledCarousel from './components/ControlledCarousel';
import Achieve from './components/achievments';
import Frame from './components/frame';
import Partner from './components/partners';
import Footer from './components/footer';

const App = () => {
  const style = {
    padding: '0px'
  };
  return (
    <div style={style} className="container-fluid">
      <Nav />
      <Jumbo />
      <Company />
      <ControlledCarousel />
      <Achieve />
      <Frame />
      <Partner />
      <Footer />
    </div>
  );
};

export default App;

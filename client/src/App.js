import React from 'react';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

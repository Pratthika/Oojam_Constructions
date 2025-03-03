// App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';  // Import the Home component
import Footer from './components/Footer';
import './App.css'; // Import global styles

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;

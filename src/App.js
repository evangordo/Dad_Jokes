import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Joke from './components/Joke'


function App() {
  return (
    
      <div className="App">
        <Navbar />
        <div className="container mx-auto">
          <Joke />
        </div>
      </div>
   


  );
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './compo/Counter';
import Users from './compo/Users';

function App() {
  return (
    <div className="App">
     <Counter/>
     <Users/>
    </div>
  );
}

export default App;

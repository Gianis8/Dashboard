import React from 'react';
import '../App.css';
import ToDos from './ToDos';
import Weather from './Weather';

function App() {
  return (
    <div id="app">
      <Weather></Weather>
      <ToDos></ToDos>
    </div>
  );
}

export default App;

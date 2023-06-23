import React from 'react';
import '../App.css';
import ToDos from './ToDos';
import Weather from './Weather';
import Calendar from 'react-calendar';

function App() {
  return (
    <div id="app">
      <Weather></Weather>
      <ToDos></ToDos>
      <Calendar />
    </div>
  );
}

export default App;

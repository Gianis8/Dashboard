import React from 'react';
import '../App.css';
import ToDos from './ToDos';
import Weather from './Weather';
import MyCalendar from './MyCalender';


function App() {
  return (
    <div id="app">
      <Weather></Weather>
      <MyCalendar />
      <ToDos></ToDos>
      
    </div>
  );
}

export default App;

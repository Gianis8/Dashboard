import React from 'react';
import '../App.css';
import ToDos from './ToDos';
import Weather from './Weather';
import MyCalendar from './MyCalender';
import Chat from './Chat';


function App() {
  return (
    <div id="app">
      <Weather></Weather>
      <MyCalendar />
      <Chat></Chat>
      <ToDos></ToDos>
      
    </div>
  );
}

export default App;

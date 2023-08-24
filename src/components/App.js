import React from 'react';
import ToDos from './ToDos';
import Weather from './Weather';
import Calendar from './Calendar';
// import Chat from './Chat';


function App() {
  return (
    <div className='font-display flex'>
      <Weather></Weather>
      {/* <Chat></Chat> */}
      <ToDos></ToDos>
      <Calendar />
    </div>
  );
}

export default App;

import React from 'react';
import ToDos from './ToDos';
import Weather from './Weather';
import Calendar from './Calendar';

import Chat from './Chat';


function App() {
  return (
    <div className='font-display flex flex-wrap'>
      <Weather></Weather>
      <ToDos></ToDos>
      <Chat></Chat>
      <Calendar />
    </div>
  );
}

export default App;

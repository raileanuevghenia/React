import Form from './components/Form';
import Display from './components/Display';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [boxesList, setBoxesList] = useState([]);

  return (
    <div className="App">
      <Form boxesList = { boxesList } setBoxesList = { setBoxesList }/>
      <Display boxesList = { boxesList } setBoxesList = { setBoxesList } />
    </div>
  );
}

export default App;

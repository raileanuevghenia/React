import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemonName, setPokemonName] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        return response.json()
      })
      .then(response => {
        setPokemonName(response.results)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
  return (
    <div className="App" style={{ width: "140px",margin: "auto"}}>
      <ul>
        {
          pokemonName.map((item, index) =>{
            return <li key={index}>{ item.name }</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;

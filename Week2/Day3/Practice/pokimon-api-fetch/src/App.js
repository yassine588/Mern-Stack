import "./App.css";
import React, { useState } from "react";
function App() {
  const [pokeApi, setPokeApi] = useState([]);
  const showpok=()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        return response.json()
      })
       .then((response) => {
        setPokeApi(response.results)
      })
      .catch((err) => console.log(err));
    }
  return (
    <div className="App">
      < button onClick={showpok}>Fetch Pokemon</button>
      <ul>
        { pokeApi.map((pokemon) => {
        return (   
          <li > {pokemon.name}</li>
    )})}
      </ul> 
    </div>
  );
}

export default App;
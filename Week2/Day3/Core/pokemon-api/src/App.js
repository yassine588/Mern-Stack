import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
function App() {
  const [pokeApi, setPokeApi] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setPokeApi(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>Axios Pokemon API Assignment</h1>
      <ul>
        {pokeApi.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
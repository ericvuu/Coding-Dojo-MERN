import React, { useState } from "react";
import axios from "axios";

const Pokemon = (props) => {
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemon = (e) => {
   axios.get("https://pokeapi.co/api/v2/pokemon?limit=807").then((response) => {
     setPokemonList(response.data.results);
   })
   .catch(error => console.log(error))
  };

  return (
    <div className="container-fluid text-center mt-5">
      <button className="btn btn-lg btn-success" onClick={getPokemon}>
        Fetch Pokemon
      </button>
      <ul className="mt-5 list-unstyled">
        {
          pokemonList.map( (pokemon, index) => {
            return <li key={index}>{pokemon.name}</li>;
          })
        }
      </ul>
    </div>
  );
};

export default Pokemon;

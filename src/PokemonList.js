import React, { useContext } from "react";
import { PokemonContext } from "./PokemonContext";

const PokemonList = () => {
  const pokemons = useContext(PokemonContext) || [];

  return (
    <div>
      <h1>Pokemons</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;

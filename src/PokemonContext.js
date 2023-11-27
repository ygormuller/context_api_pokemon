import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
        const pokemonList = response.data.results;
        const detailedPokemonList = await Promise.all(
          pokemonList.map(async (pokemon) => {
            const result = await axios.get(pokemon.url);
            return result.data;
          })
        );
        setPokemons(detailedPokemonList);
      } catch (error) {
        console.error("Error fetching data from API", error);
      }
    };

    fetchPokemons();
  }, []);

  return <PokemonContext.Provider value={pokemons}>{props.children}</PokemonContext.Provider>;
};

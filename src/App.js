import React from "react";
import { PokemonProvider } from "./PokemonContext";
import PokemonList from "./PokemonList";

function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <PokemonList />
      </PokemonProvider>
    </div>
  );
}

export default App;

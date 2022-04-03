import React from "react";
import Navigation from "../components/Navigation";
import PokemonList from "../components/PokemonList";

export default function HomePage() {
  return (
    <div className="wrapper">
      <Navigation />
      <PokemonList />
    </div>
  );
}

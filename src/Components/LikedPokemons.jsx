import React from "react";
import "./LikedPokemons.css"; // Import the CSS file

const LikedPokemons = ({ likedPokemons }) => {
  return (
    <div className="liked-pokemons-page">
      <h2>Liked Pokémon</h2>
      <div className="liked-pokemon-container">
        {likedPokemons.map((pokemon, index) => (
          <div className="liked-pokemon-card" key={index}>
            <h3>{pokemon.name}</h3>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
            />
          </div>
        ))}
      </div>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default LikedPokemons;

import React from "react";

const LikedPokemons = ({ likedPokemons }) => {
  return (
    <div className="liked-pokemons-page">
      <h2>Liked Pokémon</h2>
      <ul>
        {likedPokemons.map((pokemon, index) => (
          <li key={index}>
            <h3>{pokemon.name}</h3>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
            />
          </li>
        ))}
      </ul>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default LikedPokemons;

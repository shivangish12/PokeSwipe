import React from "react";

const PokemonCard = ({ pokemon, onLike, onDislike }) => {
  if (!pokemon) return null;

  const { name, id, abilities, types } = pokemon;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return (
    <div className="pokemon-card">
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <div className="pokemon-details">
        <h3>Abilities:</h3>
        <ul>
          {abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>
        <h3>Types:</h3>
        <ul>
          {types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </ul>
      </div>
      <div className="pokemon-card-buttons">
        <button className="like-button" onClick={onLike}>
          Like
        </button>
        <button className="dislike-button" onClick={onDislike}>
          Dislike
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;

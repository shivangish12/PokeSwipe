import React from "react";
import styles from "./PokemonCard.module.css";

const PokemonCard = ({ pokemon, onLike, onDislike }) => {
  if (!pokemon) return null;

  const { name, id, abilities, types } = pokemon;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return (
    <div className={styles["pokemon-card"]}>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <div className={styles["pokemon-details"]}>
        <ul>
          {abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>

        <ul>
          {types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </ul>
      </div>
      <div className={styles["pokemon-card-buttons"]}>
        <button className={styles["like-button"]} onClick={onLike}>
          Like
        </button>
        <button className={styles["dislike-button"]} onClick={onDislike}>
          Dislike
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;

import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Button from "./Button";
import PokemonCard from "./PokemonCard";
import LikedPokemons from "./LikedPokemons";
import styles from "./Welcome.module.css";

const Welcome = () => {
  const [pokemon, setPokemon] = useState(null);
  const [likedPokemons, setLikedPokemons] = useState([]);

  const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    const data = await response.json();
    setPokemon(data);
  };

  const handleLike = () => {
    setLikedPokemons([...likedPokemons, pokemon]);
    fetchRandomPokemon();
  };

  const handleDislike = () => {
    fetchRandomPokemon();
  };

  return (
    <div className={styles["welcome-page"]}>
      <h2>How to play PokeSwipe</h2>
      <section className={styles.instructions}>
        <p>Pokemon Appear One At A Time</p>
        <p>Choose "Like" or "Dislike"</p>
        <p>Build Your Favorite Team</p>
      </section>
      {!pokemon && <Button onClick={fetchRandomPokemon} />}
      {pokemon && (
        <PokemonCard
          pokemon={pokemon}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      )}
      <div className={styles.liked}>
        <Link to="/liked">View Liked Pokémon</Link>
      </div>
      <Routes>
        <Route
          path="/liked"
          element={<LikedPokemons likedPokemons={likedPokemons} />}
        />
      </Routes>
    </div>
  );
};

export default Welcome;

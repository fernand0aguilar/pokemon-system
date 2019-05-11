import React from 'react';


const Pokemon = ({pokemon}) => (
  <section className="pokemon-listing">
    <h3 className="name">{pokemon.name}</h3>
    <section>
      <figure>
        <img src={pokemon.url} alt={pokemon.name} ></img>
        <figcaption>{pokemon.name}</figcaption>
      </figure>
      <p>Evoluttion: {pokemon.evolution}</p>
    </section>
  </section>
);

export default Pokemon;
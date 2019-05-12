import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PokemonNotFound from './PokemonNotFound';

const Pokemon = ({ pokemon, onDelete }) => {
  if (!pokemon) return <PokemonNotFound />;

  return (
    <section className="pokemon-listing">
      <h3>
        {pokemon.id}{' - '}{pokemon.name}{' '}
        <br />
        <Link to={`/pokemons/${pokemon.id}/edit`}>Edit </Link>
        <button className="delete" type="button" onClick={() => onDelete(pokemon.id)}>
          Delete
        </button>
      </h3>
      <section>
        <figure>
          <img src={pokemon.url} alt={pokemon.name} ></img>
          <figcaption>{pokemon.name}</figcaption>
        </figure>
        <p>Evolution: {pokemon.evolution}</p>
      </section>
    </section>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape(),
  onDelete: PropTypes.func.isRequired,
};

Pokemon.defaultProps = {
  pokemon: undefined,
};

export default Pokemon;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon'

const PokemonList = ({pokemons}) => (
    <ul className="pokemons">
        {
            pokemons.map(pokemon => (
                <li key={pokemon.id}>
                    <Link to={`/pokemons/${pokemon.id}`}>
                        <Pokemon pokemon={pokemon} />
                    </Link>
                </li>
            ))
        }
    </ul>
);

PokemonList.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })).isRequired
}

export default PokemonList;
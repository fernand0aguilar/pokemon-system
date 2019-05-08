import React, {Component} from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const GET_POKEMONS_REQUEST = 'GET_POKEMONS_REQUEST';
const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';

class PokedexPage extends Component {
    render() {
        const { pokemons } = this.props;
        console.log("props"+this.props);
        console.log("pokemons"+pokemons);
        
        const pokemonsList = pokemons.map((pokemon) => {
            return <li key={pokemon.id}>* {pokemon.name} {pokemon.url}</li>
        });
        console.log("list"+pokemonsList);
        
        return (
        <React.Fragment>
            Greeting: {this.props.greeting}
            <button className="getPokemonsBtn" onClick= {() => this.props.getPokemons()}>Get Pokemons
            </button>

            <br />
            <ul>{ pokemonsList }</ul>
        </React.Fragment>);
    }
}

function getPokemons() {
    console.log('getPokemons() Action!');
    return dispatch => {
      dispatch({
           type: GET_POKEMONS_REQUEST
      });
        return fetch(`v1/pokemons.json`)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
    };
};

export function getPokemonsSuccess(json) {
    
    
    return {
        type: GET_POKEMONS_SUCCESS,
        json
    };
};

const structuredSelector = createStructuredSelector({
    pokemons: state => state.pokemons,
});

const mapDispatchToProps = { getPokemons };

export default connect(structuredSelector, mapDispatchToProps)(PokedexPage);
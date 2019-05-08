import React, {Component} from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const GET_POKEMONS_REQUEST = 'GET_POKEMONS_REQUEST';


function getPokemons(){
  console.log('getPokemons() Action!');
  return {
      type: GET_POKEMONS_REQUEST
  }
}


class PokedexPage extends Component {
    render() {
        const { pokemons } = this.props;
        const pokemonsList = pokemons.map((pokemon) => {
            return <li key={pokemon.id}>* {pokemon.name} {pokemon.url}</li>
        });
        
        return (
        <React.Fragment>
            Greeting: {this.props.greeting}
            <button className="getPokemonsBtn" onClick= {
                () => this.props.getPokemons()}>Get Pokemons
            </button>

            <br />
            <ul>{ pokemonsList }</ul>
        </React.Fragment>);
    }
}

const structuredSelector = createStructuredSelector({
    pokemons: state => state.pokemons,
});

const mapDispatchToProps = { getPokemons };

export default connect(structuredSelector, mapDispatchToProps)(PokedexPage);
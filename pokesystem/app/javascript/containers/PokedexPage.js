import React, {Component} from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getPokemons } from '../actions'

class PokedexPage extends Component {
    render() {
        const { pokemons } = this.props;

        const pokemonsList = pokemons.map((pokemon) => {
            return <li key={pokemon.id}>* {pokemon.name} {pokemon.url}</li>
        });
                
        return (
        <React.Fragment>
            Greeting: {this.props.greeting}
            <button className="getPokemonsBtn" onClick= {() => this.props.getPokemons()}>
            Get Pokemons
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
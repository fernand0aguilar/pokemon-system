import React, {Component} from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getPokemons } from '../actions'
import PokemonList from '../components/PokemonList'

class PokedexPage extends Component {
    render() {
        const { pokemons } = this.props;
                
        return (
            pokemons ? 
                <React.Fragment>
                    Greeting: {this.props.greeting}
                    <button className="getPokemonsBtn" onClick= {() => this.props.getPokemons()}>
                    Get Pokemons
                    </button>
                    <br />
                    <PokemonList pokemons={pokemons} />
                </React.Fragment>
            : <h1>Loading...</h1>
        );
    }
}

const structuredSelector = createStructuredSelector({
    pokemons: state => state.pokemons,
});

const mapDispatchToProps = { getPokemons };

export default connect(structuredSelector, mapDispatchToProps)(PokedexPage);
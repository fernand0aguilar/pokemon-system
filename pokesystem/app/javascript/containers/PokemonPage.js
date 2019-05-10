import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {getPokemons} from '../actions'

import Pokemon from '../components/Pokemon';

export class PokemonPage extends Component {
    state = {pokemon:null}
    componentDidMount = async () => {
        const id = Number(this.props.match.params.id) - 1;            
        await this.props.getPokemons()
            .then(response => this.setState({pokemon: response.json[id]}));                
    }

    render() {
        const pokemon = this.state.pokemon;
        return (
            pokemon ? 
                <React.Fragment>
                    <h2> List Pokemon by ID </h2>
                    <br />
                    <Pokemon pokemon={pokemon} />
                </React.Fragment>
            : <h1>Loading...</h1>
        );
    }
}

const structuredSelector = createStructuredSelector({
    pokemons: state => state,
});

const mapDispatchToProps = {
    getPokemons
};

export default connect(structuredSelector, mapDispatchToProps)(PokemonPage);
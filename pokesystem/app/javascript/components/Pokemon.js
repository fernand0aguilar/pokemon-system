import React from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const GET_POKEMONS_REQUEST = 'GET_POKEMONS_REQUEST';

function getPokemons(){
  console.log('getPokemons() Action!');
  return {
    type: GET_POKEMONS_REQUEST
  };
};

class Pokemon extends React.Component {
  render() {
    const pokemon = this.props;
    const pokemonsList = <li>{pokemon.name}{pokemon.url}</li>
    

    return (
      <React.Fragment>
        <button className="getPokemonsBtn" onClick={() => this.props.getPokemons()}>getPokemons</button>
        <ul>{ pokemonsList }</ul>
      </React.Fragment>
    );
  }
}
const structuredSelector = createStructuredSelector({
  pokemons: state => state.things,
});

const mapDispachToProps = { getPokemons };

export default connect(structuredSelector, mapDispachToProps)(Pokemon);

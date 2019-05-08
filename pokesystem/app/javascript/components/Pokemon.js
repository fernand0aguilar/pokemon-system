import React from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'



export function getPokemonsSuccess(json) {
  return {
    type: GET_POKEMONS_SUCCESS,
    json
  }
};

class Pokemon extends React.Component {
  render() {
    console.log(this.props);
    const { pokemons } = this.props;
    const pokemonsList = pokemons.map((pokemon) => {<li>{pokemon.name}{pokemon.url}</li>});
    

    return (
      <React.Fragment>
        <button className="getPokemonsBtn" onClick={() => this.props.getPokemons()}>getPokemons</button>
        <br />
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

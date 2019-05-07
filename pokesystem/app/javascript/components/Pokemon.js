import React from "react"
import PropTypes from "prop-types"



class Pokemon extends React.Component {
  render() {
    const {pokemons} = this.props;
    const pokemonList = pokemons;
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};
export default Pokemon

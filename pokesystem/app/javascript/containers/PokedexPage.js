import React, {Component} from 'react';

class PokedexPage extends Component {
    state = {
        pokemons: null
    };

    render() {
        const { pokemons } = this.state;
        return pokemons ? 
            <h1>Pokemons Page!</h1>
            : <h1>Loading...</h1>
    }
}

export default PokedexPage;
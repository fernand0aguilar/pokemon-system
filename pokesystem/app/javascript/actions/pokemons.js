export const GET_POKEMONS_REQUEST = 'GET_POKEMONS_REQUEST';
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';

export function getPokemons() {
    console.log('getPokemons() Action!');
    return dispatch => {
        dispatch({
            type: GET_POKEMONS_REQUEST
        });
        return fetch(`v1/pokemons.json`)
            .then(response => response.json())
            .then(json => dispatch(getPokemonsSuccess(json)))
            .catch(error => console.log(error));
    };
};

export function getPokemonsSuccess(json) {
    return {
        type: GET_POKEMONS_SUCCESS,
        json
    };
};

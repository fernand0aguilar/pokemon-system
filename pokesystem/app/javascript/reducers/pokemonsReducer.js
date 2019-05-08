const initialState = {
    pokemons: []
}

export function pokemonsReducer(state = initialState, action){
    console.log(action.type);
    switch (action.type) {
        case "GET_POKEMONS_SUCCESS":
            return action.json.pokemons;
        case "GET_SINGLE_POKEMON_SUCCESS":
            return action.json.pokemons;
    }
    return state;        
}
const initialState = [];

export function pokemonsReducer(state = initialState, action){
    console.log("pokemonsReducer type: ", action.type);
    switch (action.type) {
        case "GET_POKEMONS_SUCCESS":
            return action.json.pokemons;
    }
    return state;        
}
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const initialState = {
    pokemons: [
        {
            id: 1,
            name: "Ditto",
            url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        },
        {
            id: 2,
            name: "pikachu",
            url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        }
    ]
};

const initialStateEmpty = {
        pokemons: []
};

function rootReducer(state, action) {
    console.log(action.type);
    switch(action.type) {
        case "GET_POKEMONS_SUCCESS":
            return { pokemons: action.json.pokemons };
    }
    return state;
}


export default function configureStore() {
    const store = createStore(
        rootReducer, 
        initialStateEmpty,
        applyMiddleware(thunk)
    );
    return store;
}
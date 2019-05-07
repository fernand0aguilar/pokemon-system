import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const initialState = {
    pokemons: [
        {
            name: "Ditto",
            url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        },
        {
            name: "pikachu",
            url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        }
    ]
};

function rootReducer(state, action) {
    console.log(action.type);
    switch(action.type) {
        default:
            return state
    }
}

export default function configureStore() {
    const store = createStore(
        rootReducer, 
        initialState,
        applyMiddleware(thunk)
    );
    return store;
}
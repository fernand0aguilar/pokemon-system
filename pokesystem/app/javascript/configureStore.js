import { createStore } from "redux";


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

function rootReducer(state, action) {
    console.log(action.type);
    switch(action.type) {
        case "GET_THINGS_SUCCESS":
            return { things: action.json.things };
    }
    return state;
}


export default function configureStore() {
    const store = createStore(
        rootReducer, 
        initialState,
    );
    return store;
}
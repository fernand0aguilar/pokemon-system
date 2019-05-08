import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
    pokemons: [
        {
            id: 0,
            name: "test",
            url: "123"
        }
    ]
}

export default function configureStore() {
    const store = createStore(
        rootReducer, 
        initialState, 
        applyMiddleware(thunk)
    );
    return store;
}

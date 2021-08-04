import { createStore, combineReducers } from "redux"; 
import { composeWithDevTools } from "redux-devtools-extension";


import productReducer from './products.js';



let reducers = combineReducers({
    store: productReducer,
});


export default createStore(reducers, composeWithDevTools()); 
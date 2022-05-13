import { combineReducers } from 'redux';
import * as types from './types';
// COUNTER REDUCER


// QUOTE OF THE DAY
const productReducer = (state = {}, {types, payload }) => {
    if(types){
        return payload;
    }
    else{
        return state
    }
  
};

// COMBINED REDUCERS
const reducer = {
  product: productReducer
};

export default combineReducers(reducer);
import * as R from 'ramda';
import { ADD_PHONE_TO_BASKET, CLEAN_BASKET, REMOVE_PHONE_FROM_BASKET } from '../actionTypes';

const initState = [];

export default ( state = initState, action) => {
    switch(action.type) {
        case ADD_PHONE_TO_BASKET:
            return R.append(action.payload, state);
        case REMOVE_PHONE_FROM_BASKET:
            return R.without([action.payload], state);
        case CLEAN_BASKET: 
            return initState
        default: 
            return state;
    }
}


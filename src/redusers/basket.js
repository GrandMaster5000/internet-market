import * as R from 'ramda';
import { ADD_PHONE_TO_BASKET } from '../actionTypes';

const initState = [];

export default ( state = initState, action) => {
    switch(action.type) {
        case ADD_PHONE_TO_BASKET:
            return R.append(action.payload, state)
        default: 
            return state;
    }
}


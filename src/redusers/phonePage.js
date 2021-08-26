import * as R from 'ramda';
import {FETCH_PHONE_BY_ID_SUCCESS} from '../actionTypes';

const initState = {
    id: null
}

export default (state = initState, action) => {
    switch(action.type) {
        case FETCH_PHONE_BY_ID_SUCCESS:
            return R.merge(state, {
                id: action.payload.id
            })
        default:
            return state;
    }
}
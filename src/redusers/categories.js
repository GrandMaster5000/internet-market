import * as R from 'ramda';
import { FETCH_CATEGORIES_SUCCESS} from "../actionTypes";
const initState = {}

export default (state = initState, action) => {
    switch(action.type) {
        case FETCH_CATEGORIES_SUCCESS :
            const newValues = R.indexBy(R.prop('id'), action.payload);
            return R.merge(state, newValues);
        default: 
            return state;
    }
}
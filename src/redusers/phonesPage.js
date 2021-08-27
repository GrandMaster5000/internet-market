import * as R from 'ramda';
import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS, SEARCH_PHONE, COLLAPSE_PHONES} from "../actionTypes";

const initState = {
    ids: [],
    search: ''
}

export default (state = initState, action) => {
    switch(action.type) {
        case FETCH_PHONES_SUCCESS: 
            return R.merge(state, {
                ids: R.pluck('id', action.payload)
            })
        case LOAD_MORE_PHONES_SUCCESS:
            const ids = R.pluck('id', action.payload);
            return R.merge(state, {
                ids: R.concat(state.ids, ids)
            })
        case SEARCH_PHONE:
            return R.merge(state, {
                search: action.payload
            });
        case COLLAPSE_PHONES:
            const idsLength = state.ids.length;
            if(idsLength % 6 === 0 && idsLength > 6) {
               return {
                    ...state,
                    ids: state.ids.slice(0, idsLength - 6)
                }
            } else if(idsLength % 6 !== 0 && idsLength > 6 ) {
                return {
                    ...state,
                    ids: state.ids.slice(0, idsLength - (idsLength % 6))
                }
            } else {
                return state
            }
        default:
            return state;
    }
}
import {ADD_PERSON_TO_FAVOURITE, REMOVE_PERSON_FROM_FAVOURITE} from '../constans';

const favouriteReducer = (state, action) => {
    switch (action.type) {
        case ADD_PERSON_TO_FAVOURITE:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_PERSON_FROM_FAVOURITE:
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
}

export default favouriteReducer;
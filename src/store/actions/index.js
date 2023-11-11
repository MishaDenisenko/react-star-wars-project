import {ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE} from '../constans';

export const setPersonToFavourite = () => ({
    type: ADD_PERSON_TO_FAVORITE,
    payload: ''
});

export const removePersonFromFavourite = () => ({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payload: ''
});
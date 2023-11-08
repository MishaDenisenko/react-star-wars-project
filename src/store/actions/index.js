import {ADD_PERSON_TO_FAVOURITE, REMOVE_PERSON_FROM_FAVOURITE} from '../constans';

export const setPersonToFavourite = () => ({
    type: ADD_PERSON_TO_FAVOURITE,
    payload: ''
});

export const removePersonFromFavourite = () => ({
    type: REMOVE_PERSON_FROM_FAVOURITE,
    payload: ''
});
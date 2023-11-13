import {ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE} from '../constans';

export const setPersonToFavourite = person => ({
    type: ADD_PERSON_TO_FAVORITE,
    payload: person
});

export const removePersonFromFavourite = personId => ({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payload: personId
});
import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';

import {removePersonFromFavourite, setPersonToFavourite} from '../../../store/actions';


import styles from './PersonPhoto.module.css';


const PersonPhoto = ({ personId, personPhoto, personName, personFavorite, setPersonFavorite }) => {
    const dispatch = useDispatch();
    
    const handleDispatchPersonFavorite = () => {
        if (!personId) return;
        
        if (personFavorite) dispatch(removePersonFromFavourite(personId));
        else dispatch(setPersonToFavourite({
            [personId]: {
                name: personName,
                img: personPhoto
            }
        }));
        
        setPersonFavorite(prev => !prev);
    }
    
    return (
        <div className={styles.container}>
            <img className={styles.photo} src={personPhoto} alt={personName}/>
            <img
                className={styles.favorite}
                src={personFavorite ? iconFavoriteFill : iconFavorite}
                onClick={handleDispatchPersonFavorite}
                alt='Add to favorite'/>
        </div>
    );
};

PersonPhoto.propTypes = {
    personId: PropTypes.string,
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func
};

export default PersonPhoto;
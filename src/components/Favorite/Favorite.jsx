import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import icon from './img/bookmark.svg';

import styles from './Favorite.module.css';
import {useSelector} from 'react-redux';
import {store} from '../../store';


const Favorite = () => {
    const [count, setCount] = useState(0);
    
    const storeData = useSelector(store => store.favoriteReducer)
    
    useEffect(() => {
        const length = Object.keys(storeData).length;
        
        setCount(length);
    }, [storeData])
    
    return (
        <div className={styles.container}>
            <Link to="/favorites">
                <span className={styles.counter}>{count}</span>
                <img className={styles.icon} src={icon} alt="Favorites"/>
            </Link>
        </div>
    );
};

export default Favorite;
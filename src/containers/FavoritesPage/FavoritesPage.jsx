import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import PeopleList from '../../components/PeoplePage/PeopleList';

import '../../styles/index.css'
import styles from './FavoritesPage.module.css';


const FavoritesPage = () => {
    const [people, setPeople] = useState([]);
    
    const storeData = useSelector(state => state.favoriteReducer);
    
    useEffect(() => {
        const peopleList = Object.entries(storeData);
        
        if (peopleList) {
            const res = peopleList.map(item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            });
            
            setPeople(res);
        }
    }, [storeData]);
    
    return (
        <>
            <h1 className={'header__text'}>Favorite Page</h1>
            {people.length ? <PeopleList people={people} /> : <h2 className={styles.comment}>No data</h2>}
        </>
    );
};

export default FavoritesPage;
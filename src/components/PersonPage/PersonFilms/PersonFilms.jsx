import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {makeConcurrentRequest} from '../../../utils/network';

import styles from './PersonFilms.module.css';


const PersonFilms = ({ personFilms }) => {
    const [filmsData, setFilmsData] = useState([]);
    
    useEffect(() => {
        (async () => {
            const res = await makeConcurrentRequest(personFilms);
            
            setFilmsData(res);
        })()
    }, [])
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {filmsData
                    .sort((prev, next) => prev.episode_id - next.episode_id)
                    .map(({title, episode_id}) => (
                        <li className={styles.list__item} key={episode_id}>
                            <span className={styles.item__episode}>Episode {episode_id}</span>
                            <span className={styles.item__colon}> : </span>
                            <span className={styles.item__title}>{title}</span>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

PersonFilms.propTypes = {
    personFilms: PropTypes.arrayOf(PropTypes.string),
};

export default PersonFilms;
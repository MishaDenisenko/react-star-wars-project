import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchPageInfo.module.css';
import {Link} from 'react-router-dom';


const SearchPageInfo = ({ people }) => {
    return (
        <>
            { people.length ?
                <ul className={ styles.list__container }>
                    { people.map(({ name, id, img }) => (
                        <li key={ id } className={ styles.list__item }>
                            <Link to={ `/people/${ id }` }>
                                <img className={ styles.person__photo } src={ img } alt={ name }/>
                                <p className={ styles.person__name }>{ name }</p>
                            </Link>
                        </li>
                    )) }
                </ul>
                :
                <h2 className={ styles.person__comment }>No results</h2>
            }
        </>
    
    );
};

SearchPageInfo.propTypes = {
    people: PropTypes.arrayOf(PropTypes.object),
};

export default SearchPageInfo;
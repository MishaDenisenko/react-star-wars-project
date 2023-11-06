import React from 'react';
import PropTypes from 'prop-types';

import {Link} from "react-router-dom";

import {SWAPI_PARAM_PAGE} from "../../../constants/api";

import styles from "./PeopleNavigation.module.css";


const PeopleNavigation = ({getResource, prevPage, nextPage, counterPage}) => {
    
    return (
        <div className={styles.container}>
            <Link to={SWAPI_PARAM_PAGE + (counterPage - 1)}>
                <button
                    className={styles.buttons}
                    onClick={() => getResource(prevPage)}
                    disabled={!prevPage}
                >Previous</button>
            </Link>
            <Link to={SWAPI_PARAM_PAGE + (counterPage + 1)}>
                <button
                    className={styles.buttons}
                    onClick={() => getResource(nextPage)}
                    disabled={!nextPage}
                >Next</button>
            </Link>
        </div>
    );
};

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
};

export default PeopleNavigation;
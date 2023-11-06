import React from 'react';
import PropTypes from 'prop-types';

import {Link} from "react-router-dom";

import {SWAPI_PARAM_PAGE} from "../../../constants/api";

import UiButton from "../../UI/UiButton";

import styles from "./PeopleNavigation.module.css";


const PeopleNavigation = ({getResource, prevPage, nextPage, counterPage}) => {
    const handleOnClick = (url) => getResource(url)
    
    return (
        <div className={styles.container}>
            <Link to={SWAPI_PARAM_PAGE + (counterPage - 1)}>
                <UiButton text={'Previous'} onClick={() => handleOnClick(prevPage)} disabled={!prevPage}/>
            </Link>
            <Link to={SWAPI_PARAM_PAGE + (counterPage + 1)}>
                <UiButton text={'Next'} onClick={() => handleOnClick(nextPage)} disabled={!nextPage}/>
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
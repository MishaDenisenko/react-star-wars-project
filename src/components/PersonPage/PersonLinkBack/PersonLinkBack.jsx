import React from 'react';
import {useNavigate} from 'react-router-dom'

import img from './img/back.svg';


import styles from './PersonLinkBack.module.css';


const PersonLinkBack = () => {
    const navigate = useNavigate();
    const handleGoBack = (event) => {
        event.preventDefault();
        navigate(-1);
    }
    
    return (
        <a className={styles.link} href={'/#'} onClick={handleGoBack}>
            <img className={styles.link__img} src={img} alt='goBack'/>
            <span>Go Back</span>
        </a>
    );
};

export default PersonLinkBack;
import React from 'react';

import ChoseTheme from '../../components/HomePage/ChoseTheme';

import styles from "./HomePage.module.css";


const HomePage = () => {
    return (
        <>
            <h1 className={"header__text"}>Home Page</h1>
            <ChoseTheme/>
        </>
    );
};

export default HomePage;
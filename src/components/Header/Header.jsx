import React from 'react';
import {NavLink} from "react-router-dom";

import routesConfig from "../../routes/routesConfig";

import styles from "./Header.module.css";


const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                {routesConfig.map(({navPath, title}, index) => (
                    title && <li key={index}><NavLink to={navPath} >{title}</NavLink></li>
                ))}
            </ul>

        </div>
    );
};

export default Header;
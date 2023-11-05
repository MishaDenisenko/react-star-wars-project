import React from 'react';
import {NavLink} from "react-router-dom";

import styles from "./Header.module.css";
import routesConfig from "../../routes/routesConfig";


const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                {routesConfig.map(({path, title}, index) => (
                    title && <li key={index}><NavLink to={path} >{title}</NavLink></li>
                ))}
            </ul>

        </div>
    );
};

export default Header;
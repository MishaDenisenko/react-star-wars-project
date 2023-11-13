import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';

import imgSpaceStation from './img/space-station.svg';
import imgDroid from './img/droid.svg';
import imgLightSaber from './img/lightsaber.svg';

import routesConfig from '../../routes/routesConfig';

import Favorite from '../Favorite';
import {THEME_NEUTRAL, THEME_LIGHT, THEME_DARK} from '../../context/constants';
import {useTheme} from '../../context/providers/ThemProvider';

import styles from './Header.module.css';

const themes = {
    [THEME_NEUTRAL]: imgDroid,
    [THEME_LIGHT]: imgLightSaber,
    [THEME_DARK]: imgSpaceStation,
}

const Header = () => {
    const isTheme = useTheme();
    const [icon, setIcon] = useState(themes[THEME_NEUTRAL]);
    
    useEffect(() => {
        setIcon(themes[isTheme.theme])
    }, [isTheme]);
    
    return (
        <div className={ styles.container }>
            <img className={styles.logo} src={icon} alt={'logo'}/>
            
            <ul className={ styles.list__container }>
                { routesConfig.map(({ navPath, title }, index) => (
                    navPath && <li key={ index }><NavLink to={ navPath }>{ title }</NavLink></li>
                )) }
            </ul>
        
            <Favorite/>
        </div>
    );
};

export default Header;
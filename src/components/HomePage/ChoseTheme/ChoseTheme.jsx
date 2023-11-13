import React from 'react';
import PropTypes, {element} from 'prop-types';


import {THEME_NEUTRAL, THEME_LIGHT, THEME_DARK} from '../../../context/constants';
import {useTheme} from '../../../context/providers/ThemProvider';
import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg';

import styles from './ChoseTheme.module.css';
import cn from 'classnames';


const ChooseSideItem = ({ theme, classes, text, img }) => {
    const isTheme = useTheme();
    
    return (
        <div className={ cn(styles.item, classes) } onClick={ () => isTheme.change(theme) }>
            <div className={ styles.item__header }>{ text }</div>
            <img className={ styles.item__img } src={ img } alt={ text }/>
        </div>
    );
};

ChooseSideItem.propTypes = {
    classes: PropTypes.string,
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
};

const ChoseTheme = () => {
    const elements = [
        {
            theme: THEME_LIGHT,
            text: 'Light Side',
            img: imgLightSide,
            classes: styles.item__light,
        },
        {
            theme: THEME_DARK,
            text: 'Dark Side',
            img: imgDarkSide,
            classes: styles.item__dark,
        },
        {
            theme: THEME_NEUTRAL,
            text: 'I\'m Han Solo',
            img: imgFalcon,
            classes: styles.item__neutral,
        },
    ];
    
    return (
        <div className={styles.container}>
            { elements.map(({ theme, text, img, classes }, index) => (
                <ChooseSideItem key={ index } theme={ theme } text={ text } img={ img } classes={ classes }/>
            )) }
        </div>
    );
};

export default ChoseTheme;
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';


import loaderBlack from './img/loader-black.svg';
import loaderWhite from './img/loader-white.svg';
import loaderBlue from './img/loader-blue.svg';

import '../index.css';
import styles from './UiLoading.module.css';

const themeLoader = {
    'black': loaderBlack,
    'white': loaderWhite,
    'blue': loaderBlue,
}

const UiLoading = ({ theme='white', isShadow=true, classes }) => {
    const [loaderIcon, setLoaderIcon] = useState(loaderWhite);
    
    useEffect(() => setLoaderIcon(themeLoader[theme]), [])
    
    return (
        <img className={cn(styles.loader, isShadow && styles.shadow)} src={loaderIcon} alt={'Loader'}/>
    );
};

UiLoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string
};

export default UiLoading;
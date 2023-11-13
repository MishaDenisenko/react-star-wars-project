import React from 'react';
import PropTypes from 'prop-types';

import img from './img/cancel.svg';


import styles from './UiSearch.module.css';
import cn from 'classnames';



const UiSearch = ({value, classes, inputOnChange, placeholder}) => {
    
    return (
        <div className={cn(styles.wrapper__input, classes)}>
            <input
                className={styles.input}
                value={value}
                onChange={(e) => inputOnChange(e.target.value)}
                placeholder={placeholder}/>
            <img
                className={cn(styles.clear, !value && styles.clear__disabled)}
                onClick={() => value && inputOnChange('')}
                src={img}
                alt={'clear'}/>
        </div>
    )
};

UiSearch.propTypes = {
    value: PropTypes.string,
    classes: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

export default UiSearch;
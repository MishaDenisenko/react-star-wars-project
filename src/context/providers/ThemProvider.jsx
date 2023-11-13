import React, {useContext, useState} from 'react';
import {changeCssVariables} from '../../services/changeCssVariables';
import {THEME_NEUTRAL} from '../constants';

const ThemContext = React.createContext();

export const ThemProvider = ({ children, ...props }) => {
    const [theme, setTheme] = useState(THEME_NEUTRAL);
    const change = (name) => {
        setTheme(name);
        changeCssVariables(name);
    };
    
    return (
        <ThemContext.Provider value={ { theme, change } } { ...props }>
            { children }
        </ThemContext.Provider>
    );
};

export const useTheme = () => useContext(ThemContext);
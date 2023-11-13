import {THEME_DARK, THEME_LIGHT, THEME_NEUTRAL} from '../context/constants';
const root = document.querySelector(':root');

const themes = {
    [THEME_NEUTRAL]: {
        fontColor: 'var(--theme-neutral-header)',
        background: 'var(--theme-neutral-bgimage)'
    },
    [THEME_LIGHT]: {
        fontColor: 'var(--theme-light-header)',
        background: 'var(--theme-light-bgimage)'
    },
    [THEME_DARK]: {
        fontColor: 'var(--theme-dark-header)',
        background: 'var(--theme-dark-bgimage)'
    },
}

export const changeCssVariables = (name) => {
    const theme = themes[name];
    
    root.style.setProperty('--theme-default-header', theme.fontColor);
    root.style.setProperty('--theme-default-bgimage', theme.background);
}

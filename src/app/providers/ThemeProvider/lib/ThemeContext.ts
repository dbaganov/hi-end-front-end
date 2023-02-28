import { createContext } from 'react';

export enum Theme {
    Light = 'light',
    Dark = 'dark'
}

export enum ThemeIcons {
    Light = '🌞',
    Dark = '🌚'
}

export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.Light,
    setTheme: () => {}
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseTheme {
    theme: Theme;
    toggleTheme: () => void;
    setNewTheme: (theme: Theme) => void;
}

function useTheme(): UseTheme {
    const { theme, setTheme } = useContext(ThemeContext);

    const saveTheme = (theme: Theme) => {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    };

    const setNewTheme = (theme: Theme) => {
        setTheme(theme);
        saveTheme(theme);
    };

    const toggleTheme = () => {
        const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
        setNewTheme(newTheme);
    };

    return {
        theme,
        toggleTheme,
        setNewTheme
    };
}

export default useTheme;

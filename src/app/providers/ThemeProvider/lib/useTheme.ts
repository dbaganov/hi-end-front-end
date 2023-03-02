import { useContext, useEffect } from 'react';
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

    useEffect(() => {
        document.body.classList.remove(Theme.Light, Theme.Dark);
        document.body.classList.add(theme);
    }, [theme]);

    return {
        theme,
        toggleTheme,
        setNewTheme
    };
}

export default useTheme;

import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseTheme {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): UseTheme {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
        setTheme(newTheme);
        saveTheme(newTheme);
    }

    const saveTheme = (theme: Theme) => {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }

    return {
        theme,
        toggleTheme
    };
}

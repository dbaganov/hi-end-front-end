import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'widgets/Button';
import { ThemeButton } from 'widgets/Button/ui/Button';
import styles from './ThemeSwitcher.module.scss';

function ThemeSwitcher() {
    const { theme, setNewTheme } = useTheme();
    const classes = classNames(styles['theme-switcher'], {}, [theme]);

    return (
        <div className={classes}>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={() => setNewTheme(Theme.Dark)}
            >
                <FontAwesomeIcon icon={faMoon} />
            </Button>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={() => setNewTheme(Theme.Light)}
            >
                <FontAwesomeIcon icon={faSun} />
            </Button>
        </div>
    );
}

export default ThemeSwitcher;

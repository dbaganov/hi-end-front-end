import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'widgets/Button';
import { ThemeButton } from 'widgets/Button/ui/Button';
import { ThemeIcons } from 'app/providers/ThemeProvider/lib/ThemeContext';
import styles from './ThemeSwitcher.module.scss';

function ThemeSwitcher() {
    const availableThemes = Object.keys(Theme);
    const { theme: appTheme, setNewTheme } = useTheme();
    const classes = classNames(styles['theme-switcher'], {}, [appTheme]);

    return (
        <div className={classes}>
            {availableThemes.map(theme => (
                <Button
                    className={classNames(styles['theme-switcher__button'], {
                        [styles['theme-switcher__button--active']]:
                            appTheme === theme.toLowerCase()
                    })}
                    theme={ThemeButton.CLEAR}
                    onClick={() =>
                        setNewTheme(Theme[theme as keyof typeof Theme])
                    }
                >
                    {ThemeIcons[theme as keyof typeof ThemeIcons]}
                </Button>
            ))}
        </div>
    );
}

export default ThemeSwitcher;

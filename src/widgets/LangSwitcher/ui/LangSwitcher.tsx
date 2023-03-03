import React, { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'widgets/Button';
import { ThemeButton } from 'widgets/Button/ui/Button';
import i18n from 'shared/config/i18n/i18n';
import styles from './LangSwitcher.module.scss';

export enum Lang {
    EN = 'en',
    FI = 'fi'
}

enum LangFlag {
    EN = '🇺🇸',
    FI = '🇫🇮'
}

function LangSwitcher() {
    const { language } = i18n;
    const availableLanguages = Object.keys(Lang);
    const classes = classNames(styles['lang-switcher'], {}, []);

    const toggleLang = (lang: Lang) => () => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className={classes}>
            {availableLanguages.map(lang => (
                <Button
                    key={lang}
                    className={classNames(styles['lang-switcher__button'], {
                        [styles['lang-switcher__button--active']]:
                            language === lang.toLowerCase()
                    })}
                    theme={ThemeButton.CLEAR}
                    onClick={toggleLang(Lang[lang as keyof typeof Lang])}
                >
                    {LangFlag[lang as keyof typeof LangFlag]}
                </Button>
            ))}
        </div>
    );
}

export default LangSwitcher;
